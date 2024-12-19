"use client";

import Image from "next/image";
import Header from "@/app/components/header/Header";
import Hero from "@/app/components/hero/Hero"
import { data } from "@/public/assets/data";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

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
      <Header data={data[5]} />
      <section id="hero" className="snap-start">
        <Hero data={data[1]} />
      </section>
    </div>
  );
}
