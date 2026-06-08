import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Briefcase, CheckCircle, Award, Sparkles, Layers, Code, Database, Hammer, Brain, Cpu, ShieldCheck } from 'lucide-react';
import { SKILLS_DATA, Skill } from '../data';

const DOMAIN_DEFS = {
  languages: { label: 'Programming Languages', color: 'sky', icon: Code },
  web: { label: 'Core Web Stacks', color: 'violet', icon: Layers },
  frameworks: { label: 'Frameworks & Runtimes', color: 'indigo', icon: Cpu },
  databases: { label: 'Data & Persistence', color: 'emerald', icon: Database },
  tools: { label: 'Productivity Tools', color: 'slate', icon: Hammer },
  core: { label: 'Concepts & Systems', color: 'amber', icon: Brain },
};

interface MatchRequirement {
  id: string;
  role: string;
  requiredSkills: string[];
  niceToHave: string[];
  pitch: string;
}

const PRESET_Hiring_ROLES: MatchRequirement[] = [
  {
    id: 'mern-fullstack',
    role: 'Full Stack MERN Developer',
    requiredSkills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript (ES6+)', 'Full Stack Development'],
    niceToHave: ['Git & GitHub', 'HTML5 & CSS3'],
    pitch: 'Yuvaraj is deeply geared for full-stack MERN environments, backed by hands-on MongoDB-to-React integration schemas Built across Smart Traffic AI, NeuralLink, and NeuCommerce.'
  },
  {
    id: 'java-backend',
    role: 'Java Full Stack Developer',
    requiredSkills: ['Java', 'MySQL', 'JDBC', 'Data Structures (DS)', 'Full Stack Development'],
    niceToHave: ['Git & GitHub'],
    pitch: 'With an intensive corporate traineeship at Tap Academy Bangalore focused entirely on backend Java architectures and JDBC database wrappers, Yuvaraj provides rigorous structural code reliability.'
  },
  {
    id: 'ai-python',
    role: 'Entry-Level AI/ML Solutions Developer',
    requiredSkills: ['Python', 'AI/ML Concepts', 'Data Structures (DS)'],
    niceToHave: ['Java', 'Git & GitHub'],
    pitch: 'Equipped with multiple specialty certifications from Udemy in Python Data Science & ML models, Yuvaraj is eager to apply optimization layouts to real-world neural solutions.'
  }
];

