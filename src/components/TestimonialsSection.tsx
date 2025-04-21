
import { useState } from "react";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section bg-navy text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-teal font-medium text-sm mb-3">
            Success Stories
          </span>
          <h2 className="text-white mb-6">Hear From Our Franchise Owners</h2>
          <p className="text-gray-300 text-lg">
            Our franchisees share their experiences building successful businesses with Home Franchise Concepts.
          </p>
        </div>

        <div className="relative mb-12">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white text-navy rounded-2xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 flex-shrink-0">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name} 
                  className="w-32 h-32 md:w-full md:h-auto rounded-full md:rounded-xl object-cover mx-auto"
                />
              </div>
              <div className="md:w-2/3">
                <div className="mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-gold text-2xl">★</span>
                  ))}
                </div>
                <blockquote className="text-lg md:text-xl italic mb-6">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                <div className="flex items-center">
                  <div>
                    <div className="font-bold text-lg">{testimonials[activeIndex].name}</div>
                    <div className="text-gray-600">{testimonials[activeIndex].title}, {testimonials[activeIndex].location}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3 bg-teal text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-teal/90 transition-colors hidden md:flex"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-3 bg-teal text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-teal/90 transition-colors hidden md:flex"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots for Mobile */}
        <div className="flex justify-center space-x-2 md:hidden">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === activeIndex ? "bg-teal" : "bg-white/20"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex justify-center space-x-4 mt-6 md:hidden">
          <button 
            onClick={prevTestimonial}
            className="bg-teal/20 text-teal px-4 py-2 rounded-md"
          >
            Previous
          </button>
          <button 
            onClick={nextTestimonial}
            className="bg-teal text-white px-4 py-2 rounded-md"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    name: "Michael Reynolds",
    title: "Franchise Owner",
    location: "Budget Blinds of Portland",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    quote: "After 15 years in corporate America, I wanted to build something for myself. Joining Budget Blinds gave me the perfect balance of independence with support. The training was comprehensive, and the ongoing support has been invaluable. I've grown my business to three territories in just five years."
  },
  {
    name: "Sarah Johnson",
    title: "Multi-Unit Owner",
    location: "Tailored Living of Seattle",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2576&q=80",
    quote: "What impressed me most about Home Franchise Concepts was their commitment to innovation. The systems they've developed make running the business efficient, allowing me to focus on growth. The buying power we get through the franchise network has also been a significant advantage over independent competitors."
  },
  {
    name: "David Martinez",
    title: "Franchise Owner",
    location: "Kitchen Tune-Up of Austin",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2500&q=80",
    quote: "The training and support from HFC has been exceptional. From day one, they provided clear guidance on everything from marketing to operations. What I appreciate most is the community of fellow franchisees - we share ideas and support each other. It's been the most rewarding career decision I've ever made."
  },
  {
    name: "Jennifer Williams",
    title: "Franchise Owner",
    location: "Home Envy of Chicago",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80",
    quote: "Home Envy has given me the opportunity to build a business that I'm truly passionate about. The national brand recognition combined with local marketing support helped me establish a strong presence in my market quickly. The best part is the work-life balance I've been able to achieve while growing a successful business."
  }
];

export default TestimonialsSection;
