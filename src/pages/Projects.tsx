
import { GlowingCard } from '../components/ui/GlowingCard';
import { ArrowLeft, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/sections/Footer/Footer';

const projects = [
  {
    title: "New Explorer Frontend",
    description: "A sophisticated frontend project built with React, showcasing modern web development practices and responsive design principles. Features a clean, intuitive user interface with seamless navigation and interactive components, demonstrating expertise in frontend architecture and state management.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
    github: "https://github.com/Jeanfr1/new-explorer-front"
  },
  {
    title: "Aj CRM",
    description: "Aj CRM is a modern and intuitive customer relationship management system built with React and Vite. This project features an interactive dashboard with real-time analytics, detailed customer profiles, and advanced marketing campaign tools. With a responsive interface and a focus on user experience, Aj CRM is ideal for businesses aiming to optimize customer relationship processes.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000",
    github: "https://ajcrm.netlify.app/"
  },
  {
    title: "Around Auth",
    description: "A specialized frontend implementation for user authentication and authorization. This project showcases secure user data handling, form validation, and seamless integration with backend services, built using React and modern web security practices.",
    image: "https://images.unsplash.com/photo-1552308995-2baac1ad5490?auto=format&fit=crop&q=80&w=1000",
    github: "https://github.com/Jeanfr1/web_project_around_auth"
  },
  {
    title: "Creative Agency",
    description: "Creative Agency is a modern, responsive website showcasing the services and portfolio of our digital agency. Built with React, TypeScript, and Tailwind CSS, the project features smooth animations, interactive elements, and a sleek design that reflects our creative capabilities. Emphasizing performance optimization and user experience, this project is a prime example of modern UI/UX for digital agencies.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000",
    github: "https://agencejaraujo.netlify.app/"
  }
];

function Projects() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
            <h1 className="text-4xl font-bold mt-6 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              My Projects
            </h1>
            <p className="text-gray-400">
              A showcase of my development journey, featuring projects that demonstrate my skills in frontend development, 
              user authentication, and full-stack applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <GlowingCard key={index} className="group">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden rounded-lg mb-4 group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Github className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300" />
                  </div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400">{project.description}</p>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800/80 rounded-full hover:bg-gray-700/80 transition-colors flex-shrink-0 mt-1"
                    title="View on GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </GlowingCard>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;