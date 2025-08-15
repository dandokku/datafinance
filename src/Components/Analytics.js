import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Cube from '../images/Fractal_Cube_7__R.png';

const Analytics = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      rotate: 5,
      scale: 1.03,
      transition: { duration: 0.3 }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#00df9a",
      color: "#000000",
      boxShadow: "0 10px 20px rgba(0, 223, 154, 0.3)"
    },
    tap: { scale: 0.98 }
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#00df9a]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#00df9a]/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid items-center gap-12 lg:gap-20 xl:gap-32 grid-cols-1 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Image */}
          <motion.div
            className="relative flex justify-center"
            variants={imageVariants}
            whileHover="hover"
          >
            <div className="absolute -inset-8 bg-gradient-to-r from-[#00df9a]/10 to-emerald-300/10 rounded-3xl transform rotate-6"></div>
            <img
              src={Cube}
              alt="Analytics dashboard interface"
              className="relative z-10 w-full max-w-md rounded-2xl shadow-xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div className="space-y-6" variants={containerVariants}>
            <motion.span
              variants={itemVariants}
              className="inline-block px-4 py-2 text-sm font-semibold tracking-wider text-[#00df9a] uppercase rounded-full bg-[#00df9a]/10"
            >
              Data Analytics Dashboard
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
            >
              <span className="block">Manage Data</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00df9a] to-emerald-500">
                Analytics Centrally
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600"
            >
              Unify all your data sources in one powerful dashboard. Gain real-time insights, track KPIs, and make data-driven decisions with our comprehensive analytics platform designed for modern businesses.
            </motion.p>

            <motion.ul
              variants={containerVariants}
              className="grid gap-3 sm:grid-cols-2"
            >
              {[
                "Real-time data processing",
                "Customizable dashboards",
                "AI-powered insights",
                "Cross-platform integration",
                "Automated reporting",
                "Team collaboration tools"
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start text-gray-700"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 mt-0.5 mr-2 text-[#00df9a]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="px-8 py-3 font-medium text-white bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center"
              >
                Get Started
                <FiArrowRight className="ml-2" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 font-medium text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300"
              >
                Live Demo
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Analytics;