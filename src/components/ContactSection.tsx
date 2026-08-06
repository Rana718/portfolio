"use client";

import {
   Github,
   Linkedin,
   Mail,
   Send,
   Loader2,
   CheckCircle,
} from "lucide-react";
import { XIcon } from "./ui/XIcon";
import { useState } from "react";
import { useTheme } from "@/lib/theme-provider";
import { motion, AnimatePresence } from "framer-motion";
import { Confetti } from "./Confetti";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassButton } from "./ui/GlassButton";

const socials = [
   { icon: Github, label: "Github", url: "https://github.com/Rana718" },
   {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/rana-dolui-89357728a/",
   },
   { icon: XIcon, label: "X", url: "https://x.com/jack718r" },
   { icon: Mail, label: "Mail", url: "mailto:ranadolui.dev@gmail.com" },
];

function FloatingInput({
   type = "text",
   value,
   onChange,
   placeholder,
   required,
   isTextarea,
}: {
   type?: string;
   value: string;
   onChange: (val: string) => void;
   placeholder: string;
   required?: boolean;
   isTextarea?: boolean;
}) {
   const { theme } = useTheme();
   const accentColor = theme === "dark" ? "#00ff88" : "#FFB800";
   const accentRgb = theme === "dark" ? "0, 255, 136" : "255, 184, 0";
   const [focused, setFocused] = useState(false);
   const isActive = focused || value.length > 0;
   const InputComponent = isTextarea ? "textarea" : "input";

   return (
      <div className="relative">
         <InputComponent
            type={isTextarea ? undefined : type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required={required}
            rows={isTextarea ? 4 : undefined}
            className={`w-full rounded-xl border bg-transparent p-[3.5vw] md:p-3.5 text-[2.8vw] md:text-sm placeholder:text-transparent focus:outline-none transition-all duration-300 ${isTextarea ? "resize-none" : ""}`}
            style={{
               borderColor: focused ? accentColor : "var(--border-primary)",
               boxShadow: focused
                  ? `0 0 10px rgba(${accentRgb}, 0.15)`
                  : "none",
            }}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={placeholder}
         />
         <label
            className="absolute left-3 pointer-events-none text-xs transition-all duration-300 font-mono"
            style={{
               top: isActive ? "-9px" : "50%",
               transform: isActive
                  ? "translateY(0) scale(0.85)"
                  : "translateY(-50%) scale(1)",
               backgroundColor: isActive ? "var(--bg-primary)" : "transparent",
               padding: isActive ? "0 6px" : "0",
               color: focused ? accentColor : "var(--fg-muted)",
            }}
         >
            {placeholder}
            {required && <span className="text-red-400 ml-0.5">*</span>}
         </label>
      </div>
   );
}

export function ContactSection() {
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");
   const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
      "idle",
   );
   const [showConfetti, setShowConfetti] = useState(false);

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
      <Container size="narrow" className="py-[12vw] md:py-20">
         <Confetti
            trigger={showConfetti}
            onComplete={() => setShowConfetti(false)}
         />
         <SectionHeading number="07" title="Contact" />

         <div className="grid grid-cols-1 md:grid-cols-2 gap-[5vw] md:gap-10">
            <div>
               <h3 className="font-black text-[5vw] md:text-xl mb-[2vw] md:mb-3">
                  Send a message
               </h3>
               <p className="text-[3vw] md:text-sm text-fg-secondary leading-relaxed mb-[3vw] md:mb-5">
                  Got an idea in mind? Let's collaborate and build something
                  remarkable.
               </p>
               <div className="flex flex-wrap items-center gap-[2vw] md:gap-3">
                  <GlassButton
                     href="mailto:ranadolui.dev@gmail.com"
                     variant="glass"
                     className="px-[4vw] md:px-5 py-[2vw] md:py-3 text-[2.2vw] md:text-xs normal-case tracking-normal"
                  >
                     <Mail className="h-[4vw] w-[4vw] md:h-4 md:w-4" />
                     ranadolui.dev@gmail.com
                  </GlassButton>
                  <GlassButton
                     href="https://cal.com/rana-dolui-0l0osz/15min?overlayCalendar=true"
                     variant="accent"
                     className="px-[4vw] md:px-5 py-[2vw] md:py-3 text-[2.2vw] md:text-xs"
                  >
                     Book a call →
                  </GlassButton>
               </div>

               <div className="flex gap-[2vw] md:gap-3 mt-[5vw] md:mt-6">
                  {socials.map(({ icon: Icon, label, url }) => (
                     <GlassButton
                        key={label}
                        href={url}
                        icon
                        variant="glass"
                        aria-label={label}
                        className="h-[9vw] w-[9vw] md:h-11 md:w-11"
                     >
                        <Icon size={16} />
                     </GlassButton>
                  ))}
               </div>
            </div>

            <form
               onSubmit={handleSubmit}
               className="flex flex-col gap-[3vw] md:gap-4"
            >
               <FloatingInput
                  type="email"
                  value={email}
                  onChange={setEmail}
                  placeholder="Your email"
                  required
               />
               <FloatingInput
                  value={message}
                  onChange={setMessage}
                  placeholder="Your message"
                  required
                  isTextarea
               />
               <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-border-primary p-[3.5vw] md:p-3.5 font-mono text-[2.5vw] md:text-xs uppercase tracking-widest transition-[border-color,box-shadow] duration-500 hover:border-accent hover:shadow-[0_0_25px_-4px_var(--accent-glow)] disabled:opacity-50"
               >
                  {/* Accent flood, rising on hover — matches GlassButton. */}
                  <span className="pointer-events-none absolute inset-0 translate-y-full bg-accent transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0" />
                  <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-bg-primary">
                     <AnimatePresence mode="wait">
                        {status === "sending" ? (
                           <motion.span
                              key="send"
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -8 }}
                              className="flex items-center gap-2"
                           >
                              <Loader2 className="h-3.5 w-3.5 animate-spin" />{" "}
                              Sending...
                           </motion.span>
                        ) : status === "sent" ? (
                           <motion.span
                              key="done"
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.5 }}
                              className="flex items-center gap-2 text-accent"
                           >
                              <CheckCircle size={16} /> Message Sent!
                           </motion.span>
                        ) : status === "error" ? (
                           <motion.span
                              key="err"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="text-red-500"
                           >
                              Failed. Try again.
                           </motion.span>
                        ) : (
                           <motion.span
                              key="idle"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="flex items-center gap-2"
                           >
                              <Send size={14} /> Send Message
                           </motion.span>
                        )}
                     </AnimatePresence>
                  </span>
               </button>
            </form>
         </div>
      </Container>
   );
}
