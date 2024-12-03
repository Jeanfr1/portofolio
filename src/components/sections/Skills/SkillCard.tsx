import React from 'react';
import { GlowingCard } from '../../ui/GlowingCard';

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  level: number;
  color: string;
}

export function SkillCard({ icon, name, level, color }: SkillCardProps) {
  return (
    <GlowingCard className="group hover:scale-105 transition-transform duration-300">
      <div className="flex items-center gap-4">
        <div className={`p-2 rounded-lg ${color}`}>
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-white">{name}</span>
            <span className="text-sm text-gray-400">{level}%</span>
          </div>
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className={`h-full ${color} transition-all duration-500 ease-out group-hover:opacity-100 opacity-80`}
              style={{ width: `${level}%` }}
            />
          </div>
        </div>
      </div>
    </GlowingCard>
  );
}