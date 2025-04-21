
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm py-3' : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-navy">
              Home<span className="text-teal">Franchise</span><span className="text-navy">Concepts</span>
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="font-medium text-gray-700 hover:text-teal transition-colors">About</a>
          <a href="#brands" className="font-medium text-gray-700 hover:text-teal transition-colors">Our Brands</a>
          <a href="#benefits" className="font-medium text-gray-700 hover:text-teal transition-colors">Benefits</a>
          <a href="#testimonials" className="font-medium text-gray-700 hover:text-teal transition-colors">Testimonials</a>
          <a href="#contact" className="btn-primary">Become a Franchisee</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-navy flex items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            <a href="#about" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">About</a>
            <a href="#brands" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Our Brands</a>
            <a href="#benefits" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Benefits</a>
            <a href="#testimonials" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Testimonials</a>
            <a href="#contact" className="mx-4 btn-primary text-center">Become a Franchisee</a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
