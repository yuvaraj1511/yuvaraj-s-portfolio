import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, Building, ArrowDown } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data';

export default function ExperienceTimeline() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-12 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Module Header */}
        <div className="space-y-1 mb-12 text-left">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-md uppercase tracking-wider font-mono">
            Practical Exposure
          </span>
          <h2 id="experience-title" className="text-3xl font-bold text-slate-900 tracking-tight">Experience & Training</h2>
          <p className="text-sm text-slate-500">Corporate trainee cohorts, dynamic internships, and factory workflow observations.</p>
        </div>

        {/* Chronological Timeline Element */}
        <div className="relative border-l border-slate-200 ml-3 md:ml-6 space-y-10 py-2">
          
          {EXPERIENCE_DATA.map((exp, idx) => (
            <motion.div 
              key={`${exp.organization}-${idx}`}
              id={`experience-item-${idx}`}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative pl-6 md:pl-10 group"
            >
              {/* Timeline Bullet Node with Hover Highlight */}
              <div className={`absolute -left-3 top-1.5 w-6 h-6 rounded-full border-2 bg-white flex items-center justify-center transition-all duration-300 ${
                hoveredIndex === idx
                  ? 'border-sky-500 ring-4 ring-sky-100 scale-110'
                  : 'border-slate-300'
              }`}>
                <Briefcase className={`w-3 h-3 ${hoveredIndex === idx ? 'text-sky-600' : 'text-slate-400'}`} />
              </div>

              {/* Main Timeline Card details */}
              <div className={`p-6 rounded-2xl border transition-all duration-300 ${
                hoveredIndex === idx 
                  ? 'bg-sky-50/20 border-sky-100 shadow-xs' 
                  : 'bg-white border-slate-200/60'
              }`}>
                
                {/* Header Information Row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-800 transition-colors">
                      {exp.role}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-600">
                      <span className="flex items-center gap-1.5 font-semibold text-slate-800">
                        <Building className="w-3.5 h-3.5 text-slate-400" />
                        {exp.organization}
                      </span>
                      <span className="hidden sm:inline text-slate-300">•</span>
                      <span className="flex items-center gap-1 text-xs text-slate-500">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Dates badge */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200 text-slate-700 rounded-full text-xs font-medium font-mono h-fit self-start whitespace-nowrap">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    {exp.duration}
                  </span>
                </div>

                {/* Achievements detail checklist */}
                <ul className="space-y-2 mb-5 list-disc pl-4 marker:text-sky-400">
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx} className="text-xs text-slate-600 leading-relaxed">
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Tag markers */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                  {exp.tags.map(tag => (
                    <span 
                      key={tag}
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border transition-all ${
                        hoveredIndex === idx
                          ? 'bg-sky-50 text-sky-700 border-sky-100'
                          : 'bg-slate-50 text-slate-500 border-slate-200/60'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
