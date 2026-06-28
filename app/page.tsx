import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const About = dynamic(() => import("@/components/About").then((mod) => mod.About));
const Skills = dynamic(() => import("@/components/Skills").then((mod) => mod.Skills));
const Projects = dynamic(() => import("@/components/Projects").then((mod) => mod.Projects));
const Experience = dynamic(() => import("@/components/Experience").then((mod) => mod.Experience));
const Contact = dynamic(() => import("@/components/Contact").then((mod) => mod.Contact));

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}