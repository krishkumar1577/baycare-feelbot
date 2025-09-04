import React, { useState } from "react";


interface CryptoCardProps {
  title: string;
  value: string;
  currency?: string;
  percentChange: number;
  changeLabel: string;
  onClose?: () => void;
  width?: number;
  height?: number;
}

const CryptoCard: React.FC<CryptoCardProps> = ({
  title,
  value,
  currency = "USD",
  percentChange,
  changeLabel,
  onClose,
  width = 400,
  height = 300,
}) => {
  const isPositive = percentChange >= 0;

  const lastPurchase = {
    date: "Jul 12, 2024 at 5:08 PM",
    price: "3,247.04 USD",
  };

  const [showTooltip, setShowTooltip] = useState(false);

  // Calculate responsive scaling
  const baseWidth = 400;
  const baseHeight = 300;
  const scale = Math.min(width / baseWidth, height / baseHeight);
  const padding = Math.max(20, 28 * scale);
  const titleSize = Math.max(16, 20 * scale);
  const valueSize = Math.max(32, 56 * scale);
  const iconSize = Math.max(20, 28 * scale);
  const percentSize = Math.max(12, 14 * scale);

  // Tooltip positioning
  const tooltipX = width * 0.7;
  const tooltipY = height * 0.6;

  return (
    <div
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20 backdrop-blur-xl border border-white/10"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {/* Background Chart */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        viewBox="0 0 400 300"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.4" />
            <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        
        <path
          d="M0,250 Q100,200 200,180 T400,160 L400,300 L0,300 Z"
          fill="url(#chartGradient)"
        />
        
        <path
          d="M0,250 Q100,200 200,180 T400,160"
          stroke="rgb(168, 85, 247)"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
      </svg>

      {/* Close Button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute rounded-full bg-black/30 hover:bg-black/40 transition-colors flex items-center justify-center z-10 backdrop-blur-sm"
          style={{
            top: `${padding * 0.7}px`,
            right: `${padding * 0.7}px`,
            width: `${Math.max(24, 36 * scale)}px`,
            height: `${Math.max(24, 36 * scale)}px`
          }}
          aria-label="Close"
        >
          <svg width={Math.max(12, 20 * scale)} height={Math.max(12, 20 * scale)} viewBox="0 0 24 24" fill="none" className="text-white/70">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      )}

      {/* Header */}
      <div className="relative z-10" style={{ padding: `${padding}px ${padding}px ${padding * 0.6}px` }}>
        <h3 
          className="text-white/90 font-medium mb-6" 
          style={{ 
            fontSize: `${titleSize}px`,
            marginBottom: `${Math.max(16, 24 * scale)}px`
          }}
        >
          {title}
        </h3>

        <div className="flex items-start justify-between">
          <div className="flex items-baseline" style={{ gap: `${Math.max(8, 12 * scale)}px` }}>
            <span 
              className="font-light text-white tracking-tight" 
              style={{ fontSize: `${valueSize}px` }}
            >
              {value}
            </span>
            {currency === 'ETH' && (
              <div className="text-white/90" style={{ marginBottom: `${Math.max(4, 8 * scale)}px` }}>
                <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L5.5 12.5L12 16L18.5 12.5L12 2Z" fill="currentColor" fillOpacity="0.8"/>
                  <path d="M12 17L5.5 13.5L12 22L18.5 13.5L12 17Z" fill="currentColor" fillOpacity="0.6"/>
                </svg>
              </div>
            )}
          </div>

          <div className="text-right">
            <p 
              className="text-white/70 mb-2" 
              style={{ 
                fontSize: `${Math.max(10, 14 * scale)}px`,
                marginBottom: `${Math.max(4, 8 * scale)}px`
              }}
            >
              {changeLabel}
            </p>
            <div
              className={`inline-flex items-center rounded-full font-medium ${
                isPositive ? "bg-emerald-500/90 text-white" : "bg-red-500/90 text-white"
              }`}
              style={{
                gap: `${Math.max(4, 6 * scale)}px`,
                padding: `${Math.max(4, 8 * scale)}px ${Math.max(8, 16 * scale)}px`,
                fontSize: `${percentSize}px`
              }}
            >
              {Math.abs(percentChange)}%
              {isPositive ? (
                <svg width={Math.max(12, 16 * scale)} height={Math.max(12, 16 * scale)} viewBox="0 0 24 24" fill="none">
                  <path d="M7 14L12 9L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width={Math.max(12, 16 * scale)} height={Math.max(12, 16 * scale)} viewBox="0 0 24 24" fill="none">
                  <path d="M17 10L12 15L7 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Chart Area */}
      <div
        className="relative z-10"
        style={{
          marginTop: `${Math.max(12, 16 * scale)}px`,
          padding: `0 ${padding}px ${padding}px`,
          height: `${Math.max(160, 208 * scale)}px`
        }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {showTooltip && (
          <>
            {/* Interactive point */}
            <div
              className="absolute bg-white rounded-full border-2 border-purple-400 z-20"
              style={{
                left: `${(tooltipX / 400) * 100}%`,
                top: `${(tooltipY / 400) * 100}%`,
                transform: "translate(-50%, -50%)",
                width: `${Math.max(12, 16 * scale)}px`,
                height: `${Math.max(12, 16 * scale)}px`
              }}
            />

            {/* Tooltip */}
            <div
              className="absolute bg-black/90 backdrop-blur-md rounded-2xl border border-white/10 pointer-events-none z-30"
              style={{
                left: `${(tooltipX / 400) * 100}%`,
                top: `${(tooltipY / 400) * 100}%`,
                transform: "translate(-50%, -120%)",
                padding: `${Math.max(12, 16 * scale)}px`,
                minWidth: `${Math.max(180, 240 * scale)}px`
              }}
            >
              <p 
                className="text-white font-medium leading-relaxed"
                style={{ fontSize: `${Math.max(11, 14 * scale)}px` }}
              >
                {lastPurchase.date}
              </p>
              <p 
                className="text-white/90 font-medium"
                style={{ 
                  fontSize: `${Math.max(11, 14 * scale)}px`,
                  marginTop: `${Math.max(6, 8 * scale)}px`
                }}
              >
                Last bought at: {lastPurchase.price}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CryptoCard;
