
import { Terminal } from 'lucide-react';
import { TechIcons } from '../../../icons/TechIcons';

const skills = [
  { icon: <TechIcons.React />, name: 'React', color: 'from-[#61DAFB]/20 to-[#61DAFB]/30' },
  { icon: <TechIcons.JavaScript />, name: 'JavaScript', color: 'from-[#F7DF1E]/20 to-[#F7DF1E]/30' },
  { icon: <TechIcons.TypeScript />, name: 'TypeScript', color: 'from-[#3178C6]/20 to-[#3178C6]/30' },
  { icon: <TechIcons.Node />, name: 'Node.js', color: 'from-[#339933]/20 to-[#339933]/30' },
  { icon: <TechIcons.Express />, name: 'Express', color: 'from-gray-600/20 to-gray-600/30' },
  { icon: <TechIcons.MongoDB />, name: 'MongoDB', color: 'from-[#47A248]/20 to-[#47A248]/30' },
  { icon: <TechIcons.MySQL />, name: 'MySQL', color: 'from-[#4479A1]/20 to-[#4479A1]/30' },
  { icon: <TechIcons.Tailwind />, name: 'Tailwind CSS', color: 'from-[#38B2AC]/20 to-[#38B2AC]/30' },
  { icon: <TechIcons.Sass />, name: 'Sass', color: 'from-[#CC6699]/20 to-[#CC6699]/30' },
  { icon: <TechIcons.Figma />, name: 'Figma', color: 'from-[#F24E1E]/20 to-[#F24E1E]/30' },
  { icon: <TechIcons.Git />, name: 'Git', color: 'from-[#F05032]/20 to-[#F05032]/30' },
  { icon: <Terminal className="w-5 h-5" />, name: 'CLI', color: 'from-purple-500/20 to-purple-500/30' }
];

export function Skills() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Technical Skills
          </h2>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center justify-center p-4 rounded-xl transition-transform duration-300 hover:scale-110"
              >
                {/* Gradient background */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm`}
                />
                
                {/* Icon container */}
                <div className="relative z-10 bg-gray-900/50 p-4 rounded-lg backdrop-blur-sm border border-gray-800 group-hover:border-gray-700 transition-colors duration-300">
                  {skill.icon}
                </div>
                
                {/* Skill name tooltip */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-gray-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                    {skill.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}