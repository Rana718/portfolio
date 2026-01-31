"use client";
import { Github, Linkedin, Mail, Send, Loader2 } from "lucide-react";
import { SiX } from "react-icons/si";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/lib/theme-provider";

const socials = [
  { icon: Github, label: "Github", url: "https://github.com/Rana718" },
  { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com/in/rana-dolui-89357728a/" },
  { icon: SiX, label: "X", url: "https://x.com/jack718r" },
  { icon: Mail, label: "Mail", url: "mailto:ranadolui.dev@gmail.com" },
];

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const sectionRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;

    setStatus("sending");
    try {
      const res = await fetch("/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      if (res.ok) {
        setStatus("sent");
        setEmail("");
        setMessage("");
        setTimeout(() => setStatus("idle"), 2000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 2000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2000);
    }
  };

  const accentColor = theme === "dark" ? "#00ff88" : "#FFB800";
  const accentRgb = theme === "dark" ? "0, 255, 136" : "255, 184, 0";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 sm:py-32 overflow-hidden"
      id="contact"
    >
      {/* Animated Background - Full width, no edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 40%, rgba(${accentRgb}, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 20%, rgba(${accentRgb}, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse 70% 60% at 70% 80%, rgba(${accentRgb}, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 30% 70%, rgba(${accentRgb}, 0.08) 0%, transparent 50%)
          `,
          animation: "gradient-shift 8s ease-in-out infinite",
        }}
      />

      {/* Second layer with different timing */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 50% 50%, rgba(${accentRgb}, 0.1) 0%, transparent 60%),
            radial-gradient(ellipse 40% 50% at 10% 60%, rgba(${accentRgb}, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 50% 40% at 90% 40%, rgba(${accentRgb}, 0.1) 0%, transparent 50%)
          `,
          animation: "gradient-shift-reverse 10s ease-in-out infinite",
        }}
      />

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: `rgba(${accentRgb}, 0.6)`,
            boxShadow: `0 0 20px 10px rgba(${accentRgb}, 0.3)`,
            left: "20%",
            top: "30%",
            animation: "float-particle 6s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            background: `rgba(${accentRgb}, 0.5)`,
            boxShadow: `0 0 15px 8px rgba(${accentRgb}, 0.25)`,
            left: "70%",
            top: "20%",
            animation: "float-particle 8s ease-in-out 1s infinite",
          }}
        />
        <div
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: `rgba(${accentRgb}, 0.7)`,
            boxShadow: `0 0 12px 6px rgba(${accentRgb}, 0.3)`,
            left: "80%",
            top: "60%",
            animation: "float-particle 7s ease-in-out 2s infinite",
          }}
        />
        <div
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: `rgba(${accentRgb}, 0.4)`,
            boxShadow: `0 0 18px 9px rgba(${accentRgb}, 0.2)`,
            left: "15%",
            top: "70%",
            animation: "float-particle 9s ease-in-out 0.5s infinite",
          }}
        />
        <div
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            background: `rgba(${accentRgb}, 0.5)`,
            boxShadow: `0 0 15px 8px rgba(${accentRgb}, 0.25)`,
            left: "50%",
            top: "80%",
            animation: "float-particle 7s ease-in-out 3s infinite",
          }}
        />
        <div
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: `rgba(${accentRgb}, 0.6)`,
            boxShadow: `0 0 10px 5px rgba(${accentRgb}, 0.3)`,
            left: "40%",
            top: "15%",
            animation: "float-particle 6s ease-in-out 4s infinite",
          }}
        />
      </div>

      {/* Animated lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.3 }}>
        <defs>
          <linearGradient id={`line-gradient-${theme}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor={`rgba(${accentRgb}, 0.5)`} />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <line
          x1="0%" y1="25%" x2="100%" y2="25%"
          stroke={`url(#line-gradient-${theme})`}
          strokeWidth="1"
          style={{ animation: "line-pulse 4s ease-in-out infinite" }}
        />
        <line
          x1="0%" y1="75%" x2="100%" y2="75%"
          stroke={`url(#line-gradient-${theme})`}
          strokeWidth="1"
          style={{ animation: "line-pulse 4s ease-in-out 2s infinite" }}
        />
      </svg>

      {/* Keyframe Styles */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1) translateX(0);
          }
          33% {
            opacity: 0.8;
            transform: scale(1.05) translateX(2%);
          }
          66% {
            opacity: 0.5;
            transform: scale(0.98) translateX(-2%);
          }
        }

        @keyframes gradient-shift-reverse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1) translateY(0);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.03) translateY(-2%);
          }
        }

        @keyframes float-particle {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.6;
          }
          25% {
            transform: translate(20px, -30px);
            opacity: 1;
          }
          50% {
            transform: translate(-10px, -50px);
            opacity: 0.8;
          }
          75% {
            transform: translate(15px, -20px);
            opacity: 0.9;
          }
        }

        @keyframes line-pulse {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.4;
          }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-12 text-center sm:mb-16">
        <h2
          className={`mb-4 text-3xl font-bold sm:text-5xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          CONTACT
        </h2>
        <div
          className={`w-16 md:w-24 h-1 mx-auto mb-6 md:mb-8 rounded-full transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
          style={{
            background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
            boxShadow: `0 0 20px rgba(${accentRgb}, 0.5)`,
          }}
        />
        <p
          className={`mx-auto max-w-2xl text-xs text-foreground/60 sm:text-sm transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Got an idea in mind? Let's collaborate and build something remarkable.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div
          className={`mb-8 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="mb-4 text-base font-bold sm:mb-6 sm:text-lg">
            GET IN TOUCH
          </h2>
          <div className="flex flex-col gap-y-4">
            <div
              className="group flex items-center justify-between p-3 sm:p-4 rounded-2xl border border-foreground/20 transition-all duration-500"
              onMouseEnter={(e) => {
                setIsCardHovered(true);
                e.currentTarget.style.borderColor = `rgba(${accentRgb}, 0.5)`;
                e.currentTarget.style.boxShadow = `0 0 25px rgba(${accentRgb}, 0.2)`;
                e.currentTarget.style.backgroundColor = `rgba(${accentRgb}, 0.05)`;
              }}
              onMouseLeave={(e) => {
                setIsCardHovered(false);
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.boxShadow = "";
                e.currentTarget.style.backgroundColor = "";
              }}
            >
              <div className="flex gap-3 sm:gap-4 items-center">
                <div
                  className="p-2 rounded-xl transition-colors duration-300"
                  style={{ backgroundColor: `rgba(${accentRgb}, 0.1)` }}
                >
                  <Mail
                    className="h-5 w-5 shrink-0 sm:h-6 sm:w-6"
                    style={{ color: accentColor }}
                  />
                </div>
                <div className="min-w-0">
                  <p
                    className="text-xs uppercase font-medium"
                    style={{ color: `rgba(${accentRgb}, 0.7)` }}
                  >
                    EMAIL
                  </p>
                  <p
                    className="truncate text-xs sm:text-sm transition-colors duration-300"
                    style={{ color: isCardHovered ? accentColor : undefined }}
                  >
                    ranadolui.dev@gmail.com
                  </p>
                </div>
              </div>
              {/* Animated arrow on hover */}
              <div className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <span style={{ color: accentColor }}>→</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className={`mb-8 transition-all duration-700 delay-350 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="mb-4 text-base font-bold sm:mb-6 sm:text-lg">
            SEND A MESSAGE
          </h2>
          <div className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 sm:p-4 rounded-2xl border border-foreground/20 bg-transparent text-sm sm:text-base placeholder:text-foreground/40 focus:outline-none transition-all duration-300"
              style={{
                ["--focus-color" as string]: accentColor,
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = accentColor;
                e.currentTarget.style.boxShadow = `0 0 15px rgba(${accentRgb}, 0.2)`;
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.boxShadow = "";
              }}
            />
            <textarea
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full p-3 sm:p-4 rounded-2xl border border-foreground/20 bg-transparent text-sm sm:text-base placeholder:text-foreground/40 focus:outline-none transition-all duration-300 resize-none"
              onFocus={(e) => {
                e.currentTarget.style.borderColor = accentColor;
                e.currentTarget.style.boxShadow = `0 0 15px rgba(${accentRgb}, 0.2)`;
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.boxShadow = "";
              }}
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex items-center justify-center gap-2 w-full p-3 sm:p-4 rounded-2xl border border-foreground/20 font-medium text-sm sm:text-base transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                backgroundColor: status === "sent" ? `rgba(${accentRgb}, 0.2)` : "transparent",
                borderColor: status === "sent" ? accentColor : undefined,
              }}
              onMouseEnter={(e) => {
                if (status !== "sending") {
                  e.currentTarget.style.borderColor = accentColor;
                  e.currentTarget.style.backgroundColor = `rgba(${accentRgb}, 0.1)`;
                  e.currentTarget.style.boxShadow = `0 0 20px rgba(${accentRgb}, 0.3)`;
                }
              }}
              onMouseLeave={(e) => {
                if (status !== "sent") {
                  e.currentTarget.style.borderColor = "";
                  e.currentTarget.style.backgroundColor = "";
                  e.currentTarget.style.boxShadow = "";
                }
              }}
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                  Sending...
                </>
              ) : status === "sent" ? (
                <span style={{ color: accentColor }}>Message Sent!</span>
              ) : status === "error" ? (
                <span className="text-red-500">Failed to send. Try again.</span>
              ) : (
                <>
                  <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                  Send Message
                </>
              )}
            </button>
          </div>
        </form>

        <div
          className={`transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="mb-4 text-base font-bold sm:mb-6 sm:text-lg">
            SOCIAL LINKS
          </h2>
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            {socials.map(({ icon: Icon, label, url }, index) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                key={label}
                href={url}
                className="group flex h-14 w-14 items-center justify-center rounded-full border border-foreground/20 p-3 transition-all duration-300 sm:h-16 sm:w-16 sm:p-4"
                aria-label={label}
                style={{ animationDelay: `${500 + index * 100}ms` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = accentColor;
                  e.currentTarget.style.backgroundColor = `rgba(${accentRgb}, 0.1)`;
                  e.currentTarget.style.boxShadow = `0 0 25px rgba(${accentRgb}, 0.3)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "";
                  e.currentTarget.style.backgroundColor = "";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <Icon
                  className="h-6 w-6 text-foreground/70 transition-colors duration-300 sm:h-7 sm:w-7"
                  style={{ ["--accent" as string]: accentColor }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = accentColor;
                    e.currentTarget.style.filter = `drop-shadow(0 0 8px rgba(${accentRgb}, 0.5))`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "";
                    e.currentTarget.style.filter = "";
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};
