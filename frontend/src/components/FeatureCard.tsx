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
      <div className="relative z-10 flex h-64 flex-col justify-between p-2 md:h-72">
        {/* Top section - Logo, title, subtitle, description */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="relative grid h-16 w-16 place-items-center rounded-full border border-white/15 bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_0_20px_rgba(0,0,0,0.08)] mt-2">
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
          
          <div className="space-y-1">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm text-white/80 font-medium">{subtitle}</p>
          </div>
          
          <p className="text-xs text-white/60 leading-relaxed px-2">
            {title === "Baycare" 
              ? "Get instant medical insights, symptom analysis, and healthcare guidance powered by advanced AI technology."
              : "Receive emotional support, mental health resources, and personalized care for your wellbeing journey."
            }
          </p>
        </div>
        
        {/* Bottom section - Open button */}
        <div className="flex justify-center mt-4">
          <GlassButton hovered={hovered} />
        </div>
      </div>
    </a>
  );
}

function GlassButton({ hovered }: { hovered: boolean }) {
  return (
    <span
      className={[
        "relative inline-flex select-none items-center justify-center rounded-full px-8 py-3 text-sm font-semibold",
        "text-white min-w-[120px]",
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
      <span className="relative z-10 font-medium flex items-center gap-2" style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.5))" }}>
        Open
        <svg 
          width="16" 
          height="12" 
          viewBox="0 0 16 12" 
          fill="none" 
          className="transition-transform duration-200"
          style={{ transform: hovered ? 'translateX(2px)' : 'translateX(0px)' }}
        >
          <path 
            d="M1 6h14m-6-5l5 5-5 5" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </span>
  );
}

export default FeatureCard;
