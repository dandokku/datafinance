import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaFacebookSquare, 
  FaInstagramSquare, 
  FaTwitterSquare, 
  FaGithubSquare, 
  FaDribbbleSquare,
  FaLinkedin
} from 'react-icons/fa';

const Footer = () => {
  const footerLinks = [
    {
      title: "Solutions",
      links: [
        { name: "Analytics", url: "/" },
        { name: "Marketing", url: "/" },
        { name: "Commerce", url: "/" },
        { name: "Insights", url: "/" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Pricing", url: "/" },
        { name: "Documentation", url: "/" },
        { name: "Guides", url: "/" },
        { name: "API Status", url: "/" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", url: "/" },
        { name: "Blog", url: "/" },
        { name: "Jobs", url: "/" },
        { name: "Press", url: "/" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Claim", url: "/" },
        { name: "Privacy", url: "/" },
        { name: "Terms", url: "/" },
        { name: "Policy", url: "/" }
      ]
    }
  ];

  const socialIcons = [
    { icon: <FaFacebookSquare />, url: "/" },
    { icon: <FaInstagramSquare />, url: "/" },
    { icon: <FaTwitterSquare />, url: "/" },
    { icon: <FaGithubSquare />, url: "/" },
    { icon: <FaDribbbleSquare />, url: "/" },
    { icon: <FaLinkedin />, url: "/" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <motion.div
          className="grid grid-cols-1 gap-10 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Brand Info */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <a href="/" className="text-3xl font-bold text-[#00df9a] hover:text-[#00df9a]/90 transition-colors">
              Data<span className="text-white">Finance</span>
            </a>
            <p className="text-gray-400">
              Empowering businesses with data-driven financial solutions. We help you unlock insights and drive growth through advanced analytics.
            </p>
            
            {/* Social Links */}
            <motion.div 
              className="flex space-x-4"
              variants={itemVariants}
            >
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00df9a] transition-colors text-2xl"
                  whileHover={{ y: -3 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Footer Links */}
          <motion.div 
            className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-2"
            variants={containerVariants}
          >
            {footerLinks.map((column, index) => (
              <motion.div key={index} variants={itemVariants}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <motion.li 
                      key={linkIndex}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <a
                        href={link.url}
                        className="text-gray-400 hover:text-[#00df9a] transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} DataFinance. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/" onClick={(e) => e.preventDefault()} className="text-sm text-gray-500 hover:text-[#00df9a] transition-colors">
              Privacy Policy
            </a>
            <a href="/" onClick={(e) => e.preventDefault()} className="text-sm text-gray-500 hover:text-[#00df9a] transition-colors">
              Terms of Service
            </a>
            <a href="/" onClick={(e) => e.preventDefault()} className="text-sm text-gray-500 hover:text-[#00df9a] transition-colors">
              Cookies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;