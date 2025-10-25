import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* About & Social */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "Pacifico, serif" }}>
                Ankit Pandey
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Empowering businesses and students through digital marketing mastery. Join 10,000+ successful marketers who've transformed their careers and businesses.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors duration-300 cursor-pointer">
                  <i className="ri-linkedin-fill"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-lg flex items-center justify-center transition-colors duration-300 cursor-pointer">
                  <i className="ri-instagram-fill"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center transition-colors duration-300 cursor-pointer">
                  <i className="ri-youtube-fill"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors duration-300 cursor-pointer">
                  <i className="ri-twitter-fill"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                />
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Digital Marketing Strategy",
                "Social Media Growth",
                "SEO Optimization",
                "Paid Ad Campaigns",
                "1-on-1 Training",
                "Group Training",
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Training Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Training Programs</h4>
            <ul className="space-y-3">
              {[
                "Digital Marketing Fundamentals",
                "Advanced SEO Mastery",
                "Paid Advertising Bootcamp",
                "Social Media Growth Hacking",
                "Complete Marketing MBA",
                "E-commerce Specialist",
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {[
                "Blog & Articles",
                "Case Studies",
                "Free Resources",
                "Marketing Tools",
                "Industry Reports",
                "Success Stories",
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10,000+", label: "Students Trained", color: "text-blue-400" },
              { value: "200+", label: "Brands Grown", color: "text-green-400" },
              { value: "95%", label: "Success Rate", color: "text-orange-400" },
              { value: "5+", label: "Years Experience", color: "text-purple-400" },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Ankit Pandey - Digital Marketer & Trainer. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              {[
                { text: "Privacy Policy", href: "#" },
                { text: "Terms of Service", href: "#" },
                { text: "Refund Policy", href: "https://readdy.ai/?origin=logo" },
              ].map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300 cursor-pointer"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer