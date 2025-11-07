# Contact Page Map Configuration

## Map Preview Setup

The contact page includes a map preview component that works in two modes:

### 1. Placeholder Mode (Default)
- Shows a styled placeholder with the pharmacy location
- No API key required
- Always functional

### 2. Real Map Mode (Optional)
To enable real map preview, add this to your `.env.local` file:

```env
NEXT_PUBLIC_MAPTILER_KEY=your_api_key_here
```

Get a free API key at: https://www.maptiler.com/

### Alternative: Google Static Maps
You can also modify the `StaticMap.tsx` component to use Google Static Maps instead:

```env
NEXT_PUBLIC_GOOGLE_STATIC_MAPS_KEY=your_google_api_key_here
```

## Features

- **Responsive design**: Works on all screen sizes
- **Fallback handling**: Graceful degradation when no API key is configured
- **Error handling**: Falls back to placeholder if map loading fails
- **Accessibility**: Proper alt text and focus states
- **Google Maps integration**: "View in Maps" button for full navigation

## Files

- `app/contact/page.tsx` - Main contact page
- `app/contact/_components/StaticMap.tsx` - Map preview component
- `app/contact/_components/ContactForm.tsx` - Contact form component
- `lib/location.ts` - Single location data source














