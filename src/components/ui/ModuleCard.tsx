// components/ui/ModuleCard.tsx
interface ModuleCardProps {
  number: string;
  title: string;
  outcome: string;
}

export default function ModuleCard({ number, title, outcome }: ModuleCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-xl transition">
      <div className="flex items-center mb-3">
        <span className="text-2xl font-bold text-teal-600 mr-3">{number}</span>
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-sm italic text-gray-600">Outcome: {outcome}</p>
    </div>
  );
}
