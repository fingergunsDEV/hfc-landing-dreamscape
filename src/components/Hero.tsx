
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-hero-pattern">
      <div className="container-custom grid md:grid-cols-2 items-center gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          <div className="mb-4">
            <span className="inline-block py-1 px-3 rounded-full bg-teal/10 text-teal font-medium text-sm">
              National Franchise Network
            </span>
          </div>
          <h1 className="text-navy leading-tight mb-6">
            Build Your Future With a Proven Franchise System
          </h1>
          <p className="text-slate-600 text-lg mb-8 max-w-lg">
            Join Home Franchise Concepts, the leading franchise network with proven business models, comprehensive training, and industry-leading support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-primary text-center">
              Explore Opportunities
            </a>
            <a href="#brands" className="btn-secondary text-center">
              Discover Our Brands
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="bg-teal/10 rounded-full p-2">
                <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-700 font-medium">500+ Locations</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-teal/10 rounded-full p-2">
                <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-700 font-medium">25+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-teal/10 rounded-full p-2">
                <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Proven Success</span>
            </div>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" 
              alt="Successful franchise owner" 
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="absolute top-[-20px] right-[-20px] bg-white p-4 rounded-lg shadow-lg z-20">
            <div className="flex flex-col items-center">
              <div className="text-teal font-bold text-4xl">98%</div>
              <div className="text-gray-600 text-sm font-medium">Franchisee Satisfaction</div>
            </div>
          </div>
          <div className="absolute bottom-[-20px] left-[-20px] bg-accent p-4 rounded-lg shadow-lg z-20">
            <div className="flex flex-col items-center">
              <div className="text-navy font-bold text-4xl">#1</div>
              <div className="text-navy text-sm font-medium">in Category</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
