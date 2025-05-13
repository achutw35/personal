import { MainNav } from '@/components/main-nav';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { ResumeSection } from '@/components/sections/resume-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ContactSection } from '@/components/sections/contact-section';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <main>
      <MainNav />
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}