import React from 'react';

const WeeklyHealthRecap: React.FC = () => {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl h-full flex flex-col shadow-lg border border-gray-200 dark:border-gray-800 relative overflow-hidden group">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 group-hover:scale-105" 
        style={{
          backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBGnRzK-O0mi_ccRdWuRJDiylg82JSvz3KqWp0yC4EgN5Jv-X6ozFmBFc_lCS3HAvHcW1CAVt4I6xD8fv1aV7hreIXQmawKjHJnKBWjLpu_x0NyytA85_wdpL_2aCcUNdMY1ZHwceNazqWNoYnqndU7FmKgPURVREXC78jj1aB1MuiLrd8DSk8juac919PO9TKEC9O5l9I1oTul15xNx5K_IL-Zs8DSq5KEyGNf5kRsJIEw3qN6o3rwygHqhw8K0XGvG63_zRtg')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-4 flex flex-col h-full justify-end">
        {/* AI Summary Badge */}
        <div className="absolute top-3 right-3 flex gap-2">
          <span className="bg-black/50 backdrop-blur-md text-white text-[9px] font-bold px-2 py-0.5 rounded border border-white/10 flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-red-500 animate-pulse"></span>
            AI SUMMARY
          </span>
        </div>

        {/* Play Button Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all hover:scale-110">
            <span className="material-icons-round text-white text-2xl ml-0.5">play_arrow</span>
          </button>
        </div>

        {/* Title and Description */}
        <h2 className="text-xl font-semibold text-white mb-1">Your Weekly Health Recap</h2>
        <p className="text-xs text-gray-300 mb-3 line-clamp-2">
          AI-generated video summary of your cardio, sleep patterns, and stress recovery.
        </p>

        {/* Bottom Section */}
        <div className="flex items-center justify-between">
          {/* Avatar Badges */}
          <div className="flex -space-x-1.5">
            <div className="w-7 h-7 rounded-full border-2 border-surface-dark bg-gray-800 flex items-center justify-center text-[9px] text-white font-bold">
              HR
            </div>
            <div className="w-7 h-7 rounded-full border-2 border-surface-dark bg-gray-700 flex items-center justify-center text-[9px] text-white font-bold">
              SL
            </div>
            <div className="w-7 h-7 rounded-full border-2 border-surface-dark bg-gray-600 flex items-center justify-center text-[9px] text-white font-bold">
              +2
            </div>
          </div>

          {/* Duration */}
          <span className="text-xs font-mono text-gray-400">02:14</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-700/50 h-0.5 mt-3 rounded-full overflow-hidden">
          <div className="w-1/3 h-full bg-primary"></div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyHealthRecap;
