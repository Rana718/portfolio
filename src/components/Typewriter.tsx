"use client";
import { useEffect, useRef, useState } from "react";

export const Typewriter = ({ text }: { text: string }) => {
   const [displayText, setDisplayText] = useState("");
   const indexRef = useRef(0);

   useEffect(() => {
      indexRef.current = 0;
      setDisplayText("");

      const timer = setInterval(() => {
         const i = indexRef.current;
         if (i < text.length) {
            setDisplayText(text.slice(0, i + 1));
            indexRef.current = i + 1;
         } else {
            clearInterval(timer);
         }
      }, 100);

      return () => clearInterval(timer);
   }, [text]);

   return <span>{displayText}</span>;
};
