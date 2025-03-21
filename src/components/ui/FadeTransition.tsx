
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface FadeTransitionProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  show?: boolean;
  direction?: "up" | "down" | "left" | "right" | "none";
}

const FadeTransition = ({
  children,
  className,
  duration = 500,
  delay = 0,
  show = true,
  direction = "up",
}: FadeTransitionProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  const getTransform = () => {
    switch (direction) {
      case "up":
        return "translate-y-4";
      case "down":
        return "-translate-y-4";
      case "left":
        return "translate-x-4";
      case "right":
        return "-translate-x-4";
      case "none":
        return "";
      default:
        return "translate-y-4";
    }
  };

  return (
    <div
      className={cn(
        "transition-all",
        mounted && show ? "opacity-100 transform-none" : `opacity-0 ${getTransform()}`,
        className
      )}
      style={{
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {children}
    </div>
  );
};

export { FadeTransition };
