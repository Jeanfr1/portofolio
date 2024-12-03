import React from 'react';

interface GlowingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export function GlowingButton({ children, variant = 'primary', ...props }: GlowingButtonProps) {
  const baseStyles = "relative px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg";
  const variants = {
    primary: "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-[0_0_15px_rgba(88,80,236,0.5)] hover:shadow-[0_0_25px_rgba(88,80,236,0.7)]",
    secondary: "bg-gradient-to-r from-gray-900 to-gray-800 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]}`}
      {...props}
    >
      {children}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-600/20 blur-xl -z-10" />
    </button>
  );
}