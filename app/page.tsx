import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Tour from "@/components/sections/Tour";
import PhotoBanner from "@/components/sections/PhotoBanner";
import Video from "@/components/sections/Video";
import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Tour />
        <PhotoBanner />
        <Video />
        <About />
        <Footer />
      </main>
    </>
  );
}
