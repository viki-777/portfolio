import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Icon from "./icon";
import Link from "next/link";
interface HeaderData {
  _id: string;
  section: string;
  linkedin: string;
  twitter: string;
  github: string;
  instagram: string;
  resume: string;
  whatsapp: string;
}
type Props = {
  data: HeaderData;
};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-40 xl:items-center p-5  ">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          type: "spring",
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* logo icons */}
        <Link href="#hero">
        <div className="flex">
          <h1 className='text-4xl text-emerald-500 font-bold font-mono mt-4'>Viki</h1>
          <h1 className='text-4xl text-white font-bold font-mono mt-4'>.</h1>
        </div>
        </Link>
      
      </motion.div>

      <motion.div
        initial={{
          x: +500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          type: "spring",
          duration: 2,
        }}
        className="flex flex-row items-center space-x-5 text-gray-400 cursor-pointer self-center px-4"
      >
        <SocialIcon
          url={props.data.github}
          fgColor="currentColor"
          bgColor="transparent"
          className=" hover:scale-110 text-[gray] hover:text-[#10b981]/70 transition ease-in-out duration-100"
          target="_blank"
          rel="noreferrer"
        />
        <SocialIcon
          url={props.data.linkedin}
          fgColor="currentColor"
          bgColor="transparent"
          className=" hover:scale-110 text-[gray] hover:text-[#10b981]/70 transition ease-in-out duration-100"
          target="_blank"
          rel="noreferrer"
        />
        <SocialIcon
          url={props.data.twitter}
          network="whatsapp"
          fgColor="currentColor"
          bgColor="transparent"
          className=" hover:scale-110 text-[gray] hover:text-[#10b981]/70 transition ease-in-out duration-100"
          target="_blank"
          rel="noreferrer"
        />

        {/* Contact me*/}
        <a href="#contact">
          <div className="w-[1.68rem] fill-[#808080] hover:scale-110 hover:fill-[#10b981]/70 transition ease-in-out duration-200">
          <Icon type="mail" />
          </div>
        </a>
        <a href={props.data.resume} target="_blank" rel="noreferrer">
          <div className="w-[1.68rem] fill-[#808080] scale-75 hover:scale-[85%] hover:fill-[#10b981]/70 transition ease-in-out duration-200">
          <Icon type="resume" />
          </div>
        </a>
      </motion.div>
    </header>
  );
};

export default Header;
