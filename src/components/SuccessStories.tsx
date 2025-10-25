import React from 'react'


interface Testimonial {
  stars: number;
  quote: string;
  badge: string;
  name: string;
  role: string;
  company: string;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    stars: 5,
    quote:
      "Ankit's digital marketing strategy transformed our online presence completely. We saw a 300% increase in qualified leads within just 3 months. His expertise in SEO and paid advertising is unmatched.",
    badge: "300% Lead Increase",
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStart Inc.",
    imageUrl:
      "https://readdy.ai/api/search-image?query=Professional%20businesswoman%20Sarah%20Johnson&width=100&height=100",
  },
  {
    stars: 5,
    quote:
      "The ROI from Ankit's training program was incredible. Not only did I learn advanced marketing techniques, but I also implemented them to grow my e-commerce business by 250% in revenue.",
    badge: "250% Revenue Growth",
    name: "Michael Chen",
    role: "E-commerce Founder",
    company: "StyleHub",
    imageUrl:
      "https://readdy.ai/api/search-image?query=Professional%20businessman%20Michael%20Chen&width=100&height=100",
  },
  {
    stars: 5,
    quote:
      "As a complete beginner, Ankit's course gave me the confidence and skills to start my own digital marketing agency. His teaching style is clear, practical, and results-oriented.",
    badge: "Started Own Agency",
    name: "Emily Rodriguez",
    role: "Digital Marketing Student",
    company: "Freelancer",
    imageUrl:
      "https://readdy.ai/api/search-image?query=Professional%20young%20woman%20Emily%20Rodriguez&width=100&height=100",
  },
  // Add more testimonials as needed
];

const stats = [
  { value: "10,000+", label: "Students Trained", color: "text-blue-600" },
  { value: "200+", label: "Brands Grown", color: "text-green-600" },
  { value: "95%", label: "Success Rate", color: "text-orange-600" },
  { value: "5+", label: "Years Experience", color: "text-purple-600" },
];

const SuccessStories = () => {
  return (
    <div>
 <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
            <i className="ri-chat-quote-line mr-2"></i>
            Success Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What My Students &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real people who've transformed their businesses
            and careers through digital marketing mastery.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                {[...Array(t.stars)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400"></i>
                ))}
              </div>
              <blockquote className="text-gray-700 leading-relaxed mb-6">
                "{t.quote}"
              </blockquote>
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                  <i className="ri-trophy-line mr-2"></i>
                  {t.badge}
                </span>
              </div>
              <div className="flex items-center">
                <img
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover object-top mr-4"
                  src={t.imageUrl}
                />
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-600">{t.role}</div>
                  <div className="text-sm text-gray-500">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default SuccessStories