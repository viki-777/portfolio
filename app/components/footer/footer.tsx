import React, { useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [activeTab, setActiveTab] = useState("Home");

  // Ensure valid hrefs
  const tabs = [
    { name: "Home", href: "#hero" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-950 text-white py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Left Section */}
        <div className="text-sm text-gray-500 space-y-1 text-center md:text-left">
          <p>Made with love ❤️ by Vikash</p>
          <p>© {new Date().getFullYear()} All rights are Reserved</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center mt-4 md:mt-0 bg-emerald-500 py-2 px-4 rounded-full space-x-4 shadow-md">
          {tabs.map((tab) => (
            <Link href={tab.href} key={tab.name}>
              <div
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                  activeTab === tab.name
                    ? "bg-black text-white"
                    : "text-black hover:text-gray-700"
                }`}
                onClick={() => setActiveTab(tab.name)}
              >
                {tab.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
