'use client'

import { LOCATION, formatRange, getFullAddress } from '@/lib/location'
import Card from './Card'
import Button from './Button'

export default function LocationFinder() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Location Card */}
      <div>
        <h3 className="text-lg font-semibold text-brand-navy mb-4">Our Location</h3>
        <Card className="h-full">
          <div className="p-6">
            <h4 className="text-xl font-bold text-brand-navy mb-2">{LOCATION.name}</h4>
            <p className="text-slate-600 mb-4">{getFullAddress()}</p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-brand-navy">Phone:</span>
                <a 
                  href={`tel:${LOCATION.phone.replace(/[^0-9]/g,'')}`}
                  className="text-brand-600 hover:text-brand-700 text-sm font-medium"
                >
                  {LOCATION.phone}
                </a>
              </div>
              
              {LOCATION.fax && (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-brand-navy">Fax:</span>
                  <span className="text-slate-600 text-sm">{LOCATION.fax}</span>
                </div>
              )}
            </div>

            <div className="mb-6">
              <h5 className="text-sm font-semibold text-brand-navy mb-2">Hours</h5>
              <div className="space-y-1">
                {LOCATION.hours.map((h) => (
                  <div key={h.day} className="flex justify-between text-sm">
                    <span className="text-slate-600">{h.day}</span>
                    <span className="text-brand-navy">
                      {h.note || (h.open && h.close ? formatRange(h.open, h.close) : 'Closed')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {LOCATION.serviceBadges && LOCATION.serviceBadges.length > 0 && (
              <div className="mb-6">
                <h5 className="text-sm font-semibold text-brand-navy mb-2">Services</h5>
                <div className="flex flex-wrap gap-2">
                  {LOCATION.serviceBadges.map((badge: string, index: number) => (
                    <span 
                      key={index}
                      className="inline-block bg-brand-50 text-brand-700 text-xs px-2 py-1 rounded-full"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                as="a"
                href={`tel:${LOCATION.phone.replace(/[^0-9]/g,'')}`}
                variant="primary"
                size="sm"
                className="flex-1"
              >
                Call {LOCATION.phone}
              </Button>
              <Button
                as="a"
                href={`https://maps.google.com/maps?q=${encodeURIComponent(getFullAddress())}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="sm"
                className="flex-1"
              >
                Get Directions
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Map */}
      <div>
        <h3 className="text-lg font-semibold text-brand-navy mb-4">Find Us</h3>
        <div className="w-full overflow-hidden rounded-xl border border-gray-200">
          <iframe
            title="Map - Xpress Care Pharmacy"
            className="h-[400px] w-full"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=-83.08%2C42.42%2C-83.03%2C42.45&layer=mapnik&marker=42.43%2C-83.055`}
            // If we don't know exact lat/lng, this still renders Detroit; replace with true coords if available.
          />
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-card">
            <p className="text-blue-800 text-sm">
              📍 Interactive map integration coming soon. For now, use the "Get Directions" button to open Google Maps.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
