
import { GlowingCard } from '../../ui/GlowingCard';
import { Code, Database, Globe, Layout } from 'lucide-react';

interface AboutImageProps {
  src: string;
  alt: string;
}

export function AboutImage({ src, alt }: AboutImageProps) {
  return (
    <div className="flex items-center justify-center relative">
      {/* Animated tech background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-full h-full animate-spin-slow opacity-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 flex items-center justify-center"
              style={{
                transform: `rotate(${i * 45}deg)`,
              }}
            >
              <div className="w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
            </div>
          ))}
        </div>
        
        {/* Tech icons background */}
        <div className="absolute inset-0">
          <Code className="absolute top-[15%] left-[10%] w-6 h-6 text-blue-500/20 animate-pulse" />
          <Database className="absolute top-[25%] right-[15%] w-6 h-6 text-purple-500/20 animate-pulse delay-75" />
          <Globe className="absolute bottom-[20%] left-[15%] w-6 h-6 text-cyan-500/20 animate-pulse delay-150" />
          <Layout className="absolute bottom-[25%] right-[10%] w-6 h-6 text-pink-500/20 animate-pulse delay-200" />
        </div>
      </div>

      {/* Profile image card */}
      <GlowingCard className="w-full max-w-md relative z-10">
        <div className="w-full aspect-square overflow-hidden rounded-lg">
          <img 
            src={src}
            alt={alt}
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </GlowingCard>
    </div>
  );
}