"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

export const HomeView = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-[#022c22] to-[#011c16] overflow-hidden px-6 pb-32">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-size-[24px_24px] mask[-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="absolute top-0 z-0 h-screen w-screen bg-transparent bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.15),rgba(255,255,255,0))]" />

      <div className="relative z-10 text-center max-w-3xl space-y-8">

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#064e3b]/50 border border-[#34d399]/20 text-[#34d399] rounded-full text-sm font-medium backdrop-blur-md shadow-[0_0_15px_-3px_rgba(16,185,129,0.3)]">
          <Sparkles className="h-4 w-4 fill-current" />
          <span>AI SaaS Platform</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-2xl">
          Build with{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#34d399] to-[#22d3ee] animate-pulse filter drop-shadow-[0_0_20px_rgba(52,211,153,0.5)]">
            AI
          </span>{" "}
          Faster
        </h1>

        <p className="text-emerald-100/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
          Your all-in-one platform for AI-powered features — chat, agents, transcripts,
          and automation. Start building smarter tools today.
        </p>

        <div className="flex items-center justify-center gap-4 pt-6">
          <Link href="/agents">
            <Button 
                size="lg" 
                className="gap-2 h-12 px-8 text-base rounded-full bg-white text-[#064e3b] font-semibold hover:bg-[#ecfdf5] transition-all hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)]"
            >
              Get Started <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};