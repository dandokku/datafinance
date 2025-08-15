import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

function NavBar() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Company", path: "/" },
    { name: "Resources", path: "/" },
    { name: "About", path: "/" },
    { name: "Contact", path: "/" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/90 backdrop-blur-sm py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <a
              href="/"
              className="text-3xl font-bold text-[#00df9a] hover:text-[#00df9a]/90 transition-colors"
            >
              Rev<span className="text-white">lytics</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <ul className="flex space-x-1">
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={item.path}
                    className="px-4 py-2 rounded-lg text-white hover:text-[#00df9a] transition-colors font-medium text-sm lg:text-base"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2 bg-[#00df9a] text-gray-900 rounded-lg font-semibold hover:bg-[#00df9a]/90 transition-colors"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleNav}
            className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00df9a]"
            aria-label="Toggle navigation"
            whileTap={{ scale: 0.9 }}
          >
            {navOpen ? (
              <AiOutlineClose className="w-6 h-6 text-white" />
            ) : (
              <AiOutlineMenu className="w-6 h-6 text-white" />
            )}
          </motion.button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="md:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-40 pt-20"
          >
            <div className="container mx-auto px-4">
              <ul className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={closeNav}
                  >
                    <a
                      href={item.path}
                      className="block px-4 py-3 text-xl text-white hover:text-[#00df9a] transition-colors border-b border-gray-800"
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  onClick={closeNav}
                >
                  <a
                    href="/get-started"
                    className="block mt-6 px-6 py-3 bg-[#00df9a] text-gray-900 rounded-lg text-center font-semibold hover:bg-[#00df9a]/90 transition-colors"
                  >
                    Get Started
                  </a>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default NavBar;
