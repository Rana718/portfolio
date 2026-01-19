"use client";
import { ReactNode, useState, useRef, useId } from "react";

interface LiquidButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  download?: boolean;
  target?: string;
  rel?: string;
}

export const LiquidButton = ({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  download,
  target,
  rel,
}: LiquidButtonProps) => {
  const [fillHeight, setFillHeight] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const holdIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const uniqueId = useId();

  const handleMouseEnter = () => {
    setIsHovered(true);
    setFillHeight(50);
  };

  const handleMouseDown = () => {
    setIsHovered(true);
    holdIntervalRef.current = setInterval(() => {
      setFillHeight((prev) => Math.min(prev + 5, 100));
    }, 100);
  };

  const handleMouseUp = () => {
    if (holdIntervalRef.current) {
      clearInterval(holdIntervalRef.current);
      holdIntervalRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    if (holdIntervalRef.current) {
      clearInterval(holdIntervalRef.current);
      holdIntervalRef.current = null;
    }
    setIsHovered(false);
    setFillHeight(0);
  };

  const baseClasses = `relative overflow-hidden font-bold transition-all duration-300 inline-flex items-center justify-center ${className}`;

  const variantClasses = variant === "primary"
    ? "bg-foreground text-background"
    : "bg-background text-foreground border-2 border-foreground";

  const content = (
    <>
      <span className="relative z-20 flex items-center justify-center gap-2">
        {children}
      </span>
      <span 
        className="absolute inset-0 z-[15] flex items-center justify-center gap-2 text-white font-bold pointer-events-none overflow-hidden transition-all duration-300"
        style={{
          clipPath: `inset(${100 - fillHeight}% 0 0 0)`,
        }}
      >
        {children}
      </span>
      <div 
        className="absolute inset-0 z-10 transition-all duration-500 ease-out pointer-events-none"
        style={{ 
          transform: `translateY(${100 - fillHeight}%)`,
          opacity: fillHeight > 0 ? 1 : 0,
        }}
      >
        <svg 
          className="absolute inset-0 w-full h-full" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 100"
          style={{ overflow: 'visible' }}
        >
          <path
            fill="#22c55e"
            d="M0,3 C200,15 400,-9 600,3 C800,15 1000,-9 1200,3 L1200,100 L0,100 Z"
          >
            <animate
              attributeName="d"
              dur="2s"
              repeatCount="indefinite"
              values="
                M0,3 C200,15 400,-9 600,3 C800,15 1000,-9 1200,3 L1200,100 L0,100 Z;
                M0,3 C200,-9 400,15 600,3 C800,-9 1000,15 1200,3 L1200,100 L0,100 Z;
                M0,3 C200,15 400,-9 600,3 C800,15 1000,-9 1200,3 L1200,100 L0,100 Z
              "
            />
          </path>
        </svg>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${variantClasses}`}
        download={download}
        target={target}
        rel={rel}
        onMouseEnter={handleMouseEnter}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick} 
      className={`${baseClasses} ${variantClasses}`}
      onMouseEnter={handleMouseEnter}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </button>
  );
};
