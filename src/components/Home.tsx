import { Truck, Package, Globe, Shield, Clock, Users, MapPin, Phone, Mail, CheckCircle, Menu, X, ChevronLeft, ChevronRight, Ship, Plane } from 'lucide-react';
import { useState, useEffect } from 'react';
import Carousel from './Carousel';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);


  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Leadership', href: '#leadership' },
  ];

  const scrollToSection = (href: any) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 to-orange-500">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img className='w-25' src='images/hpr_logo.png'/>
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
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 hover:scale-105"
                >
                  {item.name}
                </button>
              ))}
              <button onClick={() => scrollToSection("#contact")} className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-200 hover:scale-105">
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
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
                <button onClick={() => scrollToSection("#contact")} className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-md font-medium">
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Carousel Section */}
      <div id="home" className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-black/10"></div>
        
 <Carousel autoPlay={true} interval={5000}>
          {/* Slide 1 */}
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-white max-w-4xl mx-auto px-6">
              <div className="mb-6">
                <Truck className="w-24 h-24 text-white drop-shadow-lg mx-auto" />
              </div>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <span className="text-sm font-semibold">Fast & Reliable</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
                PT Harazaki Perkasa Rajawali
              </h1>
              <p className="text-2xl lg:text-3xl font-light mb-6 drop-shadow-md">
                Where Logistics Meets Greatness
              </p>
              <p className="text-lg lg:text-xl mb-8 drop-shadow-sm max-w-2xl mx-auto">
                Leading integrated logistics solutions across Indonesia
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-orange-50 transition-all duration-200 hover:scale-105 shadow-lg">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-200 hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-white max-w-4xl mx-auto px-6">
              <div className="mb-6">
                <Ship className="w-24 h-24 text-white drop-shadow-lg mx-auto" />
              </div>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <span className="text-sm font-semibold">Multi-Modal Transport</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
                Global Transportation Network
              </h1>
              <p className="text-2xl lg:text-3xl font-light mb-6 drop-shadow-md">
                Sea, Air & Land Solutions
              </p>
              <p className="text-lg lg:text-xl mb-8 drop-shadow-sm max-w-2xl mx-auto">
                Comprehensive freight services connecting your business worldwide
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-orange-50 transition-all duration-200 hover:scale-105 shadow-lg">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-200 hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </Carousel>


      </div>

      {/* About Section */}
      <div id="about" className="bg-white/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Established in 2025 and headquartered in Taman Cibiru, Lippo Cikarang, PT Harazaki Perkasa Rajawali is a logistics and multi-business company committed to delivering innovative, reliable, and efficient logistics solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We understand the critical role of logistics in supporting modern supply chains, and we're here to help businesses stay connected and grow across regions. Driven by the spirit of <b>"Where Logistics Meets Greatness"</b>, we don't just move goods—we create value.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-300 to-orange-500 rounded-2xl p-8 shadow-2xl flex gap-5 items-center content-center">
                <img className='w-50' src="images/forklift.png" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Innovation Driven</h3>
                  <p className="text-white/90">
                    Through technology, operational excellence, and customer-oriented service, we aim to become a trusted partner in every journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-700 text-center leading-relaxed">
                To become the leading and trusted integrated logistics service provider by offering innovative, efficient, and sustainable solutions to support global business growth.
              </p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <div className="space-y-3 text-gray-700">
                <p>• Provide fast, secure, and reliable logistics services using advanced technology</p>
                <p>• Build an extensive distribution network meeting diverse customer needs</p>
                <p>• Deliver the best customer experience through quality and service excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="bg-white/95 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive logistics solutions tailored to your needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Truck className="w-12 h-12" />,
                title: "Integrated Transportation",
                description: "Reliable freight services via sea, air, and land, ensuring efficient distribution across regions."
              },
              {
                icon: <Package className="w-12 h-12" />,
                title: "Supply Chain Management",
                description: "End-to-end solutions managing goods flow from planning and procurement to final delivery."
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Warehousing Solutions",
                description: "Secure, technology-driven warehouse management with accurate inventory control."
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Custom Logistics",
                description: "Tailored services for specific needs, including time-sensitive and special handling deliveries."
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: "National Distribution",
                description: "Well-established network ensuring fast, efficient delivery throughout Indonesia."
              },
              {
                icon: <Clock className="w-12 h-12" />,
                title: "Real-Time Tracking",
                description: "Digital systems providing full shipment visibility for transparency and peace of mind."
              }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-orange-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div id="why-us" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Why Choose Us</h2>
            <p className="text-xl text-white/90 drop-shadow-md">Excellence in every aspect of logistics</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Integrated & Reliable",
                description: "End-to-end logistics solutions with strong focus on safety and punctuality."
              },
              {
                title: "Customer-Centric",
                description: "Every service designed to maximize convenience and client satisfaction."
              },
              {
                title: "Advanced Technology",
                description: "Modern infrastructure and digital systems for efficient logistics processes."
              },
              {
                title: "Quality Commitment",
                description: "Trust built through consistent quality and dependable service delivery."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Board of Directors */}
      <div id="leadership" className="backdrop-blur-sm py-16" style={{backgroundImage: "url('images/bg_black2.png')"}}>
        <div className="max-w-6xl mx-auto px-6">

          <div className="flex items-center mb-12">
            <div className="w-2 h-10 bg-orange-500 mr-4"></div>
            <h2 className="text-4xl font-bold text-white">Board of Directors</h2>
          </div>
          
            <div>
              <img className='w-full' src='images/board_structure.png'/>
            </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* {[
              { name: "SERDIMAN ZAMASI", position: "President Director" },
              { name: "GERSOM FREDERICK C.L.", position: "Commissioner" },
              { name: "IVAN TRISMAN HAREFA", position: "Director" },
              { name: "BRYAN ALVINUS LAHAGU", position: "Director" },
              { name: "DARIUS GEA", position: "Director" },
              { name: "JAKI FIRDAUS", position: "Director" }
            ].map((person, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{person.name}</h3>
                <p className="text-orange-600 font-medium">{person.position}</p>
              </div>
            ))} */}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-xl text-gray-600">Get in touch for all your logistics needs</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Phone</h3>
                <p className="text-gray-600">0877-5232-6174</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600 break-all">harazakiperkasarajawali@gmail.com</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Address</h3>
                <p className="text-gray-600">Taman Cibiru, Lippo Cikarang</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black backdrop-blur-sm py-8">
        <div className="max-w-6xl mx-auto px-6 text-center grid grid-cols-3">
         <img className='w-25' src='images/hpr_logo.png'/>
          <div className="text-white/70 text-sm">
            <p>NPWP : 1000 0000 0204 4156</p>
            <p>SK Kemenkumham : AHU-0035054.AH.01.01.TAHUN 2025</p>
            <p>Fully Licensed & Certified</p>
            <p className="mt-2">© 2025 PT Harazaki Perkasa Rajawali. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;