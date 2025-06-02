import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  category: string;
}

interface GalleryProps {
  category?: string;
}

const Gallery = ({ category = 'all' }: GalleryProps) => {
  const galleryRef = useRef(null);
  const isInView = useInView(galleryRef, { once: true, amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState<string>(category);

  // All gallery images
  const allImages: GalleryImage[] = [
    // Logistics images
    { src: "/images/hprImg/1.jpg", alt: "HPR Team", title: "Logistics Operations", category: "company" },
    { src: "/images/hprImg/2.jpg", alt: "HPR Team", title: "Fleet Management", category: "company" },
    { src: "/images/hprImg/6.jpg", alt: "HPR Team", title: "Warehouse Solutions", category: "company" },
    { src: "/images/hprImg/3.jpg", alt: "HPR Team", title: "Supply Chain", category: "company" },
    { src: "/images/hprImg/4.jpg", alt: "HPR Team", title: "Distribution Network", category: "company" },
    { src: "/images/hprImg/5.jpg", alt: "HPR Team", title: "Global Shipping", category: "company" },
  ];

  const filteredImages = activeCategory === 'all' 
    ? allImages 
    : allImages.filter(image => image.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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

  const categories = ['all', 'company', 'warehouse', 'shipping', 'fleet'];

  return (
    <div className="container mx-auto px-4 pb-16 relative">
      {/* Decorative logistics elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -z-10 blur-3xl opacity-70"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-amber-50 rounded-full -z-10 blur-3xl opacity-60"></div>
      
      {/* Header with logistics icon */}
      <div className="relative mb-16">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-5 rounded-full mb-6 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600">
            Our Gallery
          </h1>
          <div className="h-1 w-24 bg-amber-400 mt-4 rounded-full"></div>
          <p className="text-gray-600 mt-6 text-center max-w-2xl">
            Explore our logistics operations, fleet management, and supply chain solutions through our visual showcase.
          </p>
        </motion.div>
      </div>

      {/* Category filters
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </motion.div> */}

      {/* Gallery grid */}
      <motion.div
        ref={galleryRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4"
      >
        {filteredImages.map((image, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500 bg-white"
          >
            <div className="aspect-w-16 aspect-h-9 overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
            </div>
            
            {/* Category badge */}
            {/* <div className="absolute top-4 right-4">
              <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg">
                {image.category}
              </span>
            </div> */}
            
            {/* Image title overlay */}
            {/* <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
              <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                <h3 className="text-blue-800 text-lg font-semibold">{image.title}</h3>
                <div className="flex items-center mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-sm text-gray-600">View details</span>
                </div>
              </div>
            </div> */}
          </motion.div>
        ))}
      </motion.div>

      {/* Logistics-themed footer element */}
      {/* <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="flex justify-center mt-16"
      >
        <div className="h-0.5 w-16 bg-gray-200 rounded-full"></div>
        <div className="h-0.5 w-16 bg-blue-600 rounded-full mx-2"></div>
        <div className="h-0.5 w-16 bg-gray-200 rounded-full"></div>
      </motion.div> */}
    </div>
  );
};

export default Gallery;