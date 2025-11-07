export function track(event: string, payload?: Record<string, unknown>) {
  // no-op stub; wire to GA/Meta later
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug("[track]", event, payload || {});
  }
}














