import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#ffffff",
      color: "#000000",
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden py-14">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#00df9a]/10 rounded-full filter blur-3xl animate-float1"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#00df9a]/10 rounded-full filter blur-3xl animate-float2"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-[#00df9a]/10 rounded-full filter blur-3xl animate-float3"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 mx-auto max-w-7xl">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="inline-block px-4 py-2 mb-6 text-sm font-semibold tracking-wider text-[#00df9a] uppercase rounded-full bg-[#00df9a]/10"
          >
            Growing With Data Analytics
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            <span className="block">Grow With</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00df9a] to-emerald-300">
              Data Intelligence
            </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto mb-8"
          >
            <p className="text-xl font-medium text-gray-300 sm:text-2xl">
              Fast, flexible financing solutions for{" "}
              <span className="font-semibold text-white">BTB</span>,{" "}
              <span className="font-semibold text-white">BTC</span>, and{" "}
              <span className="font-semibold text-white">SaaS</span> platforms
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto mb-10 text-lg text-gray-400"
          >
            Monitor your data analytics to increase revenue and optimize your
            business performance across all platforms.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="flex items-center justify-center px-8 py-4 text-base font-medium text-black bg-[#00df9a] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
              <FiArrowRight className="ml-2" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-gray-600 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Stats section */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 gap-8 mt-16 sm:grid-cols-4 max-w-4xl mx-auto"
          >
            {[
              { value: "10K+", label: "Businesses" },
              { value: "95%", label: "Satisfaction" },
              { value: "24/7", label: "Support" },
              { value: "3x", label: "Growth" }
            ].map((stat, index) => (
              <div key={index} className="p-4 rounded-lg bg-gray-800/30 backdrop-blur-sm">
                <p className="text-3xl font-bold text-[#00df9a]">{stat.value}</p>
                <p className="mt-2 text-sm text-gray-300 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400"
      >
        <div className="flex flex-col items-center">
          <span className="block mb-2 text-sm">Scroll Down</span>
          <svg
            className="w-5 h-5 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;