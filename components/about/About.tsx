import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
// Import icons from lucide-react instead of react-icons
import { Github, Atom, Code2, Paintbrush, Server ,Calendar, ChevronRight, } from "lucide-react";

// Define the data structure for the About section
const icon = [
  <Atom key="atom" size={24} />,
  <Code2 key="code" size={24} />,
  <Paintbrush key="paint" size={24} />,
  <Server key="server" size={24} />,
];

type Skill = {
  title: string;
  //icon: React.ReactNode;
  description: string;
};

type AboutData = {
  name: string;
  mainImage: string;
  avatarImage: string;
  githubUrl:string;
  skills: Skill[];
};

// Mock data based on the provided image.
// The icons are now from lucide-react.
const aboutData: AboutData = {
  name: "Vikash Kumar", 
  mainImage: "https://res.cloudinary.com/viki07/image/upload/service-images/portfolio/d7gcz5s8tg5ijrnoht0w.png", // Cropped image of the shark plushie
  avatarImage: "https://res.cloudinary.com/viki07/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1750111387/service-images/portfolio/d7gcz5s8tg5ijrnoht0w.png", 
  githubUrl: "https://github.com/viki-777",
  skills: [
    {
      title: "Web Developer",
      //icon: <Atom size={24} />,
      description: "Ship Modern Website on demand",
    },
  
    {
      title: "UI Designer",
      //icon: <Paintbrush size={24} />,
      description: "Crafting clean, modern interfaces with pixel-perfect precision",
    },
    {
      title: "Backend Engineer",
      //icon: <Server size={24} />,
      description: "Powering products with scalable APIs and robust databases – both SQL & NoSQL.",
    },
  ],
};

// --- DATA MODEL ---
// This data structure is modeled after the new "Selene Yu" design.
type Education = {
  University: string;
  Degree: string;
  period: string;
  courses: string;
};

type PortfolioData = {
  name: string;
  title: string;
  introduction: string;
  scheduleCallUrl: string;
  contact: {
    github: string;
  
  };
  Education: Education[];
};

// Mock data based on the provided image.
const portfolioData: PortfolioData = {
  name: "Vikash Kumar",
  title: "Full Stack Developer",
  
  scheduleCallUrl: "https://cal.com/vikash-kumar-pqxlbw/1-hr", // Replace with your Calendly or scheduling link
  contact: {
    github: "https://github.com/viki-777",

  },
  introduction:
    "I am Vikash. Passionate and driven college student currently pursuing a B.Tech+M.Tech in Information Technology at iiit Gwalior . Currently in my 3rd year, I am enthusiastic about exploring the dynamic world of technology and honing my skills in Full Stack Development and Problem Solving.",
  Education: [
    {
      University: 'Atal Bihari Vajpayee Indian Institute of Information Technology and Management, Gwalior',
      Degree: 'Bachelor of Technology in Computer Science and Engineering',
      
      period: '2022 - Present',
      
        
        courses:'Relevant Coursework: Data Structures, Algorithms, Database Management Systems, Web Development, Operating Systems, Computer Networks',
      
    },
    // You can add more job experiences here
  ],
};


const About = () => {
  return (

    <div className="relative w-full min-h-screen text-white flex flex-col items-center p-4 md:p-8 overflow-hidden ">
      {/* Background decorative elements. An SVG would be ideal for precise curves. */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[20%] left-[20%] w-[40rem] h-[40rem] bg-purple-900/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[20%] right-[20%] w-[30rem] h-[30rem] bg-cyan-800/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* UPDATED: Added vertical padding `py-24 sm:py-32` to create space for the header and a footer */}
      <main className="w-full max-w-7xl mx-auto z-10 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-20 lg:mb-24">
          {/* Left Side: Text Content */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* --- Header Section --- */}
          <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
            {portfolioData.name}
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-300 sm:text-xl">
            {portfolioData.title}
          </h2>

          <div className="mt-6 flex items-center gap-x-3">
            <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1 text-xs font-medium text-slate-300 hover:bg-slate-800 transition-colors">
              <Github size={14} /> GitHub
            </a>
          </div>

          <p className="mt-6 max-w-xl leading-normal text-slate-400">
            {portfolioData.introduction}
          </p>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-100 mb-8">Education</h2>
            
            {portfolioData.Education.map((edu, index) => (
              <div key={index} className="mb-12">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <div>
                    <h3 className="font-bold text-slate-100">{}</h3>
                    <p className="text-teal-300 text-sm">{edu.University}</p>
                  </div>
                  <p className="text-sm text-slate-500 whitespace-nowrap">{edu.period}</p>
                </div>
                <p className="text-slate-300 mb-2">{edu.Degree}</p>
                <p className="text-sm text-slate-500 whitespace-nowrap">CGPA:8/10</p>
                
                <h3 className="text-slate-400 text-sm mt-2"><span className="text-emerald-400">*</span> {edu.courses}</h3>
              </div>
            ))}
          </div>
        </motion.section>

          {/* Right Side: Image and Interactive Elements */}
          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
             className="relative justify-center items-center hidden lg:flex"
          >
            <div className="relative w-full max-w-sm lg:max-w-md">
                <div className="w-64 h-84 rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/10">
                <Image
                  src={aboutData.mainImage}
                  width={256}
                  height={256}
                  alt="A plush shark with a note saying 'Yeah'"
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              <div className="p-6">
                <a
                  href={portfolioData.scheduleCallUrl}
                  className="inline-flex items-center gap-2 rounded-full bg-teal-400/10 px-4 py-2 text-sm font-medium text-teal-300 hover:bg-teal-400/20 transition-colors mb-6"
                >
                  <Calendar size={16} />
                  <span>Schedule a call</span>
                  <span className="flex items-center justify-center bg-black/20 rounded-full w-5 h-5">
                    <ChevronRight size={14} />
                  </span>
                </a>
              </div>

              {/* Discord Chat Bubble */}
                <motion.div
                      animate={{
                        y: [0, -20, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                      }}
                      className="absolute top-[40%] -right-4 sm:-right-16 transform -translate-y-1/2 flex items-start gap-3 bg-gray-900/80 backdrop-blur-sm p-4 rounded-xl shadow-2xl w-60 border border-white/10"
                >
                    <Image
                      src={aboutData.avatarImage}
                      width={40}
                      height={40}
                      alt={`${aboutData.name}'s avatar`}
                      className="rounded-full border-2 border-emerald-500"
                    />
                    <div>
                      <p className="font-bold text-white">{aboutData.name}</p>
                      <p className="text-sm text-gray-300">
                        Welcome to talk to me in LinkedIn!
                      </p>
                    </div>
                  </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section: Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutData.skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-gray-500/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 transition-all duration-300 hover:border-emerald-500/50 hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="text-emerald-400">{icon[index]}</div>
                <h3 className="font-bold text-lg text-white">{skill.title}</h3>
              </div>
              <p className="text-gray-400 text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default About;
