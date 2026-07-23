import Hero from "@/components/sections/Hero";
import ShowsList from "@/components/sections/ShowsList";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import CharitySection from "@/components/sections/CharitySection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <ShowsList />
      <ProjectsGrid />
      <CharitySection />
      <Footer />
    </main>
  );
}
