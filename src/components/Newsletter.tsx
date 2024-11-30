import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Loader, CheckCircle, ArrowRight } from 'lucide-react';
import useNewsletter from '../hooks/useNewsletter';


const Newsletter: React.FC = () => {
  const { email, loading, success, error, subscribe, setEmail } = useNewsletter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    subscribe(email);
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-xl" />
      <div className="relative glass rounded-2xl p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Mail className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold gradient-text">
                Steps into the Medical Director's World
              </h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              Join thousands of medical professionals already transforming their practice with our tools.
            </p>

          
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className="relative w-full group"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-secondary blur-md opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center justify-center bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-xl text-white font-semibold">
                  {loading ? (
                    <Loader className="w-5 h-5 animate-spin" />
                  ) : success ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <>
                      <span>Join Our Waitlist Now!</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </div>
              </motion.button>
              
              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}
              
              {success && (
                <p className="text-green-500 text-sm">Successfully subscribed!</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;