import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Plus, Minus } from 'lucide-react';
import type { FAQ as FAQType } from '../types';

const FAQ: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs: FAQType[] = [
    {
      question: "How does the AI diagnostics system work?",
      answer: "Our AI system analyzes medical data using advanced algorithms trained on verified medical databases. It adapts to your specialty and practice patterns while maintaining strict compliance with medical standards and privacy regulations."
    },
    {
      question: "What security measures are in place to protect patient data?",
      answer: "We implement end-to-end encryption, HIPAA compliance protocols, and regular security audits. All data is stored in secure, certified medical-grade servers with multiple layers of protection."
    },
    {
      question: "Can I customize the tools for my specific medical specialty?",
      answer: "Yes! Our platform offers specialty-specific customization options. You can tailor workflows, templates, and diagnostic tools to match your specialty's unique requirements."
    },
    {
      question: "What kind of support is available?",
      answer: "We provide 24/7 technical support, regular training sessions, and a dedicated customer success team. Early access members receive priority support and direct access to our development team."
    },
    {
      question: "How often are the medical tools updated?",
      answer: "Our tools are continuously updated based on the latest medical research and user feedback. We release major updates monthly and critical updates as needed to ensure compliance with current medical standards."
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our medical tools platform
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl blur-lg group-hover:blur-xl transition-all" />
                  <div className="relative glass rounded-xl p-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold gradient-text">
                        {faq.question}
                      </h3>
                      <div className="ml-4">
                        {openIndex === index ? (
                          <Minus className="w-5 h-5 text-primary" />
                        ) : (
                          <Plus className="w-5 h-5 text-primary" />
                        )}
                      </div>
                    </div>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 text-gray-600"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center text-primary hover:text-secondary transition-colors font-medium"
          >
            Contact our support team
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="ml-2"
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;