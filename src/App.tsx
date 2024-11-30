import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Newsletter from './components/Newsletter';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Problem />
        <Solution />
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <Newsletter />
        </div>
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;