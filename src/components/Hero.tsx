import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, ShieldCheck, Stethoscope } from 'lucide-react';
import WaitlistForm from './WaitlistForm';

const Hero: React.FC = () => {
  const features = [
    { icon: <Brain className="w-6 h-6" />, text: 'AI-Powered' },
    { icon: <ShieldCheck className="w-6 h-6" />, text: 'HIPAA Compliant' },
    { icon: <Stethoscope className="w-6 h-6" />, text: 'Specialty Focused' },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center py-20 sm:py-28 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#2B4CBF_0%,rgba(43,76,191,0.1)_100%)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />

      {/* Floating Gradients */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-primary opacity-30 rounded-full blur-[80px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-72 md:h-72 bg-secondary opacity-30 rounded-full blur-[80px] animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center justify-center px-4 py-2 mb-6 rounded-full glass">
              <Sparkles className="w-4 h-4 mr-2 text-primary" />
              <span className="text-sm font-medium text-primary">Next-Gen Medical Tools</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Imagine a World Where Every Medical Tool{' '}
              <span className="gradient-text">Works for You</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
              Access advanced tools, like AI diagnostics and expert-approved resources, all tailored to your medical specialty
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6 sm:mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-2 glass px-4 py-2 rounded-xl"
                >
                  <div className="text-primary">{feature.icon}</div>
                  <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-4 bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg shadow-md">
  <span className="text-sm sm:text-lg font-bold text-gray-700">No credit card required</span>
  <span className="w-1 h-1 bg-gray-700 rounded-full hidden sm:inline-block"></span>
  <span className="text-sm sm:text-lg font-bold text-gray-700">Free for early adopters</span>
</div>


          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl" />
            <div className="relative glass rounded-2xl p-6 sm:p-8">
              <WaitlistForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
