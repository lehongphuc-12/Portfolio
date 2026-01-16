import React from "react";

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated Blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px] animate-blob" />
      <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] bg-cyan-600/10 rounded-full blur-[100px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[150px] animate-blob animation-delay-4000" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Radial Gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_80%)]" />
    </div>
  );
};
