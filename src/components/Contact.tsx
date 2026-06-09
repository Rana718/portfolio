"use client";
import { Github, Linkedin, Mail, Send, Loader2, CheckCircle } from "lucide-react";
import { SiX } from "react-icons/si";
import { useEffect, useState } from "react";
import { useTheme } from "@/lib/theme-provider";
import { motion, AnimatePresence } from "framer-motion";
import { Confetti } from "./Confetti";

const socials = [
  { icon: Github, label: "Github", url: "https://github.com/Rana718" },
  { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com/in/rana-dolui-89357728a/" },
  { icon: SiX, label: "X", url: "https://x.com/jack718r" },
  { icon: Mail, label: "Mail", url: "mailto:ranadolui.dev@gmail.com" },
];

interface FloatingInputProps {
  type?: string;
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
  required?: boolean;
  isTextarea?: boolean;
  delay?: number;
}

const FloatingInput = ({
  type = "text",
  value,
  onChange,
  placeholder,
  required,
  isTextarea,
  delay = 0,
}: FloatingInputProps) => {
  const { theme } = useTheme();
  const accentColor = theme === "dark" ? "#00ff88" : "#FFB800";
  const accentRgb = theme === "dark" ? "0, 255, 136" : "255, 184, 0";
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  const InputComponent = isTextarea ? "textarea" : "input";

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <InputComponent
        type={isTextarea ? undefined : type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        rows={isTextarea ? 4 : undefined}
        className={`w-full p-3 sm:p-4 rounded-2xl border bg-transparent text-sm sm:text-base placeholder:text-transparent focus:outline-none transition-all duration-300 ${
          isTextarea ? "resize-none" : ""
        }`}
        style={{
          borderColor: focused ? accentColor : "rgba(128,128,128,0.2)",
          boxShadow: focused ? `0 0 15px rgba(${accentRgb}, 0.2)` : "none",
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
      />
      <motion.label
        className="absolute left-4 pointer-events-none text-foreground/40 text-sm transition-all duration-300"
        style={{
          top: isActive ? "-10px" : "50%",
          transform: isActive ? "translateY(0) scale(0.85)" : "translateY(-50%) scale(1)",
          backgroundColor: isActive ? (theme === "dark" ? "#0a0a0a" : "#fffef8") : "transparent",
          padding: isActive ? "0 8px" : "0",
          color: focused ? accentColor : "inherit",
        }}
      >
        {placeholder}
        {required && <span className="text-red-400 ml-0.5">*</span>}
      </motion.label>
    </motion.div>
  );
};

export const Contact = () => {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [showConfetti, setShowConfetti] = useState(false);
  const { theme } = useTheme();

  const accentColor = theme === "dark" ? "#00ff88" : "#FFB800";
  const accentRgb = theme === "dark" ? "0, 255, 136" : "255, 184, 0";

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
        setShowConfetti(true);
        setEmail("");
        setMessage("");
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section className="relative w-full py-20 sm:py-32 overflow-hidden" id="contact">
      <Confetti trigger={showConfetti} onComplete={() => setShowConfetti(false)} />

      {/* Animated Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 40%, rgba(${accentRgb}, 0.03) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 20%, rgba(${accentRgb}, 0.02) 0%, transparent 50%),
            radial-gradient(ellipse 70% 60% at 70% 80%, rgba(${accentRgb}, 0.025) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 30% 70%, rgba(${accentRgb}, 0.02) 0%, transparent 50%)
          `,
          animation: "gradient-shift 8s ease-in-out infinite",
        }}
      />

      {/* Second layer with different timing  */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 50% 50%, rgba(${accentRgb}, 0.02) 0%, transparent 60%),
            radial-gradient(ellipse 40% 50% at 10% 60%, rgba(${accentRgb}, 0.015) 0%, transparent 50%),
            radial-gradient(ellipse 50% 40% at 90% 40%, rgba(${accentRgb}, 0.02) 0%, transparent 50%)
          `,
          animation: "gradient-shift-reverse 10s ease-in-out infinite",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { size: "w-2 h-2", opacity: 0.5, glow: 0.25, left: "20%", top: "30%", duration: "7s", delay: "0s" },
          { size: "w-1.5 h-1.5", opacity: 0.4, glow: 0.2, left: "70%", top: "60%", duration: "9s", delay: "2s" },
          { size: "w-1 h-1", opacity: 0.6, glow: 0.3, left: "45%", top: "75%", duration: "8s", delay: "4s" },
          { size: "w-1.5 h-1.5", opacity: 0.35, glow: 0.2, left: "80%", top: "25%", duration: "11s", delay: "1s" },
          { size: "w-2 h-2", opacity: 0.45, glow: 0.25, left: "10%", top: "65%", duration: "10s", delay: "3s" },
        ].map((p, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${p.size}`}
            style={{
              background: `rgba(${accentRgb}, ${p.opacity})`,
              boxShadow: `0 0 12px 5px rgba(${accentRgb}, ${p.glow})`,
              left: p.left,
              top: p.top,
              animation: `float-particle ${p.duration} ease-in-out ${p.delay} infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <motion.div
          className="mb-12 text-center sm:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-5xl">
            CONTACT
          </h2>
          <motion.div
            className="w-16 md:w-24 h-1 mx-auto mb-6 md:mb-8 rounded-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
              boxShadow: `0 0 20px rgba(${accentRgb}, 0.5)`,
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
          <p className="mx-auto max-w-2xl text-xs text-foreground/60 sm:text-sm">
            Got an idea in mind? Let's collaborate and build something remarkable.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Email Card */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="mb-4 text-base font-bold sm:mb-6 sm:text-lg">
              GET IN TOUCH
            </h2>
            <div className="flex flex-col gap-y-4">
              <motion.div
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
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
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
                <motion.div
                  className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ x: 8 }}
                  whileHover={{ x: 0 }}
                >
                  <span style={{ color: accentColor }}>→</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form with Floating Labels */}
          <motion.form
            onSubmit={handleSubmit}
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2 className="mb-4 text-base font-bold sm:mb-6 sm:text-lg">
              SEND A MESSAGE
            </h2>
            <div className="flex flex-col gap-5">
              <FloatingInput
                type="email"
                value={email}
                onChange={setEmail}
                placeholder="Your email"
                required
                delay={0.1}
              />
              <FloatingInput
                value={message}
                onChange={setMessage}
                placeholder="Your message"
                required
                isTextarea
                delay={0.2}
              />
              <motion.button
                type="submit"
                disabled={status === "sending"}
                className="flex items-center justify-center gap-2 w-full p-3 sm:p-4 rounded-2xl border border-foreground/20 font-medium text-sm sm:text-base transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                style={{
                  backgroundColor: status === "sent" ? `rgba(${accentRgb}, 0.2)` : "transparent",
                  borderColor: status === "sent" ? accentColor : undefined,
                }}
                whileHover={status !== "sending" ? { scale: 1.02 } : {}}
                whileTap={status !== "sending" ? { scale: 0.98 } : {}}
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
                <AnimatePresence mode="wait">
                  {status === "sending" ? (
                    <motion.span
                      key="sending"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2"
                    >
                      <Loader2 className="h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                      Sending...
                    </motion.span>
                  ) : status === "sent" ? (
                    <motion.span
                      key="sent"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      className="flex items-center gap-2"
                      style={{ color: accentColor }}
                    >
                      <CheckCircle className="h-5 w-5" />
                      Message Sent!
                    </motion.span>
                  ) : status === "error" ? (
                    <motion.span
                      key="error"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="text-red-500"
                    >
                      Failed to send. Try again.
                    </motion.span>
                  ) : (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                      Send Message
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </motion.form>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h2 className="mb-4 text-base font-bold sm:mb-6 sm:text-lg">
              SOCIAL LINKS
            </h2>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              {socials.map(({ icon: Icon, label, url }, index) => (
                <motion.a
                  target="_blank"
                  rel="noopener noreferrer"
                  key={label}
                  href={url}
                  className="group flex h-14 w-14 items-center justify-center rounded-full border border-foreground/20 p-3 transition-all duration-300 sm:h-16 sm:w-16 sm:p-4"
                  aria-label={label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.5 + index * 0.1,
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  whileHover={{
                    scale: 1.15,
                    borderColor: accentColor,
                    backgroundColor: `rgba(${accentRgb}, 0.1)`,
                    boxShadow: `0 0 25px rgba(${accentRgb}, 0.3)`,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon
                    className="h-6 w-6 text-foreground/70 transition-colors duration-300 sm:h-7 sm:w-7 group-hover:text-(--accent)"
                    style={{ ["--accent" as string]: accentColor }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
