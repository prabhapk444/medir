import React from 'react';
import { motion } from 'framer-motion';

const UserLoop: React.FC = () => {
  const users = [
    { name: 'Dr. Sarah Chen', specialty: 'Cardiology', image: 'https://source.unsplash.com/random/100x100?doctor&sig=1' },
    { name: 'Dr. James Wilson', specialty: 'Neurology', image: 'https://source.unsplash.com/random/100x100?doctor&sig=2' },
    { name: 'Dr. Maria Garcia', specialty: 'Pediatrics', image: 'https://source.unsplash.com/random/100x100?doctor&sig=3' },
    { name: 'Dr. David Kim', specialty: 'Oncology', image: 'https://source.unsplash.com/random/100x100?doctor&sig=4' },
    { name: 'Dr. Emily Brown', specialty: 'Surgery', image: 'https://source.unsplash.com/random/100x100?doctor&sig=5' },
  ];

  return (
    <div className="relative overflow-hidden py-8">
      <div className="flex space-x-8 animate-scroll">
        {[...users, ...users].map((user, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative group flex-none"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl blur-lg group-hover:blur-xl transition-all" />
            <div className="relative glass rounded-xl p-4 flex items-center space-x-4">
              <img
                src={user.image}
                alt={user.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20"
              />
              <div>
                <h3 className="text-sm font-semibold gradient-text">{user.name}</h3>
                <p className="text-xs text-gray-600">{user.specialty}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UserLoop;