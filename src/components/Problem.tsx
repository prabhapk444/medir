import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, ShieldAlert, Layers, PieChart, ArrowRight } from 'lucide-react';

const Problem: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      value: '4.5h',
      label: 'Weekly time waste',
      description: 'Average time spent searching for reliable tools',
    },
    {
      value: '67%',
      label: 'Unverified tools',
      description: 'Medical tools lack proper verification',
    },
    {
      value: '8+',
      label: 'Different platforms',
      description: 'Required to manage daily workflow',
    },
  ];

  const painPoints = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Time Consuming',
      description: 'Endless hours spent searching for and validating medical tools',
    },
    {
      icon: <ShieldAlert className="w-6 h-6" />,
      title: 'Reliability Issues',
      description: 'Uncertainty about tool accuracy and compliance',
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'Fragmented Solutions',
      description: 'Multiple disconnected platforms and inconsistent interfaces',
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: 'Reduced Efficiency',
      description: 'Complex workflows affecting patient care quality',
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary opacity-10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-secondary opacity-10 rounded-full blur-[100px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-6">
            The Current State of{' '}
            <span className="gradient-text">Medical Tools</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Medical professionals face significant challenges with existing tools, leading to inefficiencies and potential risks
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative glass rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative h-full glass rounded-2xl p-6">
                <div className="mb-4 p-3 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 w-fit">
                  <div className="text-gradient">{point.icon}</div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{point.description}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-primary hover:text-secondary transition-colors text-sm font-medium flex items-center"
                >
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;