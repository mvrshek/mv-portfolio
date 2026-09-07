import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Involvement from "@/components/Involvement";
import PhotoSection from "@/components/PhotoSection";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <About />
      <Involvement />

      <PhotoSection />

      <Contact />
    </main>
  );
}