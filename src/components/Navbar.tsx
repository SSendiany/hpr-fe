import { Menu, X} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const navItems = [
        { name: 'Home', href: '#home', path: '/' },
        { name: 'About', href: '#about', path: '/' },
        { name: 'Services', href: '#services', path: '/' },
        { name: 'Why Choose Us', href: '#why-us', path: '/' },
        { name: 'Leadership', href: '#leadership', path: '/' },
        { name: 'Gallery', href: '', path: '/gallery' },
      ];
      const scrollToSection = (href: string, path: string) => {
        // Check if we're navigating to a different page
        const currentPath = window.location.pathname;
        
        if (path && path !== currentPath) {
          // Navigate to a different page
          // Store the target section in sessionStorage to scroll after page load
          if (href && href !== '') {
            sessionStorage.setItem('scrollTarget', href);
          }
          window.location.href = path;
          setIsMenuOpen(false);
          return;
        }
        
        // Navigate to section on the same page
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
      };

      // Effect to handle scrolling after navigation
      useEffect(() => {
        const scrollTarget = sessionStorage.getItem('scrollTarget');
        if (scrollTarget) {
          // Clear the storage item to prevent scrolling on future page loads
          sessionStorage.removeItem('scrollTarget');
          
          // Add a small delay to ensure the page is fully loaded
          setTimeout(() => {
            const element = document.querySelector(scrollTarget);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }
      }, []);

    return (<>
        {/* Navigation Bar */}
        <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img className='md:w-25 w-[20%]' src='images/hpr_logo.png'/>
              {/* <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">HPR Logistik</h1>
                <p className="text-xs text-gray-600">Where Logistics Meets Greatness</p>
              </div> */}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href, item.path)}
                  className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 hover:scale-105"
                >
                  {item.name}
                </button>
              ))}
              <button onClick={() => scrollToSection("#contact", "/")} className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-200 hover:scale-105">
                 Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white/95 backdrop-blur-md border-t">
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href, item.path)}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
                <button onClick={() => scrollToSection("#contact", "/")} className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-md font-medium">
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>        
    </>
    )
}

export default Navbar;