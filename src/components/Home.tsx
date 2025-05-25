import "../styles/home.css";
import { Truck, Package, Globe, Shield, Clock, Users, MapPin, Phone, Mail, CheckCircle, Menu, X, ChevronLeft, ChevronRight, Ship, Plane } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Carousel from './Carousel';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const controls = useAnimation();
  
  // Refs for each section
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const whyUsRef = useRef(null);
  const leadershipRef = useRef(null);
  const contactRef = useRef(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Use Intersection Observer to trigger animations
  const isInView = {
    about: useInView(aboutRef, { once: true, amount: 0.1 }),
    services: useInView(servicesRef, { once: true, amount: 0.1 }),
    whyUs: useInView(whyUsRef, { once: true, amount: 0.1 }),
    leadership: useInView(leadershipRef, { once: true, amount: 0.1 }),
    contact: useInView(contactRef, { once: true, amount: 0.1 })
  };

  // Animate when section comes into view
  useEffect(() => {
    Object.entries(isInView).forEach(([key, inView]) => {
      if (inView) {
        controls.start("visible");
      }
    });
  }, [isInView, controls]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Leadership', href: '#leadership' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 to-orange-500">
      {/* WhatsApp Button */}
      <a href="https://api.whatsapp.com/send?phone=6287752326174" 
         className="fixed bottom-5 right-5 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50 pulse-animation md:w-16 md:h-16 sm:w-14 sm:h-14">
          <svg className="w-8 h-8 fill-white md:w-8 md:h-8 sm:w-7 sm:h-7" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z"/>
          </svg>
      </a>

      {/* Navigation Bar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50"
      >
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
      </motion.nav>

      {/* Hero Carousel Section */}
      <motion.div 
        id="home" 
        className="relative overflow-hidden md:pt-20 pt-18"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        
 <Carousel autoPlay={true} interval={5000}>
          {/* Slide 1 */}
          <div className="flex items-center justify-center h-full" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url('images/slide1.png')",backgroundSize: "cover", backgroundPosition: "bottom"}}>
            <div className="text-center text-white max-w-4xl mx-auto px-6">
              {/* <div className="mb-6">
                <Truck className="w-24 h-24 text-white drop-shadow-lg mx-auto" />
              </div> */}
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <span className="text-sm font-semibold">Fast & Reliable</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
                HPR LOGISTICS
              </h1>
              <p className="text-2xl lg:text-3xl font-light mb-6 drop-shadow-md">
                Where Logistics Meets Greatness
              </p>
              <p className="text-lg lg:text-xl mb-8 drop-shadow-sm max-w-2xl mx-auto">
                Leading integrated logistics solutions across Indonesia
              </p>
              <div className="hidden flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
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
          <div className="flex items-center justify-center h-full" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url('images/transport-logistics-products.jpg')",backgroundSize: "cover", backgroundPosition: "top"}}>
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
              <div className="hidden  flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
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
      </motion.div>

      {/* About Section */}
      <div 
        ref={aboutRef}
        id="about" 
        className="bg-white/95 backdrop-blur-sm"
      >
        <motion.div       variants={containerVariants}
        initial="hidden"
        animate={isInView.about ? "visible" : "hidden"} className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Established in 2025 and headquartered in Jl. Surya Kencana 3 No 73 Lippo Cikarang, RT 02 RW 16, Kel. Cibatu, Kec. Cikarang Selatan, Kab. Bekasi. PT Harazaki Perkasa Rajawali is a logistics and multi-business company committed to delivering innovative, reliable, and efficient logistics solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We understand the critical role of logistics in supporting modern supply chains, and we're here to help businesses stay connected and grow across regions. Driven by the spirit of <b>"Where Logistics Meets Greatness"</b>, we don't just move goods—we create value.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="relative">
              <div className="bg-gradient-to-br from-yellow-300 to-orange-500 rounded-2xl p-8 shadow-2xl lg:flex gap-5 items-center content-center">
                <img className='w-50' src="images/forklift.png" alt="Forklift" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Innovation Driven</h3>
                  <p className="text-white/90">
                    Through technology, operational excellence, and customer-oriented service, we aim to become a trusted partner in every journey.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
      </motion.div>
        </div>

      {/* Vision & Mission */}
      <div 
        ref={servicesRef}
        className="py-60 bg-black" 
        style={{backgroundImage: "url('images/business-logistic.png')"}}
        
      >
        <motion.div variants={containerVariants}
        initial="hidden"
        animate={isInView.services ? "visible" : "hidden"} className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-700 text-center leading-relaxed">
                To become the leading and trusted integrated logistics service provider by offering innovative, efficient, and sustainable solutions to support global business growth.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
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
            </motion.div>
          </div>
      </motion.div>
        </div>

      {/* Services Section */}
      <motion.div 
        ref={whyUsRef}
        id="services" 
        className="bg-white/95 backdrop-blur-sm py-16"
        variants={containerVariants}
        initial="hidden"
        animate={isInView.whyUs ? "visible" : "hidden"}
      >
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
              <motion.div key={index} variants={itemVariants} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-orange-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Why Choose Us */}
      <motion.div 
        ref={leadershipRef}
        id="why-us" 
        className="py-16" 
        style={{  backgroundImage: `
linear-gradient(to right, rgba(250, 204, 21, 0.7), rgba(249, 115, 22, 0.7)),url('images/cargo.jpg')`,backgroundSize: "cover", backgroundPosition: "bottom"}}
        variants={containerVariants}
        initial="hidden"
        animate={isInView.leadership ? "visible" : "hidden"}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="w-2 h-10 bg-yellow-400 mr-4"></div>
              <h2 className="text-4xl font-bold text-white drop-shadow-lg">Why Choose Us</h2>
            </div>
            <p className="text-xl text-white/90 drop-shadow-md">Excellence in every aspect of logistics</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-24 gap-6">
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
              <motion.div key={index} variants={itemVariants} className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Board of Directors */}
      <motion.div 
        ref={contactRef}
        id="leadership" 
        className="backdrop-blur-sm py-16" 
        style={{backgroundImage: "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)),url('images/bg_black3.png')"}}
        variants={containerVariants}
        initial="hidden"
        animate={isInView.contact ? "visible" : "hidden"}
      >
        <div className="max-w-6xl mx-auto px-6">

          <div className="flex items-center mb-12">
            <div className="w-2 h-10 bg-yellow-400 mr-4"></div>
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
              <motion.div key={index} variants={itemVariants} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{person.name}</h3>
                <p className="text-orange-600 font-medium">{person.position}</p>
              </motion.div>
            ))} */}
          </div>
        </div>
      </motion.div>

      {/* Our Legality */}
      <div 
        id="legality" 
        className="py-16 bg-white" 
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center mb-12">
            <div className="w-2 h-10 bg-yellow-400 mr-4"></div>
            <h2 className="text-4xl font-bold text-black">Our Legality</h2>
          </div>
          <table className="text-lg text-gray-700 leading-relaxed mb-6 table-custom">
            <tr>
              <td>NIB</td>
              <td className="px-2">:</td>
              <td>2005250096684</td>
            </tr>
            <tr>
              <td>NPWP</td>
              <td className="px-2">:</td>
              <td>1000 0000 0204 4156</td>
            </tr>
            <tr>
              <td>SK Kemenkumham</td>
              <td className="px-2">:</td>
              <td>AHU-0035054.AH.01.01.TAHUN 2025</td>
            </tr>
            <tr>
              <td>Account Number</td>
              <td className="px-2">:</td>
              <td>156-00-2485545-6 (Bank Mandiri) <br/> a.n. PT HARAZAKI PERKASA RAJAWALI</td>
            </tr>
          </table>
        </div>
          
      </div>

      {/* Contact Section */}
      <motion.div 
        id="contact" 
        className="py-16" 
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.8)), url('images/sosmed.png')", backgroundSize:"cover"}}
        variants={containerVariants}
        initial="hidden"
        animate={isInView.contact ? "visible" : "hidden"}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-xl text-gray-600">Get in touch for all your logistics needs</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div variants={itemVariants} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Phone</h3>
                <p className="text-gray-600">0877-5232-6174</p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600 break-all">harazakiperkasarajawali@gmail.com</p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Address</h3>
                <p className="text-gray-600">Jl. Surya Kencana 3 No 73 Lippo Cikarang, RT 02 RW 16, Kel. Cibatu, Kec. Cikarang Selatan, Kab. Bekasi</p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="bg-white backdrop-blur-sm py-8">
        <div className="max-w-6xl mx-auto px-6 text-center items-center grid md:grid-cols-3">
         <img className='w-25 md:mx-0 mx-auto md:mb-0 mb-5' src='images/hpr_logo.png'/>
          <div className="text-black text-sm">
            <p>NPWP : 1000 0000 0204 4156</p>
            <p>SK Kemenkumham : AHU-0035054.AH.01.01.TAHUN 2025</p>
            <p>Fully Licensed & Certified</p>
            <p className="mt-2"> 2025 PT Harazaki Perkasa Rajawali. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;