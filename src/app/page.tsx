import AboutMeSection from "@/components/AboutMeSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-10 flex flex-col gap-10">
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
