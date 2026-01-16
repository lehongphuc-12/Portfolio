import React, { useState } from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { GlassCard } from './ui/GlassCard';
import { Send, Mail, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent! (Simulation)");
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <SectionWrapper id="contact" className="pb-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's build something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
              extraordinary.
            </span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-md">
            Whether you have a question, a project proposal, or just want to say hi, I'm always open to discussing new opportunities.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-mono">Email</p>
                <p className="text-white text-lg">hello@dev.io</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-mono">Location</p>
                <p className="text-white text-lg">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        <GlassCard className="p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
              <input
                type="text"
                id="name"
                required
                className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                placeholder="John Doe"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
              <input
                type="email"
                id="email"
                required
                className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                placeholder="john@example.com"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600 resize-none"
                placeholder="Tell me about your project..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>
          </form>
        </GlassCard>
      </div>
    </SectionWrapper>
  );
};