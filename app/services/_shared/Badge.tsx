export function Badge({ 
  children, 
  intent = "default" 
}: { 
  children: React.ReactNode; 
  intent?: "default" | "success" | "info" 
}) {
  const map = {
    default: "bg-slate-100 text-slate-700 ring-slate-200",
    success: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    info: "bg-sky-50 text-sky-700 ring-sky-200",
  } as const;
  
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ring-1 ${map[intent]}`}>
      {children}
    </span>
  );
}














