import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Github, ExternalLink, ArrowRight, Sparkles, Navigation, ShoppingBag } from 'lucide-react';
import { PROJECTS_DATA, Project } from '../data';

export default function ProjectsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'AI/Navigation' | 'Web/MERN'>('All');

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
        
      const matchesCategory = 
        selectedCategory === 'All' || project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="projects" className="py-12 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-md uppercase tracking-wider font-mono">
              Work & Creations
            </div>
            <h2 id="projects-title" className="text-3xl font-bold text-slate-900 tracking-tight">Featured Projects</h2>
            <p className="text-sm text-slate-500">Exploring route optimization algorithms and modern full-stack web platforms.</p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1 bg-slate-100 p-1.5 rounded-xl border border-slate-200/60 text-xs font-medium text-slate-600 self-start">
            <button
              id="filter-proj-all"
              onClick={() => setSelectedCategory('All')}
              className={`px-3 py-1.5 rounded-lg transition-all ${selectedCategory === 'All' ? 'bg-white text-slate-950 font-semibold shadow-xs' : 'hover:text-slate-900'}`}
            >
              All Projects ({PROJECTS_DATA.length})
            </button>
            <button
              id="filter-proj-ai"
              onClick={() => setSelectedCategory('AI/Navigation')}
              className={`px-3 py-1.5 rounded-lg transition-all ${selectedCategory === 'AI/Navigation' ? 'bg-white text-slate-950 font-semibold shadow-xs' : 'hover:text-slate-900'}`}
            >
              AI & Navigation
            </button>
            <button
              id="filter-proj-web"
              onClick={() => setSelectedCategory('Web/MERN')}
              className={`px-3 py-1.5 rounded-lg transition-all ${selectedCategory === 'Web/MERN' ? 'bg-white text-slate-950 font-semibold shadow-xs' : 'hover:text-slate-900'}`}
            >
              Creators & E-Commerce
            </button>
          </div>
        </div>

        {/* Dynamic Search */}
        <div className="relative mb-5 max-w-md">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-400" />
          </span>
          <input
            id="proj-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by title, stack, or feature..."
            className="w-full pl-9 pr-4 py-2.5 bg-slate-50 hover:bg-slate-100/50 focus:bg-white text-sm text-slate-800 placeholder-slate-400 border border-slate-200 focus:border-sky-500 rounded-xl focus:ring-2 focus:ring-sky-100 outline-hidden transition-all"
          />
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.article
                id={`project-card-${project.id}`}
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex flex-col p-6 bg-slate-50/70 hover:bg-white border border-slate-200/60 hover:border-sky-200 rounded-2xl hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              >
                {/* Accent line */}
                <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-sky-400 to-sky-600 opacity-60 group-hover:opacity-100 transition-opacity" />

                {/* Card Icon & Action header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-white rounded-lg border border-slate-200/50 shadow-xs text-sky-600">
                    {project.category === 'AI/Navigation' ? (
                      <Navigation className="w-5 h-5" />
                    ) : (
                      <ShoppingBag className="w-5 h-5" />
                    )}
                  </div>
                  <a
                    id={`project-link-${project.id}`}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md transition-all font-mono"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                </div>

                {/* Titles */}
                <div className="space-y-1 mb-4 flex-1">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors flex items-center gap-1.5">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-sky-600/90 font-mono tracking-tight leading-normal">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description Bullets */}
                <ul className="text-xs text-slate-600 space-y-2 mb-6 leading-relaxed flex-1 list-disc pl-4 marker:text-sky-400">
                  {project.description.map((bullet, bulletIdx) => (
                    <li key={bulletIdx}>{bullet}</li>
                  ))}
                </ul>

                {/* Tech Tags Footer */}
                <div className="pt-4 border-t border-slate-200/60">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        onClick={() => setSearchQuery(tag)}
                        className="text-[10px] font-mono font-medium bg-white hover:bg-sky-50 text-slate-600 hover:text-sky-700 border border-slate-200 hover:border-sky-200 px-2 py-0.5 rounded-md transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>

          {/* Empty Search Result Fallback */}
          {filteredProjects.length === 0 && (
            <div className="col-span-full py-12 flex flex-col items-center justify-center text-center space-y-2">
              <div className="p-3 bg-slate-100 text-slate-400 rounded-full">
                <Search className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-slate-800">No matching projects found</p>
              <p className="text-xs text-slate-400 max-w-xs">Try searching for other popular tags like "MERN", "Java", "Python", or reset the filter.</p>
              <button
                id="btn-clear-search"
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="text-xs text-sky-600 font-semibold hover:underline mt-1"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
