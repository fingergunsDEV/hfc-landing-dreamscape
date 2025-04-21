
import { useState } from "react";
import { motion } from "framer-motion";

const BrandsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="brands" className="section bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-teal/10 text-teal font-medium text-sm mb-3">
            Our Brands
          </span>
          <h2 className="text-navy mb-6">Our Portfolio of Leading Franchise Brands</h2>
          <p className="text-slate-600 text-lg">
            Home Franchise Concepts offers multiple franchise opportunities across various home service categories, each with their own unique value proposition.
          </p>
        </div>

        {/* Brands Tabs */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-4">
            {brands.map((brand, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === index
                    ? "bg-teal text-white shadow-md"
                    : "bg-white text-navy hover:bg-gray-100"
                }`}
              >
                {brand.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active Brand Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                  {brands[activeTab].name}
                </h3>
                <p className="text-slate-600 mb-6">
                  {brands[activeTab].description}
                </p>
                <div className="space-y-4">
                  {brands[activeTab].highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center">
                          <svg className="w-3 h-3 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-700">{highlight}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-auto">
                <a href="#contact" className="btn-primary inline-block">
                  Learn More About {brands[activeTab].name}
                </a>
              </div>
            </div>
            <div className="aspect-w-16 aspect-h-9 md:aspect-auto">
              <img 
                src={brands[activeTab].image} 
                alt={brands[activeTab].name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const brands = [
  {
    name: "Budget Blinds",
    description: "The largest window covering franchise in North America, offering custom blinds, shades, shutters and more.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80",
    highlights: [
      "Low overhead business model with no inventory requirements",
      "In-home consultative sales approach with high customer satisfaction",
      "Exclusive supplier relationships with top manufacturers",
      "Comprehensive training and marketing support",
      "Territories available nationwide"
    ]
  },
  {
    name: "Tailored Living",
    description: "Premium home organization solutions including custom closets, garage cabinets, and home office systems.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3432&q=80",
    highlights: [
      "Growing market in home organization and storage solutions",
      "Custom design and installation services",
      "Premium product offerings with strong margins",
      "Scalable business with both residential and commercial applications",
      "Proprietary design software and visualization tools"
    ]
  },
  {
    name: "Kitchen Tune-Up",
    description: "Kitchen remodeling services offering five different options, from one-day tune-ups to complete custom remodels.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    highlights: [
      "Multiple service offerings to meet various customer budgets",
      "Quick project turnaround times compared to traditional remodeling",
      "Recurring revenue from maintenance services",
      "Robust training program and operations support",
      "Strong consumer demand in the remodeling industry"
    ]
  },
  {
    name: "Home Envy",
    description: "Specializing in high-quality home renovation projects including flooring, painting, and bathroom remodels.",
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2672&q=80",
    highlights: [
      "High-demand services with excellent profit margins",
      "Multiple revenue streams from various renovation services",
      "Established vendor relationships and purchasing power",
      "Proprietary project management systems",
      "Marketing support and lead generation"
    ]
  },
  {
    name: "Premier Outdoor Living",
    description: "Custom outdoor living spaces including patios, pergolas, outdoor kitchens, and landscaping design.",
    image: "https://images.unsplash.com/photo-1601061200082-3be63d67373a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    highlights: [
      "Growing market in outdoor living improvements",
      "Premium service with high average ticket sales",
      "Year-round business opportunities in most markets",
      "Comprehensive design and installation training",
      "Strong supplier relationships with exclusive products"
    ]
  }
];

export default BrandsSection;
