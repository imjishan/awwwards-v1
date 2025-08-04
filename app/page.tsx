import { HeroOdyssey } from '../components/ui/hero-odyssey';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="home">
        <HeroOdyssey 
          title="Your Name"
          subtitle="Full Stack Developer"
          description="Passionate about creating beautiful, functional web applications that solve real problems. I specialize in React, Next.js, and modern web technologies."
          primaryButtonText="View My Work"
          secondaryButtonText="Get In Touch"
        />
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
        <div className="container mx-auto px-8 text-center text-white">
          <h2 className="text-5xl font-bold mb-8">About</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with expertise in modern web technologies. 
            I love creating beautiful, functional applications that solve real-world problems 
            and provide exceptional user experiences.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center">
        <div className="container mx-auto px-8 text-center text-white">
          <h2 className="text-5xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-2">Project {i}</h3>
                <p className="text-gray-300">
                  A beautiful and functional web application built with modern technologies.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen bg-gradient-to-br from-green-900 to-teal-900 flex items-center justify-center">
        <div className="container mx-auto px-8 text-center text-white">
          <h2 className="text-5xl font-bold mb-8">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Web Development", desc: "Full-stack web applications with modern frameworks" },
              { title: "UI/UX Design", desc: "Beautiful and intuitive user interfaces" },
              { title: "Consulting", desc: "Technical guidance and architecture planning" }
            ].map((service, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-gradient-to-br from-red-900 to-pink-900 flex items-center justify-center">
        <div className="container mx-auto px-8 text-center text-white">
          <h2 className="text-5xl font-bold mb-8">Contact</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Ready to start your next project? Let's work together to bring your ideas to life.
          </p>
          <div className="space-y-4">
            <p className="text-lg">📧 hello@example.com</p>
            <p className="text-lg">📱 +1 (555) 123-4567</p>
            <p className="text-lg">📍 San Francisco, CA</p>
          </div>
        </div>
      </section>
    </main>
  );
}
