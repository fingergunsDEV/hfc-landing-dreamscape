
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-teal/10 text-teal font-medium text-sm mb-3">
            About Us
          </span>
          <h2 className="text-navy mb-6">Leading the Home Services Franchise Industry</h2>
          <p className="text-slate-600 text-lg">
            Home Franchise Concepts is more than just a franchise network – we're building the future of home services with innovative brands and proven business models.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md card-hover"
            >
              <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center mb-6">
                <span className="text-teal text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
              <p className="text-slate-600 mb-4">{feature.description}</p>
              <a href={feature.link} className="inline-flex items-center text-teal font-medium hover:underline">
                Learn more
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  className="w-4 h-4 ml-1"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 bg-navy rounded-2xl p-10 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-teal font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    icon: "🚀",
    title: "Proven Business Models",
    description: "Our franchise systems have been refined over decades to ensure success for our franchisees.",
    link: "#brands"
  },
  {
    icon: "🛠️",
    title: "Comprehensive Training",
    description: "Extensive initial and ongoing training programs to ensure you master every aspect of your business.",
    link: "#benefits"
  },
  {
    icon: "📈",
    title: "Marketing Support",
    description: "Powerful national and local marketing strategies that drive customer acquisition.",
    link: "#benefits"
  },
  {
    icon: "🤝",
    title: "Collaborative Network",
    description: "Join a community of franchise owners that share best practices and support each other.",
    link: "#testimonials"
  },
  {
    icon: "💼",
    title: "Multiple Revenue Streams",
    description: "Diversified product and service offerings that generate year-round income.",
    link: "#brands"
  },
  {
    icon: "🔍",
    title: "Territory Protection",
    description: "Exclusive territorial rights that protect your business from internal competition.",
    link: "#contact"
  }
];

const stats = [
  {
    value: "500+",
    label: "Franchise Locations"
  },
  {
    value: "25+",
    label: "Years Experience"
  },
  {
    value: "98%",
    label: "Franchisee Satisfaction"
  },
  {
    value: "5",
    label: "Distinctive Brands"
  }
];

export default AboutSection;
