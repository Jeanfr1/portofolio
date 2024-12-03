import React from 'react';
import { Link } from 'react-router-dom';
import { Code } from 'lucide-react';
import { GlowingButton } from '../../ui/GlowingButton';

interface HeroActionsProps {
  onContactClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function HeroActions({ onContactClick }: HeroActionsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Link to="/projects">
        <GlowingButton>
          <span className="flex items-center gap-2">
            <Code className="w-5 h-5" />
            View My Work
          </span>
        </GlowingButton>
      </Link>
      <a href="#get-in-touch" onClick={onContactClick}>
        <GlowingButton variant="secondary">Contact Me</GlowingButton>
      </a>
    </div>
  );
}