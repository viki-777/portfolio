import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

// Data for the footer can be managed here for easy updates
const footerData = {
  name: "Vikash Kumar",
  eduD: {
    name: "IIIT Gwalior",
    url: "#" // Replace with the actual URL
  },
  socials: {
    github: "https://github.com/viki-777",
    linkedin: "https://in.linkedin.com/in/vikash-07viki",
    email: "vikas.iiitm.career@gmail.com"
  }
};

const Footer = () => {
  return (
    <footer className="text-sm text-slate-400">
      <div className="mx-auto max-w-screen-xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left Section: Copyright and Credits */}
        <div className="text-center sm:text-left">
          <p>
            All rights reserved © {new Date().getFullYear()} / {footerData.name} / {' '}
            <a 
              href={footerData.eduD.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium text-teal-300 hover:text-teal-400 focus-visible:text-teal-400 transition-colors"
            >
              {footerData.eduD.name}
            </a>
          </p>
        </div>

        {/* Right Section: Social Icons */}
        <div className="flex items-center space-x-5">
          <a 
            href={footerData.socials.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub" 
            className="hover:text-teal-300 transition-colors"
          >
            <Github size={20} />
          </a>
          <a 
            href={footerData.socials.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn" 
            className="hover:text-teal-300 transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href={footerData.socials.email} 
            aria-label="Email" 
            className="hover:text-teal-300 transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;