export default function SkillsSection() {
  const [selectedDomain, setSelectedDomain] = useState<'All' | 'languages' | 'web' | 'frameworks' | 'databases' | 'tools' | 'core'>('All');
  const [recruiterTab, setRecruiterTab] = useState<'All' | 'Matcher'>('All');
  const [activePresetId, setActivePresetId] = useState<string>('mern-fullstack');

  // Find active matcher presets
  const activePreset = useMemo(() => {
    return PRESET_Hiring_ROLES.find(r => r.id === activePresetId) || PRESET_Hiring_ROLES[0];
  }, [activePresetId]);

  // Handle skill scores
  const scoreMetrics = useMemo(() => {
    const requiredMatched = SKILLS_DATA.filter(s => activePreset.requiredSkills.includes(s.name));
    const niceMatched = SKILLS_DATA.filter(s => activePreset.niceToHave.includes(s.name));
    
    const maxWeight = (activePreset.requiredSkills.length * 15) + (activePreset.niceToHave.length * 7);
    
    // Custom weight calculations based on skill levels
    let currentWeight = 0;
    requiredMatched.forEach(s => {
      if (s.level === 'Proficient') currentWeight += 15;
      else if (s.level === 'Intermediate') currentWeight += 12;
      else currentWeight += 9;
    });
    
    niceMatched.forEach(s => {
      if (s.level === 'Proficient') currentWeight += 7;
      else if (s.level === 'Intermediate') currentWeight += 5;
      else currentWeight += 3;
    });

    const matchScore = Math.min(Math.round((currentWeight / maxWeight) * 100), 100) || 0;

    return {
      matchScore,
      requiredCount: requiredMatched.length,
      requiredTotal: activePreset.requiredSkills.length,
      niceCount: niceMatched.length,
      niceTotal: activePreset.niceToHave.length
    };
  }, [activePreset]);

  return (
    <section id="skills" className="py-12 bg-slate-50 relative border-y border-slate-200/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Module Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-md uppercase tracking-wider font-mono">
              Expertise
            </span>
            <h2 id="skills-title" className="text-3xl font-bold text-slate-900 tracking-tight">Technical Skills</h2>
            <p className="text-sm text-slate-500">Organized matrix of academic competencies and full-stack capabilities.</p>
          </div>

          <div className="flex bg-white p-1 rounded-lg border border-slate-200 shadow-xs self-start text-xs font-medium">
            <button
              id="skills-tab-normal"
              onClick={() => setRecruiterTab('All')}
              className={`px-3.5 py-1.5 rounded-md transition-all ${recruiterTab === 'All' ? 'bg-slate-900 text-white font-semibold' : 'text-slate-600 hover:text-slate-950'}`}
            >
              Browse Skills
            </button>
            <button
              id="skills-tab-matcher"
              onClick={() => setRecruiterTab('Matcher')}
              className={`px-3.5 py-1.5 rounded-md transition-all flex items-center gap-1 ${recruiterTab === 'Matcher' ? 'bg-slate-900 text-white font-semibold' : 'text-slate-600 hover:text-slate-950'}`}
            >
              <Sparkles className="w-3 h-3 text-amber-500 fill-amber-500" />
              Recruiter Skill Matcher
            </button>
          </div>
        </div>

        {recruiterTab === 'All' ? (
          /* Normal Skill Browser Filter & Display List */
          <div className="space-y-6">
            <div className="flex flex-wrap gap-1.5 border-b border-slate-200 pb-4">
              <button
                id="skill-domain-all"
                onClick={() => setSelectedDomain('All')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedDomain === 'All' ? 'bg-sky-500 text-white' : 'bg-white hover:bg-slate-100 text-slate-600'
                }`}
              >
                All Domains
              </button>
              {Object.entries(DOMAIN_DEFS).map(([key, value]) => {
                const isSelected = selectedDomain === key;
                return (
                  <button
                    id={`skill-domain-${key}`}
                    key={key}
                    onClick={() => setSelectedDomain(key as any)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                      isSelected ? 'bg-sky-500 text-white' : 'bg-white hover:bg-slate-100/85 text-slate-600'
                    }`}
                  >
                    <value.icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                    {value.label}
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(DOMAIN_DEFS)
                .filter(([key]) => selectedDomain === 'All' || selectedDomain === key)
                .map(([key, value]) => {
                  const filteredList = SKILLS_DATA.filter(s => s.category === key);
                  if (filteredList.length === 0) return null;

                  return (
                    <div 
                      key={key}
                      id={`skills-group-${key}`}
                      className="p-5 bg-white border border-slate-200/70 rounded-2xl shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
                    >
                      <div className="flex items-center gap-2 mb-4 text-slate-800">
                        <div className="p-1.5 bg-slate-100 rounded-lg text-slate-600">
                          <value.icon className="w-4 h-4" />
                        </div>
                        <h3 className="font-bold text-sm tracking-tight">{value.label}</h3>
                      </div>

                      <div className="space-y-3">
                        {filteredList.map((skill) => (
                          <div 
                            key={skill.name}
                            id={`skill-row-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                            className="flex items-center justify-between group"
                          >
                            <span className="text-xs font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                              {skill.name}
                            </span>
                            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md font-bold tracking-tight ${
                              skill.level === 'Proficient' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' :
                              skill.level === 'Intermediate' ? 'bg-sky-50 text-sky-700 border border-sky-100' :
                              'bg-amber-50 text-amber-700 border border-amber-100'
                            }`}>
                              {skill.level}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ) : (
          /* RECRUITER SKILL MATCHER ENGINE */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Presets Sidebar List */}
            <div className="lg:col-span-4 space-y-3">
              <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">Select Target Vacancy</p>
              {PRESET_Hiring_ROLES.map((preset) => (
                <button
                  id={`preset-btn-${preset.id}`}
                  key={preset.id}
                  onClick={() => setActivePresetId(preset.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start justify-between gap-3 ${
                    activePresetId === preset.id
                      ? 'bg-white border-sky-500 shadow-md ring-2 ring-sky-100'
                      : 'bg-white/80 border-slate-200/60 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900">{preset.role}</h4>
                    <p className="text-[11px] text-slate-500 font-mono">
                      Check match compatibility
                    </p>
                  </div>
                  {activePresetId === preset.id && (
                    <span className="h-4 w-4 rounded-full bg-sky-500 flex items-center justify-center text-white text-[10px] font-bold">✓</span>
                  )}
                </button>
              ))}
            </div>

            {/* Calculations and Pitch Display Panel */}
            <div className="lg:col-span-8 p-6 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col gap-6 relative overflow-hidden">
              <div className="absolute right-4 top-4 text-emerald-400 opacity-20 pointer-events-none">
                <ShieldCheck className="w-24 h-24 stroke-[1]" />
              </div>

              {/* Progress and Score Title Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-extrabold text-slate-900">{activePreset.role}</h3>
                  <p className="text-xs text-slate-500">Live alignment analysis based on active curriculum vitae credentials.</p>
                </div>
                
                <div className="flex flex-col items-center justify-center p-3.5 bg-slate-50 border border-slate-100 rounded-xl min-w-32 self-start sm:self-auto">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">COMPATIBILITY</span>
                  <span className="text-2xl font-black font-mono text-emerald-600">{scoreMetrics.matchScore}%</span>
                  <div className="w-20 h-1.5 bg-slate-200 rounded-full overflow-hidden mt-1 bg-gradient-to-r">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${scoreMetrics.matchScore}%` }}></div>
                  </div>
                </div>
              </div>

              {/* Alignment Pitch */}
              <blockquote className="p-4 bg-slate-50 rounded-xl border-l-4 border-slate-300 text-xs text-slate-600 italic leading-relaxed">
                {activePreset.pitch}
              </blockquote>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {/* Required skill checklist */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">Required Skills ({scoreMetrics.requiredCount}/{scoreMetrics.requiredTotal})</h4>
                  <div className="space-y-1.5 select-none">
                    {activePreset.requiredSkills.map((skName) => {
                      const matchedSkill = SKILLS_DATA.find(s => s.name === skName);
                      return (
                        <div key={skName} className="flex items-center gap-2.5 p-2 bg-slate-50/50 hover:bg-slate-50 border border-slate-100 rounded-lg text-xs font-medium">
                          {matchedSkill ? (
                            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                          ) : (
                            <div className="w-4 h-4 rounded-full border border-slate-300 shrink-0" />
                          )}
                          <span className={`${matchedSkill ? 'text-slate-800 font-semibold' : 'text-slate-400 line-through'}`}>{skName}</span>
                          {matchedSkill && (
                            <span className="ml-auto text-[9px] font-mono bg-sky-50 text-sky-700 px-1.5 py-0.5 rounded-sm">
                              {matchedSkill.level}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Nice to Have checklist */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">Nice-to-Have Stack ({scoreMetrics.niceCount}/{scoreMetrics.niceTotal})</h4>
                  <div className="space-y-1.5 select-none">
                    {activePreset.niceToHave.map((skName) => {
                      const matchedSkill = SKILLS_DATA.find(s => s.name === skName);
                      return (
                        <div key={skName} className="flex items-center gap-2.5 p-2 bg-slate-50/50 hover:bg-slate-50 border border-slate-100 rounded-lg text-xs font-medium">
                          {matchedSkill ? (
                            <CheckCircle className="w-4 h-4 text-sky-500 shrink-0" />
                          ) : (
                            <div className="w-4 h-4 rounded-full border border-slate-300 shrink-0" />
                          )}
                          <span className={`${matchedSkill ? 'text-slate-800 font-semibold' : 'text-slate-400 line-through'}`}>{skName}</span>
                          {matchedSkill && (
                            <span className="ml-auto text-[9px] font-mono bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded-sm">
                              {matchedSkill.level}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
