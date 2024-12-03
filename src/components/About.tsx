import React from 'react';
import { GlowingCard } from '../ui/GlowingCard';
import { Brain, Code2, Palette, Rocket } from 'lucide-react';
import profileImage from '../../assets/images/Josean.png';

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

export function About() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="flex items-center justify-center">
              <GlowingCard className="w-full">
                <div className="flex items-center justify-center w-full h-64">
                  <img 
                    src={profileImage}
                    alt="Josean Araujo"
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>
              </GlowingCard>
            </div>
            
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Hi, I'm Josean
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                I'm a Fullstack Web Developer with a strong focus on UI/UX design, creating visually stunning and user-centric web applications. With expertise in JavaScript, React, Node.js, and Tailwind CSS, I bring creative designs to life while optimizing performance and accessibility. 
              </p>
              <p className="text-gray-400 leading-relaxed">
                My journey in tech is enriched by experiences at Microsoft and HP, where I honed my skills in problem-solving and aligning technology with business goals. Fluent in English, French, and Portuguese, I thrive in collaborative, multicultural environments. I'm passionate about delivering impactful solutions that elevate user experiences and drive innovation.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <GlowingCard key={index} className="h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {skill.title}
                  </h3>
                  <p className="text-gray-400">
                    {skill.description}
                  </p>
                </div>
              </GlowingCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}