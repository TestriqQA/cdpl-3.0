"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  defaultOpen?: boolean;
}

export default function CollapsibleSection({ 
  title, 
  children, 
  icon,
  defaultOpen = false 
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden">
      <button 
        className="w-full bg-gradient-to-r from-slate-50 to-white p-5 cursor-pointer hover:from-slate-100 hover:to-slate-50 transition-all text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {icon && (
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                {icon}
              </div>
            )}
            <h3 className="text-lg md:text-xl font-bold text-slate-900">{title}</h3>
          </div>
          <ChevronDown 
            className={`w-5 h-5 text-slate-600 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
      </button>
      
      <div 
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="p-5 bg-white border-t border-slate-100">
          {children}
        </div>
      </div>
    </div>
  );
}
