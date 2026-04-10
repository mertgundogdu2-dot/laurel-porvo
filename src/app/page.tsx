import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import MenuSection from "@/components/MenuSection";
import Reservation from "@/components/Reservation";
import Contact from "@/components/Contact";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Gallery />
        <MenuSection />
        <Reservation />
        <Contact />
      </main>
      <Chatbot />
    </>
  );
}
