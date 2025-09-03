import React from 'react';

interface LampEffectProps {
  delay?: number;
  duration?: number;
  className?: string;
  children?: React.ReactNode;
}

const LampEffect: React.FC<LampEffectProps> = ({
  delay = 0.5,
  duration = 0.8,
  className = '',
  children
}) => {
  const style = {
    '--duration': `${duration}s`,
    '--delay': `${delay}s`,
  } as React.CSSProperties;

  return (
    <div
      className={`relative flex h-full flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0 ${className}`}
      style={style}
    >
      <div className="relative isolate z-0 flex w-full flex-1 scale-y-125 -mt-20 items-center justify-center">
        {/* Conic Gradient Left */}
        <div
          className="animate-conic-gradient bg-gradient-conic absolute inset-auto right-1/2 h-56 w-60 overflow-visible from-cyan-500 via-transparent to-transparent text-white opacity-50"
          style={{
            backgroundImage: `conic-gradient(from 70deg at center top, var(--tw-gradient-stops))`,
          }}
        >
          <div className="absolute bottom-0 left-0 z-20 h-40 w-full bg-slate-950 lamp-mask-top" />
          <div className="absolute bottom-0 left-0 z-20 h-full w-40 bg-slate-950 lamp-mask-right" />
        </div>

        {/* Conic Gradient Right */}
        <div
          className="animate-conic-gradient bg-gradient-conic absolute inset-auto left-1/2 h-56 w-60 from-transparent via-transparent to-cyan-500 text-white opacity-50"
          style={{
            backgroundImage: `conic-gradient(from 290deg at center top, var(--tw-gradient-stops))`,
          }}
        >
          <div className="absolute bottom-0 right-0 z-20 h-full w-40 bg-slate-950 lamp-mask-left" />
          <div className="absolute bottom-0 right-0 z-20 h-40 w-full bg-slate-950 lamp-mask-top" />
        </div>

        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl" />

        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />

        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl" />

        {/* Spotlight */}
        <div className="animate-spotlight absolute inset-auto z-30 h-36 w-32 -translate-y-24 rounded-full bg-cyan-400 blur-2xl" />

        {/* Glowing Line */}
        <div className="animate-glowing-line absolute inset-auto z-50 h-0.5 w-60 -translate-y-28 bg-cyan-400" />

        <div className="absolute inset-auto z-40 h-44 w-full translate-y-[-12.5rem] bg-slate-950" />
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};

export default LampEffect;
