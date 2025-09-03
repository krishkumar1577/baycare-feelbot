import React, { useState } from 'react';

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
      {/* Canvas Reveal Effect */}
      <div 
        className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        style={{
          background: title === "Baycare" 
            ? "radial-gradient(circle at center, rgba(59, 130, 246, 0.3), rgba(16, 185, 129, 0.2), transparent 70%)"
            : "radial-gradient(circle at center, rgba(236, 72, 153, 0.3), rgba(168, 85, 247, 0.2), transparent 70%)"
        }}
      />
      
      {/* Animated dots effect */}
      <div className={`absolute inset-0 opacity-0 transition-opacity duration-700 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '0s' }} />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white/25 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white/35 rounded-full animate-ping" style={{ animationDelay: '1.5s' }} />
      </div>

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

export default FeatureCard;
