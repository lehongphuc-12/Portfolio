import React, { useState } from "react";
import { SectionWrapper } from "./ui/SectionWrapper";
import { GlassCard } from "./ui/GlassCard";
import { Send, Mail, MapPin, Phone } from "lucide-react";

import { PROFILE } from "../constants";

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "a33ac19c-0e20-4411-a7ee-28d5139310e9",
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `New Contact from ${formState.name} Portfolio`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
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
            Whether you have a question, a project proposal, or just want to say
            hi, I'm always open to discussing new opportunities.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400/50 transition-colors">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-mono">Email</p>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="text-white text-lg hover:text-cyan-400 transition-colors"
                >
                  {PROFILE.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:border-indigo-400/50 transition-colors">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-mono">Location</p>
                <p className="text-white text-lg">{PROFILE.location}</p>
              </div>
            </div>

            {PROFILE.phone && (
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-green-400 group-hover:border-green-400/50 transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-mono">Phone</p>
                  <a
                    href={`tel:${PROFILE.phone}`}
                    className="text-white text-lg hover:text-green-400 transition-colors"
                  >
                    {PROFILE.phone}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <GlassCard className="p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-slate-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                placeholder="John Doe"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-slate-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                placeholder="john@example.com"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-slate-300"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full bg-slate-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600 resize-none"
                placeholder="Tell me about your project..."
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 font-bold rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed ${
                status === "success"
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : "bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white"
              }`}
            >
              {isSubmitting ? (
                "Sending..."
              ) : status === "success" ? (
                "Message Sent Successfully!"
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>

            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                Something went wrong. Please try again or email me directly.
              </p>
            )}

            {status === "success" && (
              <p className="text-green-400 text-sm text-center">
                Thanks! I'll get back to you as soon as possible.
              </p>
            )}
          </form>
        </GlassCard>
      </div>
    </SectionWrapper>
  );
};
