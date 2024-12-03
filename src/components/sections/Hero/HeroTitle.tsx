import React from 'react';
import { Sparkles } from 'lucide-react';

export function HeroTitle() {
  return (
    <>
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 mb-8">
        <Sparkles className="w-4 h-4 text-blue-400" />
        <span className="text-gray-300">Fullstack Developer & UI Designer</span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient">
        Welcome to my Portfolio
      </h1>
      
      <p className="text-xl text-gray-400 mb-8 leading-relaxed">
        Transforming ideas into elegant, responsive, and user-friendly web applications
        with modern technologies and cutting-edge design principles.
      </p>
    </>
  );
}