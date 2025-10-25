import React from 'react'

const About = () => {
  return (
    <div>
 <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image with badge */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://static.readdy.ai/image/0450755560e2391caa58a4f2ad77871e/687ebf594d1261bb0fdc4b29230904d9.png"
                alt="Ankit Pandey - Digital Marketing Expert"
                className="w-full h-[500px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-gray-600 text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <i className="ri-user-star-line mr-2"></i>
                About Ankit Pandey
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Digital Marketing{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  Strategist & Trainer
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                With over 5 years of experience in digital marketing, I've dedicated my career to empowering businesses and individuals to achieve extraordinary growth through data-driven marketing strategies.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My mission is simple: to democratize digital marketing knowledge and make it accessible to everyone. Whether you're a startup founder, marketing professional, or student, I'm here to guide you on your journey to digital success.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <i className="ri-graduation-cap-line text-white text-xl"></i>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">10,000+</div>
                    <div className="text-gray-600 text-sm">Students Trained</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <i className="ri-building-line text-white text-xl"></i>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">200+</div>
                    <div className="text-gray-600 text-sm">Brands Grown</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission box */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">My Mission</h3>
              <p className="text-gray-700">
                "To bridge the gap between traditional business practices and modern digital strategies, creating a world where every business can thrive in the digital age."
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
                View My Work
              </button>
              <button className="border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer">
                Download Resume
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default About