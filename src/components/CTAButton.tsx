
import React from "react";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
}

const CTAButton = ({
  children,
  onClick,
  className,
  size = "md",
  variant = "primary",
  fullWidth = false,
}: CTAButtonProps) => {
  const baseClasses = "rounded-full font-medium transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-eleveCoral focus:ring-opacity-50";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  
  const variantClasses = {
    primary: "bg-eleveCoral text-white hover:bg-opacity-90 shadow-md",
    secondary: "bg-eleveRosa text-gray-800 hover:bg-opacity-90 shadow-sm",
    outline: "bg-transparent border-2 border-eleveCoral text-eleveCoral hover:bg-eleveCoral hover:bg-opacity-10",
  };
  
  return (
    <button
      onClick={onClick}
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        fullWidth ? "w-full" : "",
        className
      )}
    >
      {children}
    </button>
  );
};

export default CTAButton;
