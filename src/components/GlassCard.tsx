
import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
}

const GlassCard = ({
  children,
  className,
  highlight = false,
}: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass-card p-6 rounded-2xl transition-transform duration-300 hover:transform hover:-translate-y-1",
        highlight ? "border-eleveCoral border-2 soft-shadow" : "soft-shadow",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
