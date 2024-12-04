
import { GlowingCard } from './ui/GlowingCard';
import { GlowingButton } from './ui/GlowingButton';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: <Linkedin className="w-6 h-6" />,
    href: 'https://www.linkedin.com/in/josean-araujo-3ba63b17b/',
    color: 'bg-[#0A66C2]/20 hover:bg-[#0A66C2]/30',
  },
  {
    name: 'GitHub',
    icon: <Github className="w-6 h-6" />,
    href: 'https://github.com/Jeanfr1',
    color: 'bg-gray-700/20 hover:bg-gray-700/30',
  },
  {
    name: 'Email',
    icon: <Mail className="w-6 h-6" />,
    href: 'mailto:contactjoseanaraujo@gmail.com',
    color: 'bg-red-500/20 hover:bg-red-500/30',
  },
];

export function Contact() {
  return (
    <section id="get-in-touch" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Get in Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <GlowingCard>
                <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
                <p className="text-gray-400 mb-6">
                  I'm always open to new opportunities, collaborations, and interesting projects. 
                  Feel free to reach out through any of these platforms:
                </p>
                <div className="space-y-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 rounded-lg transition-colors duration-300 ${link.color}`}
                    >
                      {link.icon}
                      <span className="font-medium">{link.name}</span>
                    </a>
                  ))}
                </div>
              </GlowingCard>
            </div>

            <div>
              <GlowingCard>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    ></textarea>
                  </div>
                  <GlowingButton type="submit" className="w-full">
                    Send Message
                  </GlowingButton>
                </form>
              </GlowingCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}