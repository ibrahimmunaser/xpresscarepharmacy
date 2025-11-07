type Props = {
  title: string;
  subtitle: string;
};

export default function TransferCompact({ title, subtitle }: Props) {
  return (
    <div className="rounded-lg border border-white/20 bg-white/10 p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-white/90">{subtitle}</p>
      
      <div className="mt-4 rounded-lg bg-white/20 p-4">
        <h4 className="font-medium text-white">Transfer To:</h4>
        <div className="mt-2 text-sm text-white/90">
          <p className="font-medium">Xpress Care Pharmacy</p>
          <p>3040 E 7 Mile</p>
          <p>Detroit, MI 48234</p>
          <p>Phone: (313) 914-3736</p>
          <p>Fax: (313) 914-5105</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href="/prescription-transfer"
          className="rounded-md bg-white text-brand-navy px-4 py-2 shadow hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Start Transfer
        </a>
        <a
          href="#fax-info"
          className="rounded-md border border-white/30 bg-transparent px-4 py-2 text-white shadow-sm hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
        >
          Fax Instructions
        </a>
      </div>
    </div>
  );
}
