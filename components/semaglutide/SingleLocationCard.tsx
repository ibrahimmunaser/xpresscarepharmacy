import Link from 'next/link';

type SingleLocationCardProps = {
  name: string;
  address: string;
  phone: string;
  hours: string;
};

export default function SingleLocationCard({
  name,
  address,
  phone,
  hours
}: SingleLocationCardProps) {
  // Format address for Google Maps URL
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-4xl px-4">
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <h2 className="text-2xl font-semibold text-brand-navy mb-6">
            Visit Our Pharmacy
          </h2>
          
          <div className="space-y-4 mb-8">
            <div>
              <h3 className="font-medium text-brand-navy text-lg">
                {name}
              </h3>
              <p className="text-slate-600 mt-1">
                {address}
              </p>
            </div>
            
            <div>
              <p className="text-slate-600">
                <span className="font-medium text-brand-navy">Phone:</span> {phone}
              </p>
            </div>
            
            <div>
              <p className="text-slate-600">
                <span className="font-medium text-brand-navy">Hours:</span> {hours}
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Get Directions
            </Link>
            <Link
              href={`tel:${phone.replace(/\D/g, '')}`}
              className="btn btn-primary"
            >
              Call {phone}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}









