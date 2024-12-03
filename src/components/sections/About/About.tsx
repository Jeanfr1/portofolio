import React from 'react';
import profileImage from '../../../assets/images/Josean.png';
import { AboutImage } from './AboutImage';
import { AboutContent } from './AboutContent';
import { Skills } from './Skills';

export function About() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <AboutImage src={profileImage} alt="Josean Araujo" />
            <AboutContent />
          </div>

          <Skills />
        </div>
      </div>
    </section>
  );
}