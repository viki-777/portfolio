"use client";


import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero"

import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/footer";
import { data } from "@/public/assets/data";

import { useState, useEffect } from "react";
import Projects from "../components/projects/Projects"
import { AboutData, HeroData, HeaderData, SkillsData, ProjectsData } from '@/public/types';



export default function Home() {
  const [width, setWidth] = useState(0);

  // Update the width on component mount
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="
    bg-black
    
    text-white h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll z-0 sm:scrollbar-thin sm:scrollbar-thumb-[#F7AB0A]/80 sm:scrollbar-transparent sm:scrollbar-thumb-rounded-full sm:scrollbar-track-rounded-full">
      {/* Passing specific data to the Header component */}
      <Header data={data[5] as HeaderData} />
      
      <section id="hero" className="snap-start">

        <Hero data={data[1] as HeroData} />
      </section>
      <section id="about" className="snap-center snap-mandatory  snap-always">
        <About data={data[0] as AboutData} />
      </section>
      <section id="skills" className="snap-start snap-mandatory  snap-always">
        <Skills data={data[3] as SkillsData} />
      </section>
      <section id="projects" className="snap-start snap-mandatory  snap-always max-h-screen overflow-clip">
        {width > 768 ? (
          <Projects data={data[4] as ProjectsData} />
        ) : (
          <Projects data={data[4] as ProjectsData} />
        )}
        
      </section>
      <section id="contact" className="snap-start snap-mandatory  snap-always">
        <Contact />
        <Footer />
      </section>

    </div>
  );
}
