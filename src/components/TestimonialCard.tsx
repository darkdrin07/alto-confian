
import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating?: number;
  className?: string;
  avatarUrl?: string;
}

const TestimonialCard = ({
  name,
  text,
  rating = 5,
  className,
  avatarUrl,
}: TestimonialCardProps) => {
  return (
    <div className={cn("bg-white rounded-lg p-4 shadow-sm flex flex-col gap-2", className)}>
      <div className="flex items-center gap-2 mb-2">
        {avatarUrl && (
          <img
            src={avatarUrl}
            alt={name}
            className="w-12 h-12 rounded-full object-cover border-2 border-eleveCoral shadow"
          />
        )}
        <div className="flex items-center gap-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-eleveCoral text-eleveCoral" />
          ))}
        </div>
      </div>
      <p className="text-gray-700 text-sm italic mb-1">{text}</p>
      <p className="text-right text-sm font-medium text-gray-800">{name}</p>
    </div>
  );
};

export default TestimonialCard;
