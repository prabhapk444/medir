import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Shield, Target, Stethoscope, Microscope, Beaker } from 'lucide-react';

const Solution: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI-Powered Diagnostics',
      description: 'Advanced machine learning algorithms that adapt to your specialty and practice patterns',
      benefits: ['Faster diagnoses', 'Reduced errors', 'Pattern recognition'],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Expert-Verified Tools',
      description: 'Every tool is validated by leading medical professionals in their respective fields',
      benefits: ['Peer-reviewed', 'Evidence-based', 'Regularly updated'],
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Specialty-Specific',
      description: 'Customized toolsets and workflows designed for your medical specialty',
      benefits: ['Tailored interface', 'Relevant features', 'Specialty protocols'],
    },
  ];

  const additionalFeatures = [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: 'Clinical Integration',
    },
    {
      icon: <Microscope className="w-6 h-6" />,
      title: 'Research Tools',
    },
    {
      icon: <Beaker className="w-6 h-6" />,
      title: 'Lab Analytics',
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary opacity-10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary opacity-10 rounded-full blur-[120px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-6">
            Transform Your Practice with{' '}
            <span className="gradient-text">Smart Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience a new era of medical tools designed to enhance your workflow and improve patient care
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative h-full glass rounded-2xl p-8">
                <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 w-fit">
                  <div className="text-gradient">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-4 gradient-text">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary mr-2" />
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl blur-xl" />
          <div className="relative glass rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-6">
              {additionalFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5"
                >
                  <div className="text-primary">{feature.icon}</div>
                  <span className="font-medium text-gray-800">{feature.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;