export default function TipsPanel() {
  const tips = [
    'Keep the current week face-up and tear off pods at dose time for easy access.',
    'If you miss a dose, do not double up. Call us for guidance on the best course of action.',
    'Bring a Dispill card to medical appointments so providers can see your regimen at a glance.',
    'Store in a dry, room temperature place away from direct sunlight, children, and pets.',
    'Contact us immediately if you have questions about any medication or experience side effects.'
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-brand-navy mt-10 mb-6">
        Living with Dispill - Daily Use Tips
      </h2>
      
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-6">
        <ul className="space-y-4">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-[#10254D] text-white rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                {index + 1}
              </div>
              <p className="text-slate-600 leading-relaxed">
                {tip}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}









