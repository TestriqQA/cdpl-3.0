import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface IconCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  bgColor?: string;
  iconColor?: string;
  borderColor?: string;
  className?: string;
}

export default function IconCard({
  icon,
  title,
  description,
  bgColor = 'bg-blue-50',
  iconColor = 'text-blue-600',
  borderColor = 'border-orange-200',
  className
}: IconCardProps) {
  return (
    <div className={twMerge(
      "group p-6 bg-white rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
      borderColor,
      className
    )}>
      <div className={`${bgColor} ${iconColor} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
