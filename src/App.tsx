import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { BeyondWork } from './components/BeyondWork';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ToastContainer } from './components/Toast';
import { ToastNotification } from './types';
import confetti from 'canvas-confetti';

export function App() {
  const [toasts, setToasts] = useState<ToastNotification[]>([]);

  const addToast = (message: string, type: 'success' | 'info' | 'warning' | 'error' = 'info') => {
    const newToast: ToastNotification = {
      id: `${Date.now()}-${Math.random()}`,
      type,
      message
    };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleDownloadResume = () => {
    // Trigger celebratory particle effect
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.2 },
      colors: ['#8BA995', '#A4C0AE', '#C7B8E5', '#E9A5BC', '#F8F5EF']
    });

    addToast("Resume download initiated. (Ensure 'resume.pdf' is placed in the public folder).", "success");
    
    const link = document.createElement('a');
    link.href = '#resume';
    link.download = 'Sushma_Patil_Resume.pdf';
    link.click();
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#302F38] flex flex-col font-sans selection:bg-[#8BA995]/30 selection:text-[#22332B]">
      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#344C40] text-white font-semibold rounded-lg shadow-elevation outline-none"
      >
        Skip to main content
      </a>

      {/* Navigation Header */}
      <Navbar onDownloadResume={handleDownloadResume} />

      {/* Main Landmark: Clean, Personal Non-Academic Flow */}
      <main id="main-content" className="flex-grow">
        <Hero
          onDownloadResume={handleDownloadResume}
          onNavigateToProjects={() => scrollToSection('projects')}
          onNavigateToContact={() => scrollToSection('contact')}
          onNavigateToAbout={() => scrollToSection('story')}
        />

        {/* Chapter 01: Personal Scrapbook Journal Spread */}
        <About />

        {/* Chapter 02: Projects with Technical Context */}
        <Projects />

        {/* Chapter 03: Moodboard: Cars, Cricket & Little Joys */}
        <BeyondWork />

        {/* Chapter 04: Contact */}
        <Contact onShowToast={addToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Toast Notifications */}
      <ToastContainer
        toasts={toasts}
        onDismiss={removeToast}
      />
    </div>
  );
}

export default App;
