import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { FeaturedMenu } from './components/home/FeaturedMenu';
import { RewardsSection } from './components/home/RewardsSection';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedMenu />
        <RewardsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;