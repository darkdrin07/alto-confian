
import React from "react";

const BadgeRibbon = ({ children }: { children: React.ReactNode }) => (
  <div className="absolute -top-4 right-4 bg-eleveCoral text-white font-semibold text-xs px-4 py-1 rounded-full shadow-lg z-10 animate-fade-in">
    {children}
  </div>
);

export default BadgeRibbon;
