
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

  return (
    <div
      className={cn(
        intensityMap[intensity],
        border && "border border-white/20 dark:border-white/10",
        "rounded-xl",
        elevationMap[elevation],
        hover && "transition-all duration-300 hover:bg-white/60 dark:hover:bg-black/50 hover:shadow-md",
        glow && "shadow-[0_0_15px_rgba(255,255,255,0.15)] dark:shadow-[0_0_20px_rgba(255,255,255,0.08)]",
        gradient && "bg-gradient-to-br from-white/50 to-white/30 dark:from-black/40 dark:to-black/20",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { BlurContainer };
