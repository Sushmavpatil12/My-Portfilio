import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Copy, Check, MessageSquare, AlertCircle, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import confetti from 'canvas-confetti';

interface ContactProps {
  onShowToast: (message: string, type: 'success' | 'info' | 'error') => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedSuccess, setSubmittedSuccess] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    onShowToast(`Copied ${personalInfo.email} to clipboard!`, 'success');
    setTimeout(() => setCopied(false), 2500);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }
    if (!formState.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formState.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
    }
    if (!formState.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formState.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      onShowToast('Please fix the highlighted errors before submitting.', 'error');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      
      // Fire celebratory confetti with sage, lavender, and subtle blush pink
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.8 },
        colors: ['#8BA995', '#A4C0AE', '#C7B8E5', '#E9A5BC', '#F8F5EF']
      });

      onShowToast('Opening your email client with pre-filled message...', 'info');

      // Construct mailto link
      const mailtoUrl = `mailto:${encodeURIComponent(personalInfo.email)}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formState.subject}`
      )}&body=${encodeURIComponent(
        `Hi Sushma,\n\nName: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
      )}`;

      window.location.href = mailtoUrl;
    }, 800);
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Communication"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#22332B] text-[#F8F5EF] border-t border-[#344C40] relative overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#8BA995]/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C7B8E5]/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2D4238] border border-[#446253] text-[#A4C0AE] text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <span className="text-[#E9A5BC]">✦</span>
            <span>Say Hello</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8F5EF] tracking-tight">
            Drop Me a Note & <span className="text-[#8BA995] italic font-normal">Let's Connect.</span>
            <span className="text-[#E9A5BC] text-2xl ml-2">💌</span>
          </h2>
          <p className="font-handwriting text-xl sm:text-2xl text-[#A4C0AE] mt-1">
            whether it's about internship opportunities, a cool project idea, or just sharing book & car recommendations!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Social Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Email Card with Copy Button */}
            <div className="bg-[#2D4238] p-6 sm:p-8 rounded-3xl border border-[#446253] shadow-xl flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1E2D25] border border-[#446253] flex items-center justify-center text-[#8BA995]">
                <Mail className="w-6 h-6" />
              </div>

              <div>
                <p className="text-xs uppercase font-bold tracking-wider text-[#8BA995]">Email Address</p>
                <p className="text-sm sm:text-base font-bold text-[#F8F5EF] mt-0.5 break-all">
                  {personalInfo.email}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl bg-[#1E2D25] border border-[#446253] hover:border-[#8BA995] hover:text-white text-[#F8F5EF]/90 transition-colors shadow-sm"
                >
                  {copied ? <Check className="w-4 h-4 text-[#8BA995]" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied' : 'Copy Email'}</span>
                </button>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl bg-[#8BA995] hover:bg-[#A4C0AE] text-[#22332B] transition-colors shadow-sm"
                >
                  <span>Send Email</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Social Channels Card */}
            <div className="bg-[#2D4238] p-6 sm:p-8 rounded-3xl border border-[#446253] shadow-xl flex flex-col gap-4">
              <p className="text-xs uppercase font-bold tracking-wider text-[#8BA995]">Social Profiles</p>
              
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#1E2D25] border border-[#446253] hover:border-[#8BA995] text-[#F8F5EF] hover:text-white transition-colors group font-semibold text-xs"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#8BA995]" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#1E2D25] border border-[#446253] hover:border-[#8BA995] text-[#F8F5EF] hover:text-white transition-colors group font-semibold text-xs"
                >
                  <GithubIcon className="w-4 h-4 text-[#8BA995]" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Availability Note */}
            <div className="p-4 rounded-2xl bg-[#1E2D25] border border-[#446253] flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#8BA995] flex-shrink-0" />
              <p className="text-xs text-[#F8F5EF]/90 font-medium leading-relaxed">
                Currently open to software engineering internships and collaborative projects. Open to on-site and remote opportunities.
              </p>
              <span className="text-[#E9A5BC] text-xs">✦</span>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#2D4238] p-8 sm:p-10 rounded-3xl border border-[#446253] shadow-2xl">
            <h3 className="font-editorial text-2xl font-bold text-[#F8F5EF] mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#8BA995]" />
              <span>Send a Direct Message</span>
            </h3>
            <p className="text-xs text-[#F8F5EF]/75 mb-6">
              Fill in your details below. This form validates your inputs and automatically formats a message for email delivery.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Name & Email Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-[#F8F5EF] mb-1">
                    Your Name <span className="text-[#E9A5BC]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => {
                      setFormState({ ...formState, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="e.g. Aditi Sharma"
                    className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-2xl bg-[#1E2D25] border text-[#F8F5EF] placeholder:text-[#A4C0AE]/50 focus:outline-none focus:bg-[#23342C] transition-all ${
                      errors.name ? 'border-rose-400 focus:ring-1 focus:ring-rose-400' : 'border-[#446253] focus:border-[#8BA995]'
                    }`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-[11px] text-rose-300 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-[#F8F5EF] mb-1">
                    Email Address <span className="text-[#E9A5BC]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => {
                      setFormState({ ...formState, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="e.g. aditi@company.com"
                    className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-2xl bg-[#1E2D25] border text-[#F8F5EF] placeholder:text-[#A4C0AE]/50 focus:outline-none focus:bg-[#23342C] transition-all ${
                      errors.email ? 'border-rose-400 focus:ring-1 focus:ring-rose-400' : 'border-[#446253] focus:border-[#8BA995]'
                    }`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-[11px] text-rose-300 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Subject Input */}
              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-[#F8F5EF] mb-1">
                  Subject <span className="text-[#E9A5BC]">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formState.subject}
                  onChange={(e) => {
                    setFormState({ ...formState, subject: e.target.value });
                    if (errors.subject) setErrors({ ...errors, subject: '' });
                  }}
                  placeholder="e.g. Internship Opportunity / Technical Collaboration"
                  className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-2xl bg-[#1E2D25] border text-[#F8F5EF] placeholder:text-[#A4C0AE]/50 focus:outline-none focus:bg-[#23342C] transition-all ${
                    errors.subject ? 'border-rose-400 focus:ring-1 focus:ring-rose-400' : 'border-[#446253] focus:border-[#8BA995]'
                  }`}
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                />
                {errors.subject && (
                  <p id="subject-error" className="text-[11px] text-rose-300 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              {/* Message Input */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="message" className="block text-xs font-semibold text-[#F8F5EF]">
                    Message <span className="text-[#E9A5BC]">*</span>
                  </label>
                  <span className="text-[10px] text-[#A4C0AE]">
                    {formState.message.length} characters
                  </span>
                </div>
                <textarea
                  id="message"
                  rows={5}
                  value={formState.message}
                  onChange={(e) => {
                    setFormState({ ...formState, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: '' });
                  }}
                  placeholder="Tell me about the role, project, or what you'd like to discuss..."
                  className={`w-full px-4 py-3 text-xs sm:text-sm rounded-2xl bg-[#1E2D25] border text-[#F8F5EF] placeholder:text-[#A4C0AE]/50 focus:outline-none focus:bg-[#23342C] transition-all resize-none ${
                    errors.message ? 'border-rose-400 focus:ring-1 focus:ring-rose-400' : 'border-[#446253] focus:border-[#8BA995]'
                  }`}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-[11px] text-rose-300 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#8BA995] hover:bg-[#A4C0AE] disabled:opacity-70 text-[#22332B] font-bold text-sm rounded-2xl shadow-sm active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[#22332B] border-t-transparent rounded-full animate-spin" />
                    <span>Preparing Email...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {submittedSuccess && (
                <div className="p-3 rounded-2xl bg-[#1E2D25] border border-[#446253] text-xs font-medium text-[#F8F5EF] mt-2">
                  Email composition launched. If your email client didn't open, write directly to <span className="font-bold">{personalInfo.email}</span>.
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
