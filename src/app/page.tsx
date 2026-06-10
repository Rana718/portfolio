import { Hero } from "@/components/Hero";
import { BelowFold } from "@/components/BelowFold";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://ranadolui.me/",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <BelowFold />
    </main>
  );
}
