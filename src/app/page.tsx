import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import SelectedWork from "@/components/SelectedWork";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <SelectedWork />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
