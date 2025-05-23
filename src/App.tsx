import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';
import './index.css';

function App() {
  // Load Google Fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-white dark:bg-black transition-colors duration-300">
        <Header />
        <main>
          <HeroSection />
          
          {/* Placeholder sections - to be expanded in future iterations */}
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          
          <ResumeSection />
          <ContactSection />
        </main>
        
        <footer className="py-6 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Allwin A. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
