import React from 'react';
import { Brain, Code2, Palette, Rocket } from 'lucide-react';
import { SkillCard } from './SkillCard';

const skills = [
  {
    icon: <Code2 className="w-6 h-6 text-blue-400" />,
    title: "Frontend Development",
    description: "Expert in React, JavaScript, and modern web technologies"
  },
  {
    icon: <Palette className="w-6 h-6 text-purple-400" />,
    title: "UI/UX Design",
    description: "Creating beautiful and intuitive user interfaces"
  },
  {
    icon: <Brain className="w-6 h-6 text-cyan-400" />,
    title: "Problem Solving",
    description: "Analytical approach to complex technical challenges"
  },
  {
    icon: <Rocket className="w-6 h-6 text-pink-400" />,
    title: "Performance",
    description: "Optimization for lightning-fast web applications"
  }
];

export function Skills() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <SkillCard key={index} {...skill} />
      ))}
    </div>
  );
}