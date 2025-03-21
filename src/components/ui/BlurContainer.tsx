
import React from "react";
import { cn } from "@/lib/utils";

interface BlurContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  intensity?: "light" | "medium" | "heavy";
  border?: boolean;
  hover?: boolean;
}

const BlurContainer = ({
  children,
  className,
  intensity = "medium",
  border = true,
  hover = false,
  ...props
}: BlurContainerProps) => {
  const intensityMap = {
    light: "backdrop-blur-sm bg-white/30",
    medium: "backdrop-blur-md bg-white/50",
    heavy: "backdrop-blur-lg bg-white/70",
  };

  return (
    <div
      className={cn(
        intensityMap[intensity],
        border && "border border-white/20",
        "rounded-xl shadow-sm",
        hover && "transition-all duration-300 hover:bg-white/60 hover:shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { BlurContainer };
