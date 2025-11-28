import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Authority } from './components/Authority';
import { Services } from './components/Services';
import { Methodology } from './components/Methodology';
import { VideoGallery } from './components/VideoGallery';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Authority />
        <VideoGallery />
        <Methodology />
        <Services />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;