import React from 'react';
import { GlowingButton } from './ui/GlowingButton';
import { Code, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('get-in-touch');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(88,80,236,0.15),rgba(0,0,0,0))]" />
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 mb-8">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-gray-300">Frontend Developer & UI Designer</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient">
            Crafting Digital Experiences
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Transforming ideas into elegant, responsive, and user-friendly web applications
            with modern technologies and cutting-edge design principles.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/projects">
              <GlowingButton>
                <span className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  View My Work
                </span>
              </GlowingButton>
            </Link>
            <a href="#get-in-touch" onClick={scrollToContact}>
              <GlowingButton variant="secondary">Contact Me</GlowingButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}