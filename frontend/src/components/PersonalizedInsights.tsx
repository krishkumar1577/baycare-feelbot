import React, { useState } from 'react';

const PersonalizedInsights: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Preview Card - Compact version inside Modular */}
      <div 
        onClick={() => setIsModalOpen(true)}
        className="bg-zinc-900 rounded-2xl p-4 border border-zinc-700/50 flex flex-col gap-3 h-full relative overflow-hidden group cursor-pointer hover:border-purple-500/50 transition-all"
      >
        {/* Background gradient effect */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        {/* Header */}
        <div className="flex items-center justify-between relative z-10">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <span className="material-icons-round text-purple-500 text-lg">auto_awesome</span>
            Personalized Insights
          </h3>
          <span className="px-2 py-0.5 bg-purple-500/10 text-purple-400 text-[9px] font-bold rounded border border-purple-500/20 uppercase tracking-wider">
            AI
          </span>
        </div>

        {/* Chart Preview - Compact */}
        <div className="h-58 w-full relative z-10 mb-3">
          <svg
            className="w-full h-full overflow-visible"
            preserveAspectRatio="none"
            viewBox="0 0 100 50"
          >
            {/* Grid lines */}
            <line stroke="#374151" strokeDasharray="2 2" strokeWidth="0.5" x1="0" x2="100" y1="50" y2="50" />
            <line stroke="#374151" strokeDasharray="2 2" strokeWidth="0.5" x1="0" x2="100" y1="25" y2="25" />
            
            {/* Gradient definition */}
            <defs>
              <linearGradient id="chartGradientPreview" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
              </linearGradient>
            </defs>
            
            {/* Area fill */}
            <path d="M0,40 C20,35 40,10 50,15 C60,20 80,5 100,20 L100,50 L0,50 Z" fill="url(#chartGradientPreview)" />
            
            {/* Line */}
            <path d="M0,40 C20,35 40,10 50,15 C60,20 80,5 100,20" fill="none" stroke="#8B5CF6" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            
            {/* Peak point marker */}
            <circle className="fill-zinc-900 stroke-purple-500" cx="50" cy="15" r="2" strokeWidth="1.5" />
          </svg>
          
          {/* Time labels */}
          <div className="flex justify-between text-[8px] text-zinc-500 mt-1 uppercase tracking-wider font-mono">
            <span>Now</span>
            <span>12PM</span>
            <span>4PM</span>
            <span>8PM</span>
          </div>
        </div>

        {/* Quick Insights Preview */}
        <div className="space-y-2.5 relative z-10">
          <div className="flex items-center gap-2.5 text-xs text-zinc-300">
            <div className="p-1 rounded-full bg-blue-500/10">
              <span className="material-icons-round text-blue-400" style={{ fontSize: '24px' }}>water_drop</span>
            </div>
            <span>Hydration low</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-zinc-300">
            <div className="p-1 rounded-full bg-green-500/10">
              <span className="material-icons-round text-green-400" style={{ fontSize: '24px' }}>trending_up</span>
            </div>
            <span>Recovery +12%</span>
          </div>
        </div>

        {/* Click hint */}
        <div className="mt-auto text-[9px] text-purple-400/60 flex items-center gap-1 group-hover:text-purple-400 transition-colors relative z-10">
          <span>Click for full details</span>
          <span className="material-icons-round" style={{ fontSize: '10px' }}>open_in_full</span>
        </div>
      </div>

      {/* Modal - Full Details */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors z-20"
            >
              <span className="material-icons-round text-2xl">close</span>
            </button>

            {/* Background gradient effect */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            {/* Header */}
            <div className="flex items-center justify-between relative z-10 mb-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="material-icons-round text-purple-500 text-4xl">auto_awesome</span>
                Personalized Insights
              </h3>
              <span className="px-3 py-1.5 bg-purple-500/10 text-purple-400 text-xs font-bold rounded border border-purple-500/20 uppercase tracking-wider">
                AI Analysis
              </span>
            </div>

            {/* Wellness Forecast */}
            <div className="relative z-10 mb-6">
              <div className="text-xs text-zinc-500 font-medium mb-2 uppercase tracking-wide">Wellness Forecast</div>
              <div className="text-2xl font-semibold text-white leading-tight">
                Peak vitality window expected until <span className="text-purple-400 font-bold">4:00 PM</span>.
              </div>
            </div>

            {/* Chart */}
            <div className="h-40 w-full relative z-10 mb-8">
              <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 50">
                <line stroke="#374151" strokeDasharray="2 2" strokeWidth="0.5" x1="0" x2="100" y1="50" y2="50" />
                <line stroke="#374151" strokeDasharray="2 2" strokeWidth="0.5" x1="0" x2="100" y1="25" y2="25" />
                
                <defs>
                  <linearGradient id="chartGradientModal" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                <path d="M0,40 C20,35 40,10 50,15 C60,20 80,5 100,20 L100,50 L0,50 Z" fill="url(#chartGradientModal)" />
                <path d="M0,40 C20,35 40,10 50,15 C60,20 80,5 100,20" fill="none" stroke="#8B5CF6" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                <circle className="fill-zinc-900 stroke-purple-500" cx="50" cy="15" r="2" strokeWidth="1.5" />
              </svg>
              
              <div className="flex justify-between text-xs text-zinc-500 mt-3 uppercase tracking-wider font-mono">
                <span>Now</span>
                <span>12 PM</span>
                <span>4 PM</span>
                <span>8 PM</span>
              </div>
            </div>

            {/* Insight Cards */}
            <div className="space-y-3 relative z-10 mb-6">
              {/* Hydration Alert */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-zinc-800/60 border border-zinc-700/50 hover:bg-zinc-800 transition-colors">
                <div className="p-2 rounded-full bg-blue-500/10 text-blue-400 shrink-0">
                  <span className="material-icons-round text-lg">water_drop</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-white mb-1">Hydration Alert</div>
                  <div className="text-xs text-zinc-400 leading-relaxed">
                    Hydration low. Drink 500ml to boost focus.
                  </div>
                </div>
              </div>

              {/* Recovery Trend */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-zinc-800/60 border border-zinc-700/50 hover:bg-zinc-800 transition-colors">
                <div className="p-2 rounded-full bg-green-500/10 text-green-400 shrink-0">
                  <span className="material-icons-round text-lg">trending_up</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-white mb-1">Recovery Trend</div>
                  <div className="text-xs text-zinc-400 leading-relaxed">
                    Cardio recovery improved by 12% this week.
                  </div>
                </div>
              </div>

              {/* Sleep Quality */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-zinc-800/60 border border-zinc-700/50 hover:bg-zinc-800 transition-colors">
                <div className="p-2 rounded-full bg-yellow-500/10 text-yellow-400 shrink-0">
                  <span className="material-icons-round text-lg">bedtime</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-white mb-1">Sleep Quality</div>
                  <div className="text-xs text-zinc-400 leading-relaxed">
                    Your sleep score is excellent. Maintain routine for optimal recovery.
                  </div>
                </div>
              </div>

              {/* Heart Rate */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-zinc-800/60 border border-zinc-700/50 hover:bg-zinc-800 transition-colors">
                <div className="p-2 rounded-full bg-red-500/10 text-red-400 shrink-0">
                  <span className="material-icons-round text-lg">favorite</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-white mb-1">Heart Rate Variability</div>
                  <div className="text-xs text-zinc-400 leading-relaxed">
                    HRV trending upward. Sign of good cardiovascular fitness.
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-zinc-800 flex justify-between items-center relative z-10">
              <span className="text-xs text-zinc-500">Updated 2m ago</span>
              <button className="text-purple-400 text-sm font-bold flex items-center gap-2 hover:text-purple-300 transition-colors px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                FULL REPORT <span className="material-icons-round text-base">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PersonalizedInsights;
