
import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: string;
  animation?: "fade-in" | "zoom-in" | "fade-in-slow";
  id?: string;
}

const AnimatedSection = ({
  children,
  className,
  delay = "0s",
  animation = "fade-in",
  id,
}: AnimatedSectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        `${animation === "fade-in" ? "animate-fade-in" : 
           animation === "zoom-in" ? "animate-zoom-in" : 
           "animate-fade-in-slow"}`,
        className
      )}
      style={{ animationDelay: delay }}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
