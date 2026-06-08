/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import EducationCertifications from './components/EducationCertifications';
import ContactForm from './components/ContactForm';
import { ArrowUp, Terminal, ShieldCheck, HelpCircle } from 'lucide-react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-slate-50 antialiased selection:bg-sky-100 selection:text-sky-900 selection:font-bold">
      
      {/* Sticky Top-Bar Navigation Helper (Compact & Unobtrusive) */}
      <nav id="top-nav" className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-slate-200/60 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
            <span className="p-1 bg-slate-950 text-white rounded-md text-[10px] font-mono leading-none tracking-tight">YS</span>
            <span>Yuvaraj S</span>
          </div>

          <div className="hidden sm:flex items-center gap-6 text-xs font-semibold text-slate-600">
            <a href="#projects" className="hover:text-sky-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-sky-600 transition-colors">Expertise</a>
            <a href="#experience" className="hover:text-sky-600 transition-colors">Experience</a>
            <a href="#education" className="hover:text-sky-600 transition-colors">Education & Certs</a>
            <a href="#contact" className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-md hover:shadow-xs transition-all">Get in Touch</a>
          </div>

          {/* Quick contact mobile route trigger */}
          <a 
            href="#contact" 
            className="sm:hidden px-3 py-1 bg-slate-950 text-white rounded-md text-[11px] font-bold"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Main Assembly Stream */}
      <main className="flex-1 w-full flex flex-col">
        {/* Profile Introduction & Objective */}
        <Header />

        {/* Feature Projects Deck with Filtering capabilities */}
        <ProjectsSection />

        {/* Categorized Skills Matrix with matching capabilities */}
        <SkillsSection />

        {/* Chronological Traineeships & Internships timeline */}
        <ExperienceTimeline />

        {/* Scholastic timelines and verified industrial certifications */}
        <EducationCertifications />

        {/* Interactive email simulator contact forms */}
        <ContactForm />
      </main>

      {/* Elegant minimalist footer */}
      <footer id="footer-main" className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 relative z-10 selection:bg-slate-700 selection:text-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <Terminal className="w-5 h-5 text-sky-500" />
              <span className="text-white font-extrabold text-md tracking-tight">YUVARAJ S</span>
              <span className="text-xs text-slate-600">|</span>
              <span className="text-xs text-slate-400">Class of 2026 Portfolio</span>
            </div>

            {/* Quick footer navigators */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-400">
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#skills" className="hover:text-white transition-colors">Expertise</a>
              <a href="#experience" className="hover:text-white transition-colors">Experience</a>
              <a href="#education" className="hover:text-white transition-colors">Education</a>
              <a href="#contact" className="hover:text-white transition-colors">Connect</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] text-slate-500">
            <p>© {new Date().getFullYear()} Yuvaraj S. All rights reserved.</p>
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Coded using React, Vite, & Tailwind CSS v4</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating back-to-top indicator */}
      {showScrollTop && (
        <button
          id="btn-scroll-top"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-2.5 bg-slate-950 hover:bg-slate-900 text-white rounded-full shadow-lg border border-slate-800/80 hover:scale-105 hover:shadow-sky-100/10 transition-all z-50 text-xs flex items-center justify-center cursor-pointer"
          title="Scroll to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

    </div>
  );
}
