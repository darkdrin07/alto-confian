
import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating?: number;
  className?: string;
}

const TestimonialCard = ({
  name,
  text,
  rating = 5,
  className,
}: TestimonialCardProps) => {
  return (
    <div className={cn("bg-white rounded-lg p-4 shadow-sm", className)}>
      <div className="flex items-center gap-1 mb-2">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-eleveCoral text-eleveCoral" />
        ))}
      </div>
      <p className="text-gray-700 text-sm italic mb-3">{text}</p>
      <p className="text-right text-sm font-medium text-gray-800">{name}</p>
    </div>
  );
};

export default TestimonialCard;
