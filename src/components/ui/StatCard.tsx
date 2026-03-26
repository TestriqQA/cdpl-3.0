// components/ui/StatCard.tsx
interface StatCardProps {
  value: string;
  label: string;
  bgColor: string;
  textColor: string;
}

export default function StatCard({ value, label, bgColor, textColor }: StatCardProps) {
  return (
    <div className={`p-6 rounded-2xl ${bgColor} text-${textColor} shadow-md`}>
      <h3 className="text-2xl md:text-3xl font-bold">{value}</h3>
      <p className="text-sm md:text-base mt-1 opacity-90">{label}</p>
    </div>
  );
}
