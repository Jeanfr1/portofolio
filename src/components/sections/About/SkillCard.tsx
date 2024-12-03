import React from 'react';
import { GlowingCard } from '../../ui/GlowingCard';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function SkillCard({ icon, title, description }: SkillCardProps) {
  return (
    <GlowingCard className="h-full">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">
          {title}
        </h3>
        <p className="text-gray-400">
          {description}
        </p>
      </div>
    </GlowingCard>
  );
}