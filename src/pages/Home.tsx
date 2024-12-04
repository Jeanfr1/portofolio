
import { Hero, About, Skills, Contact, Footer } from '../components/sections';

function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;