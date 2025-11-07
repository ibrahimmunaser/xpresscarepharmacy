import { SINGLE_LOCATION } from '@/lib/location';

export default function StaticMap() {
  const { name, googleMapsPlaceUrl, lat, lng } = SINGLE_LOCATION;
  
  // Check if we have MapTiler API key
  const mapTilerKey = process.env.NEXT_PUBLIC_MAPTILER_KEY;
  
  let staticMapSrc: string;
  
  if (mapTilerKey && mapTilerKey !== 'TODO_MAPTILER_KEY') {
    // Use MapTiler if API key is available
    staticMapSrc = `https://api.maptiler.com/maps/streets/static/${lng},${lat},15/600x360@2x.png?key=${mapTilerKey}&markers=${lng},${lat}`;
  } else {
    // Use OpenStreetMap static image as fallback
    // This creates a simple visual placeholder showing the general area
    staticMapSrc = `https://tile.openstreetmap.org/15/${Math.floor((lng + 180) * (2**15) / 360)}/${Math.floor((1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI) / 2 * (2**15))}.png`;
  }

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg ring-1 ring-gray-200 bg-gray-100">
        {mapTilerKey && mapTilerKey !== 'TODO_MAPTILER_KEY' ? (
          // Show actual map when API key is available
          <img
            src={staticMapSrc}
            alt={`${name} map preview`}
            className="h-auto w-full object-cover"
            width={600}
            height={360}
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              const target = e.target as HTMLImageElement;
              target.src = 'data:image/svg+xml;base64,' + btoa(`
                <svg width="600" height="360" xmlns="http://www.w3.org/2000/svg">
                  <rect width="600" height="360" fill="#f3f4f6"/>
                  <g transform="translate(300,180)">
                    <circle cx="0" cy="0" r="40" fill="#ef4444"/>
                    <circle cx="0" cy="0" r="20" fill="#ffffff"/>
                    <circle cx="0" cy="0" r="8" fill="#ef4444"/>
                  </g>
                  <text x="300" y="250" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="#6b7280">
                    ${name}
                  </text>
                  <text x="300" y="270" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#9ca3af">
                    3040 E 7 Mile, Detroit, MI 48234
                  </text>
                </svg>
              `);
            }}
          />
        ) : (
          // Show styled placeholder when no API key
          <div className="flex h-[360px] w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="text-center">
              {/* Map pin icon */}
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#10254D]">
                <svg 
                  className="h-8 w-8 text-white" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                  />
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-brand-navy mb-1">{name}</h3>
              <p className="text-sm text-slate-600 mb-2">3040 E 7 Mile, Detroit, MI 48234</p>
              <p className="text-xs text-slate-500">Detroit, Michigan</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Overlay "View in Maps" button */}
      <div className="absolute bottom-3 right-3">
        <a
          href={googleMapsPlaceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-md bg-white/90 backdrop-blur-sm px-3 py-2 text-xs font-medium text-brand-navy border border-gray-200 hover:bg-white transition-colors shadow-sm"
        >
          <svg className="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          View in Maps
        </a>
      </div>
    </div>
  );
}









