import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-secondary p-2 flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">MedTools</span>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-secondary blur-md opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="relative px-6 py-2 rounded-xl text-white font-semibold bg-gradient-to-r from-primary to-secondary">
              Join Waitlist
            </div>
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;