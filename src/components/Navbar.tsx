"use client";

import React from "react";

const Navbar: React.FC = () => {
const navLinks = ["Home", "About", "Services", "Traning" ,"Portfolio", "Success Stories", "Blog",  "Contact"];

  return (
    <div>
      <nav className="relative z-20 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <h1
                className="text-2xl font-bold text-white tracking-tight"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                ANKIT PANDEY
              </h1>
            </div>
            <div className="hidden lg:block">
              <div className="flex items-center space-x-8">
                {["Home", "About", "Services", "Training", "Portfolio", "Blog", "Contact"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </div>
            <div className="hidden lg:block">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
                Book Free Session
              </button>
            </div>
            <div className="lg:hidden">
              <button className="text-slate-300 hover:text-white p-2 cursor-pointer">
                <i className="ri-menu-line text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
