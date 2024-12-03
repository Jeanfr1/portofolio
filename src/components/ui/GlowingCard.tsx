import React from 'react';

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlowingCard({ children, className = '' }: GlowingCardProps) {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10" />
      <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-colors duration-300">
        {children}
      </div>
    </div>
  );
}