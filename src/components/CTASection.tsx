
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section id="contact" className="section bg-cta-pattern text-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white font-medium text-sm mb-3">
              Ready to Start?
            </span>
            <h2 className="text-white mb-6">Take the First Step Towards Business Ownership</h2>
            <p className="text-gray-100 text-lg mb-8">
              Fill out the form to receive detailed information about our franchise opportunities, investment requirements, and available territories.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <div className="mr-3 text-teal text-xl">✓</div>
                  <div className="text-gray-100">{benefit}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white text-navy rounded-xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6">Request Franchise Information</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal focus:border-teal"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal focus:border-teal"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal focus:border-teal"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal focus:border-teal"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Interested Location
                </label>
                <input
                  type="text"
                  id="location"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal focus:border-teal"
                  placeholder="City, State or Zip Code"
                />
              </div>
              
              <div>
                <label htmlFor="franchise" className="block text-sm font-medium text-gray-700 mb-1">
                  Interested Franchise(s)
                </label>
                <select
                  id="franchise"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal focus:border-teal"
                >
                  <option value="">Select a Franchise</option>
                  <option value="budget-blinds">Budget Blinds</option>
                  <option value="tailored-living">Tailored Living</option>
                  <option value="kitchen-tune-up">Kitchen Tune-Up</option>
                  <option value="home-envy">Home Envy</option>
                  <option value="premier-outdoor">Premier Outdoor Living</option>
                  <option value="multiple">Multiple Brands</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="investment" className="block text-sm font-medium text-gray-700 mb-1">
                  Investment Range
                </label>
                <select
                  id="investment"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal focus:border-teal"
                >
                  <option value="">Select Investment Range</option>
                  <option value="50-100">$50,000 - $100,000</option>
                  <option value="100-150">$100,000 - $150,000</option>
                  <option value="150-200">$150,000 - $200,000</option>
                  <option value="200+">$200,000+</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal focus:border-teal"
                  placeholder="Tell us more about your interests and questions..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary py-3"
              >
                Request Information
              </button>
              
              <p className="text-xs text-gray-500 mt-3">
                By submitting this form, you agree to our privacy policy and consent to be contacted by a franchise representative.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const benefits = [
  "No experience necessary - full training provided",
  "Financing options available for qualified candidates",
  "Protected territories with exclusive rights",
  "Join an established brand with proven track record",
  "Comprehensive marketing and operational support"
];

export default CTASection;
