
import { motion } from "framer-motion";

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
              alt="Franchise support team" 
              className="rounded-xl shadow-lg object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-teal p-5 rounded-lg shadow-lg">
              <div className="text-white text-center">
                <div className="font-bold text-3xl">24/7</div>
                <div className="text-sm">Support</div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-teal/10 text-teal font-medium text-sm mb-3">
              Why Choose Us
            </span>
            <h2 className="text-navy mb-6">The HFC Advantage</h2>
            <p className="text-slate-600 text-lg mb-8">
              As part of the Home Franchise Concepts family, you'll receive industry-leading support and resources designed to maximize your success as a business owner.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex"
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                      <span className="text-navy text-xl">{benefit.icon}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-2">{benefit.title}</h3>
                    <p className="text-slate-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Process Steps */}
        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-teal/10 text-teal font-medium text-sm mb-3">
              Getting Started
            </span>
            <h2 className="text-navy mb-6">Your Journey to Ownership</h2>
            <p className="text-slate-600 text-lg">
              Our streamlined process makes becoming a franchise owner simple and straightforward.
            </p>
          </div>

          <div className="relative">
            {/* Process Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-16 md:space-y-0 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`md:flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-16 text-right" : "md:pl-16 text-left"}`}>
                    <div className="bg-white p-6 rounded-xl shadow-md inline-block">
                      <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
                      <p className="text-slate-600">{step.description}</p>
                    </div>
                  </div>
                  <div className="relative md:w-0 mx-auto">
                    <div className="h-12 w-12 rounded-full bg-teal text-white flex items-center justify-center font-bold text-xl absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 mt-4 md:mt-0 z-10">
                      {index + 1}
                    </div>
                  </div>
                  <div className="md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const benefits = [
  {
    icon: "🎓",
    title: "Comprehensive Training",
    description: "Initial training at our headquarters plus ongoing education to keep you at the forefront of your industry."
  },
  {
    icon: "📱",
    title: "Marketing Support",
    description: "National advertising campaigns, local market strategies, and digital marketing tools to drive customer acquisition."
  },
  {
    icon: "💼",
    title: "Business Systems",
    description: "Proprietary software and proven operational processes that streamline your business management."
  },
  {
    icon: "🔄",
    title: "Ongoing Support",
    description: "Dedicated franchise business coaches and specialists to support every aspect of your business."
  }
];

const steps = [
  {
    title: "Initial Inquiry",
    description: "Complete our franchise information request form and speak with a franchise development representative."
  },
  {
    title: "Discovery Process",
    description: "Learn about our brands, business models, and speak with existing franchise owners."
  },
  {
    title: "Qualification",
    description: "Review financial requirements and complete the qualification process with our team."
  },
  {
    title: "Discovery Day",
    description: "Visit our headquarters, meet the executive team, and get your questions answered."
  },
  {
    title: "Decision & Onboarding",
    description: "Sign franchise agreement, complete initial training, and prepare for your grand opening."
  }
];

export default BenefitsSection;
