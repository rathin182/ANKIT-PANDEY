"use client";

import React, { useState } from "react";
import DigitalGrowth from "./DigitalGrowth";

interface Project {
  title: string;
  client: string;
  description: string;
  tags: string[];
  results: string[];
  imageUrl: string;
}

// Project data
const projects: Project[] = [
  {
    title: "E-commerce Growth Campaign",
    client: "StyleHub Fashion",
    description:
      "Complete digital transformation of fashion e-commerce store with SEO, paid ads, and conversion optimization.",
    tags: ["E-commerce"],
    results: [
      "250% Revenue Increase",
      "180% Conversion Rate",
      "300% Organic Traffic",
    ],
    imageUrl: "/protfollio/1.jpg",
  },
  {
    title: "B2B Lead Generation",
    client: "TechSolutions Pro",
    description:
      "Strategic B2B marketing campaign focusing on LinkedIn advertising and content marketing for SaaS company.",
    tags: ["B2B"],
    results: ["400% Qualified Leads", "60% Cost Reduction", "150% Sales Pipeline"],
    imageUrl: "/protfollio/2.jpg",
  },
  {
    title: "Restaurant Digital Pivot",
    client: "Bella Vista Restaurant",
    description:
      "Helped local restaurant pivot to digital-first approach during COVID with online ordering and social media.",
    tags: ["Local Business"],
    results: ["400% Online Orders", "200% Social Engagement", "150% Customer Base"],
    imageUrl: "/protfollio/3.jpg",
  },
  {
    title: "SaaS Product Launch",
    client: "InnovateLab",
    description:
      "Full-scale product launch strategy including content marketing, influencer partnerships, and growth hacking.",
    tags: ["SaaS"],
    results: ["10K+ Users in 3 Months", "25% Monthly Growth", "40% Retention Rate"],
    imageUrl: "/protfollio/4.jpg",
  },
  {
    title: "Healthcare Practice Growth",
    client: "MedCare Clinic",
    description:
      "Digital marketing strategy for healthcare practice focusing on local SEO and patient acquisition.",
    tags: ["Healthcare"],
    results: ["300% Patient Inquiries", "200% Online Bookings", "150% Practice Revenue"],
    imageUrl: "/protfollio/5.jpg",
  },
  {
    title: "Educational Platform Scale",
    client: "LearnTech Academy",
    description:
      "Scaled online education platform through content marketing, SEO, and strategic partnerships.",
    tags: ["Education"],
    results: ["500% Student Enrollment", "80% Course Completion", "300% Revenue Growth"],
    imageUrl: "/protfollio/6.jpg",
  },
];

// Main categories
const mainCategories = [
  "All Projects",
  "E-commerce",
  "B2B",
  "SaaS",
  "Local Business",
  "Healthcare",
  "Education",
];

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  // Filter projects based on category
  const filteredProjects =
    selectedCategory === "All Projects"
      ? projects
      : projects.filter((project) =>
          project.tags.includes(selectedCategory)
        );

  return (
    <div id="portfolio" className="bg-gray-50">
        <div className="m-8 flex justify-center items-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        Portfolio
        </h1>
      </div>
      <section className=" bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Proven Results Across{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                Multiple Industries
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore real case studies and campaigns that delivered exceptional
              results for businesses of all sizes and industries.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {mainCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-110"
                    src={project.imageUrl}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/90 text-gray-800 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <div className="text-sm text-purple-600 font-medium mb-3">
                      {project.client}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-900">
                      Key Results:
                    </h4>
                    <ul className="space-y-1">
                      {project.results.map((result) => (
                        <li
                          key={result}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full mt-4 bg-gray-50 hover:bg-purple-50 text-gray-700 hover:text-purple-600 py-3 rounded-lg font-medium transition-all duration-300 border border-gray-200 hover:border-purple-200 whitespace-nowrap cursor-pointer">
                    View Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DigitalGrowth />
    </div>
  );
};

export default Portfolio;
