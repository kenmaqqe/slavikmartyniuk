import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Tour from "@/components/sections/Tour";
import PhotoSection from "@/components/sections/PhotoSection";
import Video from "@/components/sections/Video";
import Bio from "@/components/sections/Bio";
import Stats from "@/components/sections/Stats";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Tour />
        <PhotoSection />
        <Video />
        <Bio />
        <Stats />
        <Footer />
      </main>
    </>
  );
}
