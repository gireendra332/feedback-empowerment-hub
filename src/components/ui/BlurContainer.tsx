
import React from "react";
import { cn } from "@/lib/utils";

interface BlurContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  intensity?: "light" | "medium" | "heavy";
  border?: boolean;
  hover?: boolean;
  glow?: boolean;
  gradient?: boolean;
  elevation?: "none" | "low" | "medium" | "high";
  accessible?: boolean;
  rounded?: "none" | "small" | "medium" | "large" | "full";
  premium?: boolean; // New prop for premium styling
  glassmorphism?: boolean; // New prop for glass effect
}

const BlurContainer = ({
  children,
  className,
  intensity = "medium",
  border = true,
  hover = false,
  glow = false,
  gradient = false,
  elevation = "none",
  accessible = false,
  rounded = "medium",
  premium = false, // Default to standard styling
  glassmorphism = false,
  ...props
}: BlurContainerProps) => {
  const intensityMap = {
    light: "backdrop-blur-sm bg-white/30 dark:bg-black/20",
    medium: "backdrop-blur-md bg-white/50 dark:bg-black/30",
    heavy: "backdrop-blur-lg bg-white/70 dark:bg-black/40",
  };

  const elevationMap = {
    none: "",
    low: "shadow-sm",
    medium: "shadow-md",
    high: "shadow-lg",
  };
  
  const roundedMap = {
    none: "rounded-none",
    small: "rounded",
    medium: "rounded-xl",
    large: "rounded-2xl",
    full: "rounded-full",
  };

  return (
    <div
      className={cn(
        intensityMap[intensity],
        border && "border border-white/20 dark:border-white/10",
        roundedMap[rounded],
        elevationMap[elevation],
        hover && "transition-all duration-300 hover:bg-white/60 dark:hover:bg-black/50 hover:shadow-md",
        glow && "shadow-[0_0_20px_rgba(255,255,255,0.25)] dark:shadow-[0_0_25px_rgba(255,255,255,0.15)]",
        gradient && "bg-gradient-to-br from-white/60 to-white/40 dark:from-black/40 dark:to-black/20",
        accessible && "border-2 border-primary/20 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/30",
        premium && "border-white/30 dark:border-white/15 backdrop-blur-xl bg-white/60 dark:bg-black/50",
        glassmorphism && "backdrop-filter backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { BlurContainer };
