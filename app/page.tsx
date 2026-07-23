import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Tour from "@/components/sections/Tour";
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
        <Video />
        <About />
        <Footer />
      </main>
    </>
  );
}
