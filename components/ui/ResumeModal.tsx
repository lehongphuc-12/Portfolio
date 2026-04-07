import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl: string;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  resumeUrl,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-[850px] h-full max-h-[90vh] bg-slate-900 border border-white/10 rounded-2xl z-[101] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-slate-900/50 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                  <ExternalLink size={20} />
                </div>
                <h3 className="text-white font-bold text-lg hidden sm:block">
                  Resume Preview
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={resumeUrl}
                  download
                  className="p-2 text-slate-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-lg flex items-center gap-2 px-4"
                  title="Download CV"
                >
                  <Download size={18} />
                  <span className="text-sm font-medium">Download</span>
                </a>
                <button
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-lg"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Content / PDF Viewer */}
            <div className="flex-1 bg-slate-800 relative group">
              <iframe
                src={`${resumeUrl}#toolbar=0&view=FitH`}
                className="w-full h-full border-none"
                title="CV Preview"
              />
              
              {/* Fallback Overlay for Mobile / Non-supporting browsers */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none sm:hidden">
                <p className="text-white text-sm font-medium px-6 text-center">
                  If the preview doesn't load, use the download button above.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
