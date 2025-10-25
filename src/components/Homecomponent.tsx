import React from "react";
import Navbar from "./Navbar";

const Homecomponent = () => {
  return (
    <div>
      <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Navbar */}
        {/* <nav className="relative z-20 w-full">
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
      </nav> */}

        <Navbar />
        
        {/* Background shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.3) 1px, transparent 0px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex-1 flex items-center justify-center">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center space-y-12">
              <div className="space-y-8">
                <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                  <span className="text-cyan-400 font-semibold text-sm">
                    🚀 #1 Digital Marketing Expert
                  </span>
                </div>
                <h1 className="text-6xl lg:text-8xl font-black leading-tight text-white">
                  Transform Your
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-pulse">
                    Digital Success
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
                  Master proven digital marketing strategies that have generated
                  <span className="text-cyan-400 font-semibold">
                    {" "}
                    $50M+ in revenue{" "}
                  </span>
                  for businesses worldwide. Join the elite community of
                  successful marketers.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl whitespace-nowrap overflow-hidden">
                  <span className="relative z-10">
                    Get Free Strategy Session
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                <button className="group border-2 border-slate-400 text-slate-300 hover:bg-white hover:text-slate-900 px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 whitespace-nowrap">
                  <span className="flex items-center gap-3">
                    Watch Success Stories
                    <i className="ri-play-circle-line text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                  </span>
                </button>
              </div>

              {/* Stats */}
              <div className="mt-16">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                  {[
                    {
                      value: "10K+",
                      label: "Students Trained",
                      color: "from-cyan-400 to-blue-400",
                    },
                    {
                      value: "$50M+",
                      label: "Revenue Generated",
                      color: "from-orange-400 to-red-400",
                    },
                    {
                      value: "200+",
                      label: "Brands Grown",
                      color: "from-green-400 to-emerald-400",
                    },
                    {
                      value: "98%",
                      label: "Success Rate",
                      color: "from-purple-400 to-pink-400",
                    },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
                    >
                      <div
                        className={`text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2`}
                      >
                        {stat.value}
                      </div>
                      <div className="text-slate-400 font-medium">
                        {stat.label}
                      </div>
                      <div
                        className={`w-12 h-1 bg-gradient-to-r ${stat.color} mx-auto mt-3 rounded-full`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Badges */}
              <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-60">
                {[
                  {
                    icon: "ri-shield-check-line",
                    color: "text-cyan-400",
                    label: "Certified Expert",
                  },
                  {
                    icon: "ri-award-line",
                    color: "text-orange-400",
                    label: "Industry Leader",
                  },
                  {
                    icon: "ri-star-line",
                    color: "text-yellow-400",
                    label: "5-Star Rated",
                  },
                ].map((badge, i) => (
                  <React.Fragment key={badge.label}>
                    <div className="flex items-center gap-2 text-slate-400">
                      <i className={`${badge.icon} ${badge.color}`}></i>
                      <span className="text-sm font-medium">{badge.label}</span>
                    </div>
                    {i < 2 && (
                      <div className="w-1 h-1 bg-slate-400 rounded-full" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homecomponent;
