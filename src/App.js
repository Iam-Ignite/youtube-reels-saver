import React from 'react';
import Banner from './components/Banner';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Banner />
      <HowItWorks />
      <Features />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
