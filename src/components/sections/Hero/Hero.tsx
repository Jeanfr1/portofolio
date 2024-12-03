import React from 'react';
import { HeroTitle } from './HeroTitle';
import { HeroActions } from './HeroActions';

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
          <HeroTitle />
          <HeroActions onContactClick={scrollToContact} />
        </div>
      </div>
    </section>
  );
}