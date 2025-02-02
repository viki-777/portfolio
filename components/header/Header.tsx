import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu ,Home} from "lucide-react"; // Import menu icon
import Icon from "./icon";

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
  const [activeTab, setActiveTab] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = [
    
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 w-full bg-transparent backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="#hero">
          <div className="flex cursor-pointer">
            <h1 className="text-2xl md:text-4xl text-emerald-500 font-bold font-mono">Viki</h1>
            <h1 className="text-2xl md:text-4xl text-white font-bold font-mono">.</h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center border-white/35 bg-white/20 backdrop-blur-xl py-2 px-4 rounded-full space-x-4 shadow-lg">
        <Link href={"#hero"}>
          <Home size={28} color="white" />
        </Link>
          {tabs.map((tab) => (
            <Link href={tab.href} key={tab.name}>
              <div
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                  activeTab === tab.name ? "bg-black text-white" : "text-white hover:text-gray-300"
                }`}
                onClick={() => setActiveTab(tab.name)}
              >
                {tab.name}
              </div>
            </Link>
          ))}
        </div>

        {/* Social Icons - Desktop Only */}
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 1.5 }}
          className="hidden md:flex items-center space-x-4 text-gray-400 cursor-pointer"
        >
          <SocialIcon
            url={props.data.github}
            fgColor="currentColor"
            bgColor="transparent"
            className="hover:scale-110 text-gray hover:text-emerald-500 transition"
            target="_blank"
            rel="noreferrer"
          />
          <SocialIcon
            url={props.data.linkedin}
            fgColor="currentColor"
            bgColor="transparent"
            className="hover:scale-110 text-gray hover:text-emerald-500 transition"
            target="_blank"
            rel="noreferrer"
          />
          <SocialIcon
            url={props.data.twitter}
            fgColor="currentColor"
            bgColor="transparent"
            className="hover:scale-110 text-gray hover:text-emerald-500 transition"
            target="_blank"
            rel="noreferrer"
          />
          
          <a href={props.data.resume} target="_blank" rel="noreferrer">
          <div className="w-[1.68rem] fill-[#808080] scale-75 hover:scale-[85%] hover:fill-[#10b981]/70 transition ease-in-out duration-200">
          <Icon type="resume" />
          </div>
          </a>




        </motion.div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white focus:outline-none">
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md text-white p-6 rounded-b-lg">
          <nav className="flex flex-col space-y-4 text-center">
            
            {tabs.map((tab) => (
              <Link href={tab.href} key={tab.name}>
                <span className="text-lg font-semibold hover:text-emerald-500" onClick={() => setMenuOpen(false)}>
                  {tab.name}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
