import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircle";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeroData } from "@/public/types";



type Props = {
  data: HeroData;
};

const Hero = (props: Props) => {
  const [text] = useTypewriter({
    words: props.data.typewriter,
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 100,
  });

  return (
    
    <div className="h-screen relative">

   
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
          {/*animated background circles*/}
          <BackgroundCircles />

          <motion.div
            initial={{
              scale: 0,
            }}
            whileInView={{
              scale: [0, 1.2, 1],
            }}
            transition={{
              type: "spring",
              duration: 2,
              delay: 2,
            }}
            viewport={{ once: true }}
            className="z-20 flex flex-col space-y-4"
          >
            <Image
              src={props.data.heroImage}
              width={400}
              height={400}
              priority={true}
              alt="vikas"
              className={`relative rounded-full h-60 w-60 mx-auto object-cover z-20 ring-4 ring-emerald-400/30 ring-offset-4 ring-offset-transparent`}
            />
            <h2 className="text-sm uppercase text-gray-300 pb-2 tracking-[15px] z-20 cursor-default">
              {props.data.title}
            </h2>
            <div className="z-20">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold px-10 h-20 text-white">
                <span className="hover:text-emerald-400 transition ease-out duration-200 cursor-default">
                  {text}
                  <Cursor cursorColor="#50C878" cursorStyle="|" />
                </span>
              </h1>
              <div className="pt-5 font-semibold">
                <Link href="#about">
                  <button className="heroButton">About</button>
                </Link>
               
                <Link href="#skills">
                  <button className="heroButton">Skills</button>
                </Link>
                <Link href="#projects">
                  <button className="heroButton">Projects</button>
                </Link>
                <Link href="https://drive.google.com/file/d/17dSyCEMilpwLPQVHkhGGZ0Yo5wtVEib1/view" target="_blank">
                  <button className="heroButton">Resume</button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
     
    </div>
  
  );
};

export default Hero;