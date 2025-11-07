// Simple in-memory rate limiter
// TODO: replace with Redis in production for multi-instance deployments

const rateMap = new Map<string, number[]>()

const WINDOW_MS = 10 * 60 * 1000 // 10 minutes
const MAX_REQUESTS = 5 // 5 submissions per 10 minutes per IP

export function allowIp(ip: string): boolean {
  const now = Date.now()
  const key = ip
  
  // Get existing timestamps for this IP
  const timestamps = rateMap.get(key) || []
  
  // Remove old timestamps outside the window
  const validTimestamps = timestamps.filter(timestamp => now - timestamp < WINDOW_MS)
  
  // Check if under the limit
  if (validTimestamps.length >= MAX_REQUESTS) {
    // Update the map with cleaned timestamps
    rateMap.set(key, validTimestamps)
    return false
  }
  
  // Add current timestamp and update map
  validTimestamps.push(now)
  rateMap.set(key, validTimestamps)
  
  return true
}

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now()
  const keys = Array.from(rateMap.keys())
  for (const key of keys) {
    const timestamps = rateMap.get(key) || []
    const validTimestamps = timestamps.filter(timestamp => now - timestamp < WINDOW_MS)
    if (validTimestamps.length === 0) {
      rateMap.delete(key)
    } else {
      rateMap.set(key, validTimestamps)
    }
  }
}, WINDOW_MS)
