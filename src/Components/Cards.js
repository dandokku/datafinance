import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiZap, FiUser, FiDatabase, FiSend } from 'react-icons/fi';
import Ball from '../images/Fractal_Cube_7__R.png';

const Cards = () => {
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 223, 154, 0.1), 0 10px 10px -5px rgba(0, 223, 154, 0.04)"
    }
  };

  const featuredCardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 25px 50px -12px rgba(0, 223, 154, 0.25)"
    }
  };

  const pricingPlans = [
    {
      name: "Starter",
      price: "$50",
      description: "Perfect for individuals getting started",
      features: [
        { icon: <FiDatabase />, text: "100GB Storage" },
        { icon: <FiUser />, text: "1 User" },
        { icon: <FiSend />, text: "Send up to 1GB" },
        { icon: <FiCheck />, text: "Basic Support" }
      ],
      featured: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$149",
      description: "Ideal for growing businesses",
      features: [
        { icon: <FiDatabase />, text: "500GB Storage" },
        { icon: <FiUser />, text: "5 Users" },
        { icon: <FiSend />, text: "Send up to 2GB" },
        { icon: <FiCheck />, text: "Priority Support" },
        { icon: <FiCheck />, text: "Basic Analytics" }
      ],
      featured: true,
      cta: "Get Started"
    },
    {
      name: "Enterprise",
      price: "$250",
      description: "For organizations with advanced needs",
      features: [
        { icon: <FiDatabase />, text: "2TB Storage" },
        { icon: <FiUser />, text: "Unlimited Users" },
        { icon: <FiSend />, text: "Send Unlimited Data" },
        { icon: <FiCheck />, text: "24/7 Support" },
        { icon: <FiCheck />, text: "Advanced Analytics" },
        { icon: <FiCheck />, text: "API Access" }
      ],
      featured: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl"
          >
            Flexible <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00df9a] to-emerald-500">Pricing Plans</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mt-4 text-xl text-gray-600"
          >
            Choose the perfect plan for your business needs
          </motion.p>
        </div>

        <motion.div
          className="grid gap-8 md:grid-cols-3 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={plan.featured ? featuredCardVariants : cardVariants}
              whileHover={plan.featured ? "hover" : "hover"}
              className={`relative flex flex-col p-8 rounded-2xl bg-white border border-gray-200 ${
                plan.featured ? "ring-2 ring-[#00df9a] transform md:scale-105 z-10" : ""
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#00df9a] text-white text-xs font-bold px-4 py-1 rounded-full">
                  POPULAR
                </div>
              )}
              
              <div className="flex justify-center -mt-12 mb-6">
                <div className="p-4 bg-white rounded-full shadow-lg border border-gray-100">
                  <img src={Ball} alt="" className="w-12 h-12" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-center text-gray-600 mb-6">{plan.description}</p>
              
              <div className="flex justify-center items-baseline my-6">
                <span className="text-5xl font-extrabold text-gray-900">{plan.price}</span>
                <span className="ml-1 text-lg font-medium text-gray-500">/month</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="flex-shrink-0 mr-3 text-[#00df9a]">{feature.icon}</span>
                    <span className="text-gray-700">{feature.text}</span>
                  </li>
                ))}
              </ul>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`mt-auto w-full py-3 px-6 rounded-lg font-medium ${
                  plan.featured
                    ? "bg-gradient-to-r from-[#00df9a] to-emerald-500 text-white shadow-lg"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            Need a custom solution?{' '}
            <a href="#contact" className="font-medium text-[#00df9a] hover:underline">
              Contact our team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Cards;