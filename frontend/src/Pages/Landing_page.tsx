import React, { useState } from "react";

/**
 * Single-file TSX page: hero + two cards
 * Colors used (3 total):
 * - Primary: white (with neon-like glow)
 * - Neutrals: black (bg), white at various opacities
 * - Optional: subtle grayscale only via white alpha (no cyan/pink)
 */

const LandingPage: React.FC = () => {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-black text-white">
      <section
        className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 py-12 md:py-16"
        aria-labelledby="hero-title"
      >
        <HeroTitle />
        <LampGlow />
        <Divider />
        <div className="grid w-full gap-6 sm:grid-cols-2">
          <FeatureCard title="Baycare" subtitle="Healthcare AI" href="#baycare" accent="cyan" />
          <FeatureCard title="Feelbot" subtitle="Emotional Support" href="#feelbot" accent="cyan" />
        </div>
        <SmallNote />
      </section>
    </main>
  );
};

function HeroTitle() {
  return (
    <div className="text-center">
      <h1
        id="hero-title"
        className="text-pretty text-4xl font-extrabold leading-tight tracking-tight md:text-6xl"
        style={{ filter: "drop-shadow(0 0 14px rgba(255,255,255,0.25))" }}
      >
        Your Personal AI
      </h1>
      <p
        className="text-pretty mt-2 text-2xl font-semibold md:text-5xl"
        style={{ color: "white", filter: "drop-shadow(0 0 10px rgba(255,255,255,0.22))" }}
      >
        Healthcare Companion
      </p>
      <p className="mx-auto mt-3 max-w-xl text-balance text-sm text-white/70 md:text-base">
        Two focused assistants to help you stay informed and supported—anytime.
      </p>
    </div>
  );
}

function Divider() {
  return (
    <div
      className="relative mt-4 h-px w-44 rounded-full bg-white/80 md:w-60"
      role="separator"
      aria-label="section divider"
      style={{ boxShadow: "0 0 18px rgba(255,255,255,0.35)" }}
    />
  );
}

function LampGlow() {
  return (
    <div className="relative mt-3 h-20 w-full">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-20 w-72 rounded-full blur-2xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.75), rgba(255,255,255,0.25) 45%, transparent 70%)",
        }}
      />
    </div>
  );
}

type FeatureCardProps = {
  title: string;
  subtitle: string;
  href?: string;
  accent: "cyan" | "pink";
};

function FeatureCard({ title, subtitle, href = "#" }: FeatureCardProps) {
  const [hovered, setHovered] = useState(false);
  const initial = title.charAt(0).toUpperCase();

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={[
        "group relative block overflow-hidden rounded-3xl p-6 backdrop-blur",
        "bg-white/[0.02] border border-white/10 ring-1 ring-white/5",
        "shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-transform duration-200",
        "hover:-translate-y-0.5 hover:shadow-[0_28px_80px_rgba(0,0,0,0.65)]",
        "focus:outline-none focus:ring-2 focus:ring-white/60",
      ].join(" ")}
      aria-label={`${title} – ${subtitle}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(140px 140px at 100% 0%, rgba(255,255,255,0.07), transparent), radial-gradient(180px 180px at 0% 100%, rgba(255,255,255,0.06), transparent)",
        }}
      />
      <div className="relative z-10 flex h-64 flex-col items-center justify-center gap-4 text-center md:h-72">
        <div className="relative grid h-16 w-16 place-items-center rounded-full border border-white/15 bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_0_20px_rgba(0,0,0,0.08)]">
          <span className="text-lg font-semibold" style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.35))" }}>
            {initial}
          </span>
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, rgba(255,255,255,0.25), rgba(255,255,255,0.06) 55%, transparent 70%)",
            }}
          />
        </div>
        <div className="mt-1">
          <h3 className="text-base font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-white/70">{subtitle}</p>
        </div>
        <GlassButton hovered={hovered} />
      </div>
    </a>
  );
}

function GlassButton({ hovered }: { hovered: boolean }) {
  return (
    <span
      className={[
        "relative inline-flex select-none items-center justify-center rounded-full px-5 py-2 text-sm font-semibold",
        "text-white",
        "border border-white/30 bg-white/10",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_6px_22px_rgba(0,0,0,0.6)]",
        "backdrop-blur-md transition-all",
        hovered ? "ring-2 ring-white/60 bg-white/15" : "ring-0",
      ].join(" ")}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.6), rgba(255,255,255,0.15))",
          opacity: 1,
        }}
      />
      <span className="relative z-10 font-medium" style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.5))" }}>
        Open
      </span>
    </span>
  );
}

function SmallNote() {
  return (
    <p className="max-w-2xl text-center text-xs text-white/60">
      This interface is a preview. Always consult certified professionals for medical advice.
    </p>
  );
}

export default LandingPage;