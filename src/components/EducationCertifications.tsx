import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle2, ChevronRight, School } from 'lucide-react';
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from '../data';

export default function EducationCertifications() {
  return (
    <section id="education" className="py-12 bg-slate-50 border-t border-slate-200/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Row layout splits on large devices */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* L: Education Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-md uppercase tracking-wider font-mono">
                Scholastic Journey
              </span>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Academic History</h2>
              <p className="text-xs text-slate-500">Structured foundations inside secondary and high-level engineering institutes.</p>
            </div>

            <div className="space-y-5">
              {EDUCATION_DATA.map((edu, idx) => (
                <div 
                  key={`${edu.degree}-${idx}`}
                  id={`edu-item-${idx}`}
                  className="p-5 bg-white border border-slate-200/60 hover:border-slate-300 rounded-2xl shadow-xs flex gap-4 transition-all duration-200 relative group"
                >
                  <div className="p-2.5 bg-sky-50 text-sky-600 rounded-xl h-fit">
                    <GraduationCap className="w-5 h-5" />
                  </div>

                  <div className="space-y-2 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1.5 pb-2 border-b border-slate-100">
                      <div>
                        <h4 className="font-bold text-sm text-slate-950 group-hover:text-sky-800 transition-colors">{edu.degree}</h4>
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
                          <School className="w-3.5 h-3.5 text-slate-400" />
                          <span>{edu.institution}, {edu.location}</span>
                        </div>
                      </div>

                      <span className="text-[10px] font-mono font-bold text-slate-500 bg-slate-100 border border-slate-200/50 px-2 py-0.5 rounded-full h-fit flex items-center gap-1 whitespace-nowrap self-start">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        {edu.duration}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed pt-1">
                      {edu.details}
                    </p>

                    {/* Score Ribbon layout */}
                    <div className="inline-flex items-center gap-1.5 mt-2 px-2 py-0.5 bg-emerald-50 border border-emerald-100 rounded-md">
                      <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">{edu.scoreLabel}:</span>
                      <span className="text-[11px] font-bold text-emerald-700 font-mono">{edu.score}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* R: Professional Certifications & Extracurriculars */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md uppercase tracking-wider font-mono">
                Credentials
              </span>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Credentials & Certs</h2>
              <p className="text-xs text-slate-500">External specializations verifying dynamic full-stack capabilities.</p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {CERTIFICATIONS_DATA.map((cert, idx) => (
                <div 
                  key={cert.title}
                  id={`cert-item-${idx}`}
                  className="p-4 bg-white hover:bg-slate-50 border border-slate-200/60 rounded-xl shadow-xs transition-colors flex items-center justify-between gap-3 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg group-hover:scale-105 transition-transform">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-slate-900 leading-tight">{cert.title}</h4>
                      <p className="text-[11px] text-slate-400 font-medium">{cert.issuer}</p>
                    </div>
                  </div>

                  <span className="text-[9px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>

            {/* Extracurricular Highlights box */}
            <div className="p-5 bg-gradient-to-br from-indigo-500 to-sky-600 rounded-2xl text-white shadow-md relative overflow-hidden mt-6">
              <div className="absolute right-0 bottom-0 translate-x-4 translate-y-4 opacity-10 pointer-events-none">
                <BookOpen className="w-32 h-32" />
              </div>
              <h3 id="section-additional-info" className="font-bold text-sm tracking-tight mb-2 uppercase tracking-wide font-mono text-sky-100 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-emerald-300" />
                Additional Profile Notes
              </h3>
              <ul className="text-xs space-y-2.5 pl-3 list-disc marker:text-emerald-300 leading-normal opacity-95">
                <li>Active track athlete, participant, and collaborative relay teammate.</li>
                <li>Proven capability in taking initiative as student head and team lead for core academic projects.</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
