import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Github, Copy, Check, Terminal, ExternalLink, Calendar, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Header() {
  const [copiedText, setCopiedText] = useState<'email' | 'phone' | null>(null);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => {
      setCopiedText(null);
    }, 2000);
  };

  return (
    <header className="relative w-full pt-16 pb-12 sm:pt-24 sm:pb-16 overflow-hidden">
      {/* Dynamic background accents */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(2,132,199,0.06),transparent_50%)]" />
      <div className="absolute top-1/4 left-10 -z-10 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-2/3 right-10 -z-10 w-80 h-80 bg-brand-100/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          
          {/* Left Block with Avatar & Description details */}
          <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 flex-1 w-full">
            
            {/* Professional Brand Logo Emblem */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative shrink-0 self-start sm:self-center"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-slate-900 via-slate-850 to-sky-950 border-2 border-slate-800 shadow-lg ring-4 ring-sky-100/50 flex flex-col items-center justify-center text-white select-none relative overflow-hidden group">
                {/* Visual code grid background pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:8px_8px] opacity-60" />
                
                {/* Glowing neon sphere background */}
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-sky-500/20 rounded-full blur-xl group-hover:bg-sky-500/30 transition-all duration-300" />
                
                {/* Initials */}
                <span className="text-3xl sm:text-4xl font-black tracking-tight font-sans text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200">
                  YS
                </span>
                <span className="text-[9px] font-mono font-bold tracking-widest uppercase text-sky-400 mt-1">
                  DEV
                </span>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-1 shadow-xs border border-white">
                <span className="block w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
              </div>
            </motion.div>

            {/* Main Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-1 space-y-4"
            >
              {/* Tag / Status Indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 backdrop-blur-xs border border-sky-100 rounded-full shadow-xs">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <p className="text-xs font-mono font-medium text-slate-600">Available for Entry-Level Roles | Class of 2026</p>
              </div>

              {/* Name and Designation */}
              <h1 id="headline-name" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-none animate-fade-in">
                {PERSONAL_INFO.name}
              </h1>
              
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4">
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-sky-500" />
                  {PERSONAL_INFO.title}
                </h2>
                <span className="hidden sm:inline text-slate-300">|</span>
                <p className="text-lg text-slate-600 font-medium">{PERSONAL_INFO.subTitle}</p>
              </div>

              {/* Location */}
              <p className="flex items-center gap-2 text-sm text-slate-500">
                <MapPin className="w-4 h-4 text-slate-400" />
                {PERSONAL_INFO.location}
              </p>

              {/* Micro-Interaction Contact Row */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {/* Copy Email Button */}
                <div className="relative group">
                  <button
                    id="btn-copy-email"
                    onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                    className="flex items-center gap-2 px-3.5 py-2 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-lg text-sm text-slate-700 font-medium shadow-xs transition-all duration-200 cursor-pointer"
                  >
                    <Mail className="w-4 h-4 text-slate-400 group-hover:text-sky-500 transition-colors" />
                    <span className="sr-only sm:not-sr-only text-xs">{PERSONAL_INFO.email}</span>
                    {copiedText === 'email' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-slate-400 opacity-50 group-hover:opacity-100 transition-opacity" />
                    )}
                  </button>
                  <AnimatePresence>
                    {copiedText === 'email' && (
                      <motion.span 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute left-1/2 -translate-x-1/2 -top-9 px-2 py-1 bg-slate-900 text-white text-xs font-medium rounded shadow-sm whitespace-nowrap"
                      >
                        Copied!
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                {/* Copy Phone Button */}
                <div className="relative group">
                  <button
                    id="btn-copy-phone"
                    onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                    className="flex items-center gap-2 px-3.5 py-2 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-lg text-sm text-slate-700 font-medium shadow-xs transition-all duration-200 cursor-pointer"
                  >
                    <Phone className="w-4 h-4 text-slate-400 group-hover:text-sky-500 transition-colors" />
                    <span className="sr-only sm:not-sr-only text-xs">{PERSONAL_INFO.phone}</span>
                    {copiedText === 'phone' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-slate-400 opacity-50 group-hover:opacity-100 transition-opacity" />
                    )}
                  </button>
                  <AnimatePresence>
                    {copiedText === 'phone' && (
                      <motion.span 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute left-1/2 -translate-x-1/2 -top-9 px-2 py-1 bg-slate-900 text-white text-xs font-medium rounded shadow-sm whitespace-nowrap"
                      >
                        Copied!
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                {/* LinkedIn Link */}
                <a 
                  id="link-linkedin"
                  href={PERSONAL_INFO.linkedInUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 bg-slate-100 hover:bg-sky-50 hover:text-sky-700 border border-transparent hover:border-sky-200 rounded-lg text-sm text-slate-700 font-medium transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4 text-sky-600" />
                  <span className="hidden lg:inline text-xs">{PERSONAL_INFO.linkedIn}</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                {/* GitHub Link */}
                <a 
                  id="link-github"
                  href={PERSONAL_INFO.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 bg-slate-100 hover:bg-slate-900 hover:text-white border border-transparent rounded-lg text-sm text-slate-700 font-medium transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                  <span className="hidden lg:inline text-xs">{PERSONAL_INFO.github}</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Quick Stats Banner (The Balanced Layout Element) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full md:w-80 p-6 bg-white/70 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-md space-y-4"
          >
            <h3 id="aside-key-stats" className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Key Credentials</h3>
            
            <div className="divide-y divide-slate-100 space-y-3">
              <div className="flex items-center justify-between pb-3">
                <span className="text-sm text-slate-500 font-medium">B.E. CGPA</span>
                <span className="text-md font-bold text-slate-950 bg-sky-50 text-sky-700 px-2.5 py-0.5 rounded-full border border-sky-100">7.89 / 10</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-sm text-slate-500 font-medium">Core Stack</span>
                <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md">MERN / Java</span>
              </div>
              <div className="flex items-center justify-between pt-3">
                <span className="text-sm text-slate-500 font-medium">Projects Built</span>
                <span className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  3 AI-Driven / Web
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Objective Section */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 p-5 sm:p-6 bg-gradient-to-r from-sky-50 to-white hover:from-sky-50/70 hover:to-white/80 border border-sky-100 rounded-2xl relative"
        >
          <div className="absolute right-4 top-4 text-sky-200 font-mono text-xs font-bold leading-none select-none tracking-tight">GOAL</div>
          <p className="text-slate-700 leading-relaxed text-md">
            <strong className="text-slate-900 mr-2">Objective:</strong> 
            {PERSONAL_INFO.careerObjective}
          </p>
        </motion.div>
      </div>
    </header>
  );
}
