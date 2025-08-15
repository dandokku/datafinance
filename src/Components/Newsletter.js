import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiCheck } from 'react-icons/fi';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSubscribed(true);
      setEmail('');
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-16 px-4 bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#00df9a]/10 rounded-full filter blur-3xl animate-float1"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#00df9a]/10 rounded-full filter blur-3xl animate-float2"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {subscribed ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-8 bg-white/5 backdrop-blur-sm rounded-xl"
            >
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-[#00df9a]/10 rounded-full">
                  <FiCheck className="w-8 h-8 text-[#00df9a]" />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4">You're subscribed!</h2>
              <p className="text-gray-300 mb-6">
                Thank you for joining our newsletter. We'll send you the best tips and tricks to optimize your workflow.
              </p>
              <button
                onClick={() => setSubscribed(false)}
                className="px-6 py-2 border border-[#00df9a] text-[#00df9a] rounded-lg hover:bg-[#00df9a]/10 transition-colors"
              >
                Back to form
              </button>
            </motion.div>
          ) : (
            <>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Want <span className="text-[#00df9a]">tips & tricks</span> to optimize your workflow?
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Sign up to our newsletter and stay up to date with the latest insights and strategies.
              </p>

              <motion.form 
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto sm:max-w-xl"
                whileHover={{ scale: 1.01 }}
              >
                <motion.div className="flex-1" whileHover={{ scale: 1.02 }}>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-5 py-3 rounded-lg bg-white/5 border border-gray-600 focus:border-[#00df9a] focus:ring-2 focus:ring-[#00df9a]/50 outline-none transition-all text-white placeholder-gray-400"
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-[#00df9a] to-emerald-500 text-gray-900 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
                >
                  {isLoading ? (
                    'Subscribing...'
                  ) : (
                    <>
                      Notify Me <FiSend className="ml-2" />
                    </>
                  )}
                </motion.button>
              </motion.form>

              <motion.p 
                className="mt-6 text-sm text-gray-400 max-w-md mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                We care about the protection of your data. Read our{' '}
                <a
                  href="/privacy-policy"
                  className="text-[#00df9a] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </motion.p>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default Newsletter;