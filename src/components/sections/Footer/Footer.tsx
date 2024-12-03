import React from 'react';
import { Code2, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-950/20" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="border-t border-gray-800 pt-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-gray-400">
                  © {currentYear} Josean Araujo
                  <br />
                  <span className="text-sm">All rights reserved</span>
                </p>
              </div>

              {/* Made with */}
              <div className="text-center flex items-center justify-center gap-2">
                <span className="text-gray-400">Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span className="text-gray-400">and</span>
                <Code2 className="w-4 h-4 text-blue-400" />
              </div>

              {/* Tech Stack */}
              <div className="text-center md:text-right">
                <p className="text-sm text-gray-400">
                  Built with React + TypeScript
                  <br />
                  Powered by Modern Web Technologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}