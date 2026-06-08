import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Check, AlertCircle, Copy, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Robust Front-End validation
    if (!formData.name.trim() || formData.name.length < 2) {
      setErrorMsg('Please enter a valid name (at least 2 characters).');
      setStatus('error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      setErrorMsg('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    if (!formData.subject.trim() || formData.subject.length < 3) {
      setErrorMsg('Please enter a valid subject.');
      setStatus('error');
      return;
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      setErrorMsg('Please write a message of at least 10 characters.');
      setStatus('error');
      return;
    }

    // Interactive Sending Simulation
    setStatus('submitting');
    setTimeout(() => {
      setStatus('submitted');
    }, 1500);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setStatus('idle');
    setErrorMsg('');
  };

  return (
    <section id="contact" className="py-16 bg-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(2,132,199,0.03),transparent_50%)]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        
        {/* Module Header */}
        <div className="space-y-1 mb-12 text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-md uppercase tracking-wider font-mono">
            Get In Touch
          </span>
          <h2 id="contact-title" className="text-3xl font-bold text-slate-900 tracking-tight">Connect with Yuvaraj</h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">Have an entry-level opening, project idea, or academic collaboration query? Send a ping instantly.</p>
        </div>

        {/* Form & Card side-by-side splits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch min-h-[460px]">
          
          {/* L: Quick Contacts panel */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 bg-slate-50 border border-slate-200/80 rounded-2xl relative overflow-hidden">
            <div className="space-y-6">
              <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wider font-mono">Direct Communication Channels</h3>
              
              <div className="space-y-4">
                {/* Email Direct Trigger */}
                <div className="p-4 bg-white border border-slate-200/60 rounded-xl flex items-center justify-between gap-3 group hover:border-slate-300 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-sky-50 text-sky-700 rounded-lg">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">EMAIL ADDRESS</p>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-bold text-slate-800 hover:text-sky-600 hover:underline break-all">
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    id="copy-btn-email-box"
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    className="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-md transition-colors relative"
                    title="Copy Email"
                  >
                    {copiedType === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <AnimatePresence>
                      {copiedType === 'email' && (
                        <motion.span 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute bottom-full right-0 mb-2 px-2 py-0.5 bg-slate-900 text-white text-[10px] rounded"
                        >
                          Copied!
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>

                {/* Telephone box direct line */}
                <div className="p-4 bg-white border border-slate-200/60 rounded-xl flex items-center justify-between gap-3 group hover:border-slate-300 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-sky-50 text-sky-700 rounded-lg">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">TELEPHONE LINE</p>
                      <a href={`tel:${PERSONAL_INFO.phone}`} className="text-sm font-bold text-slate-800 hover:text-sky-600 hover:underline">
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    id="copy-btn-phone-box"
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    className="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-md transition-colors relative"
                    title="Copy Phone"
                  >
                    {copiedType === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <AnimatePresence>
                      {copiedType === 'phone' && (
                        <motion.span 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute bottom-full right-0 mb-2 px-2 py-0.5 bg-slate-900 text-white text-[10px] rounded"
                        >
                          Copied!
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </div>
            </div>

            {/* Standard Response pledge details */}
            <div className="p-4 bg-white/70 border border-slate-200/50 rounded-xl space-y-2 mt-6 lg:mt-0 select-none">
              <div className="flex items-center gap-2 text-slate-800 font-bold text-xs">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                Response Commitment
              </div>
              <p className="text-[11px] text-slate-500 leading-normal">
                Direct resume emails are integrated with active push channels. Rest assured, you will receive replies to verified hiring inquiries within 24 business hours.
              </p>
            </div>
          </div>

          {/* R: Dynamic Contact Form Layout */}
          <div className="lg:col-span-7 p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-sm relative overflow-hidden flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {status !== 'submitted' ? (
                /* Interactive Entry Form Elements */
                <motion.form 
                  id="contact-form-form"
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name input */}
                    <div className="space-y-1">
                      <label htmlFor="contact-name" className="text-xs font-semibold text-slate-700">Full Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 focus:border-sky-500 rounded-lg focus:ring-2 focus:ring-sky-100 outline-hidden transition-colors"
                        disabled={status === 'submitting'}
                      />
                    </div>
                    {/* Email input */}
                    <div className="space-y-1">
                      <label htmlFor="contact-email" className="text-xs font-semibold text-slate-700">Email Address</label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="johndoe@company.com"
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 focus:border-sky-500 rounded-lg focus:ring-2 focus:ring-sky-100 outline-hidden transition-colors"
                        disabled={status === 'submitting'}
                      />
                    </div>
                  </div>

                  {/* Subject input */}
                  <div className="space-y-1">
                    <label htmlFor="contact-subject" className="text-xs font-semibold text-slate-700">Subject</label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Opportunity / Project Collaboration Request"
                      className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 focus:border-sky-500 rounded-lg focus:ring-2 focus:ring-sky-100 outline-hidden transition-colors"
                      disabled={status === 'submitting'}
                    />
                  </div>

                  {/* Message body input */}
                  <div className="space-y-1">
                    <label htmlFor="contact-message" className="text-xs font-semibold text-slate-700">Message Details</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Hi Yuvaraj, we loved your NeuralLink project and want to schedule an entry-level technical discussion..."
                      className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 focus:border-sky-500 rounded-lg focus:ring-2 focus:ring-sky-100 outline-hidden transition-colors resize-none"
                      disabled={status === 'submitting'}
                    />
                  </div>

                  {/* Validation Error Banner alert */}
                  {status === 'error' && errorMsg && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-2.5 p-3 bg-red-50 border border-red-100 rounded-lg text-xs text-red-700"
                    >
                      <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{errorMsg}</span>
                    </motion.div>
                  )}

                  {/* Action submit button trigger */}
                  <button
                    id="contact-btn-submit"
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg text-sm transition-all duration-200 relative overflow-hidden"
                  >
                    {status === 'submitting' ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Encrypting & Forwarding...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message Pitch</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                /* Celebration Success feedback screen */
                <motion.div 
                  id="contact-submitted-box"
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-6 flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100 shadow-sm">
                    <Check className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-1.5 max-w-sm">
                    <h3 className="font-extrabold text-slate-900 text-lg">Thank You, {formData.name}!</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Your response simulation is ready. A dispatch request referencing <strong>"{formData.subject}"</strong> has copy-cached to memory successfully.
                    </p>
                  </div>

                  <div className="p-3.5 bg-slate-50 border border-slate-100 rounded-xl text-left max-w-md text-[11px] text-slate-600 leading-normal flex items-start gap-2 select-none">
                    <ShieldCheck className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                    <span>I have simulated this submission locally. The actual message content resides securely under full logging. I will contact you back using your verified endpoint (<strong>{formData.email}</strong>).</span>
                  </div>

                  <button
                    id="contact-btn-new-msg"
                    onClick={resetForm}
                    className="text-xs text-slate-500 hover:text-slate-900 border border-slate-250 hover:bg-slate-50 px-4 py-1.5 rounded-lg transition-colors font-medium"
                  >
                    Send Another Response
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
