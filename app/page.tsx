import { HeroOdyssey } from '../components/ui/hero-odyssey';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroOdyssey 
        title="Your Name"
        subtitle="Full Stack Developer"
        description="Passionate about creating beautiful, functional web applications that solve real problems. I specialize in React, Next.js, and modern web technologies."
        primaryButtonText="View My Work"
        secondaryButtonText="Get In Touch"
      />
    </main>
  );
}
