import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VideoAccordion from "@/components/VideoAccordion";
import Gallery from "@/components/Gallery";
import MenuSection from "@/components/MenuSection";
import ImageCarousel from "@/components/ImageCarousel";
import Contact from "@/components/Contact";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ImageCarousel />
        <About />
        <VideoAccordion />
        <Gallery />
        <MenuSection />
        <Contact />
      </main>
      <Chatbot />
    </>
  );
}
