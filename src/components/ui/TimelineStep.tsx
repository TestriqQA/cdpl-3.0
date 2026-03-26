// components/ui/TimelineStep.tsx
import { ReactNode } from "react";

interface TimelineStepProps {
  number: string;
  title: string;
  icon: ReactNode;
  color: string;
}

export default function TimelineStep({ number, title, icon, color }: TimelineStepProps) {
  return (
    <div className="flex items-center">
      <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center text-white font-bold text-lg`}>
        {number}
      </div>
      <div className="ml-4 bg-white p-3 rounded-xl shadow-md flex-1 flex items-center">
        <div className="mr-3 text-orange-500">{icon}</div>
        <span className="font-semibold text-gray-800">{title}</span>
      </div>
    </div>
  );
}
