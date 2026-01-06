import React, { useState } from 'react';

interface WeeklyStoryProps {
  isModal?: boolean;
}

const WeeklyStory: React.FC<WeeklyStoryProps> = ({ isModal = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const CardContent = ({ isFullModal = false }: { isFullModal?: boolean }) => (
    <div className={`bg-zinc-900 rounded-2xl ${isFullModal ? 'h-[80vh]' : 'h-full'} flex flex-col border border-zinc-800 relative overflow-hidden`}>
      {/* Header */}
      <div className={`absolute top-0 left-0 right-0 ${isFullModal ? 'p-5 pt-20' : 'p-3 pt-3 pb-4'} z-20 flex justify-between items-start bg-gradient-to-b from-zinc-900 via-zinc-900/95 to-transparent`}>
        <div className="flex-1">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-1 h-1 rounded-full bg-purple-500 animate-pulse"></span>
            <span className={`${isFullModal ? 'text-[10px]' : 'text-[8px]'} font-bold tracking-widest uppercase text-purple-400`}>AI Narrative</span>
          </div>
          <h2 className={`${isFullModal ? 'text-lg' : 'text-sm'} font-bold text-white leading-tight`}>Weekly Story</h2>
        </div>
        <div className="flex gap-0.5 shrink-0">
          <button className={`${isFullModal ? 'w-7 h-7' : 'w-5 h-5'} flex items-center justify-center rounded-full bg-zinc-800/80 text-zinc-500 hover:text-green-400 transition-colors`}>
            <span className={`material-icons-round ${isFullModal ? 'text-sm' : 'text-[18px]'}`}>pause</span>
          </button>
          <button className={`${isFullModal ? 'w-7 h-7' : 'w-5 h-5'} flex items-center justify-center rounded-full bg-zinc-800/80 text-zinc-500 hover:text-green-400 transition-colors`}>
            <span className={`material-icons-round ${isFullModal ? 'text-sm' : 'text-[18px]'}`}>refresh</span>
          </button>
        </div>
      </div>

      {/* Timeline Content */}
      <div className={`overflow-y-auto h-full ${isFullModal ? 'pt-20 pb-5 px-5' : 'pt-12 pb-3 px-3 mt-[25px]'} scroll-smooth relative z-10 scrollbar-hide`}>
        <div className={`absolute ${isFullModal ? 'left-[21px] top-20 bottom-5' : 'left-[17px] top-14 bottom-3'} w-[1px] bg-zinc-800`}></div>
        <div className={`${isFullModal ? 'space-y-8' : 'space-y-4'} pb-4`}>
          {/* Event 1 - Cardio Peak */}
          <div className={`${isFullModal ? 'pl-8' : 'pl-5'} relative group cursor-pointer`}>
            <div className={`absolute left-0 top-1 ${isFullModal ? 'w-2.5 h-2.5' : 'w-2 h-2'} rounded-full bg-green-400 ring-2 ring-zinc-900 z-10 shadow-[0_0_8px_rgba(16,185,129,0.5)]`}></div>
            <div className="transition-all duration-300">
              <div className="flex justify-between items-baseline mb-0.5">
                <div className={`${isFullModal ? 'text-[10px]' : 'text-[9px]'} font-mono text-zinc-500 uppercase tracking-wider`}>Mon • Cardio Peak</div>
                <span className={`${isFullModal ? 'text-[10px]' : 'text-[9px]'} text-green-400 font-bold`}>+12%</span>
              </div>
              <p className={`${isFullModal ? 'text-sm' : 'text-xs'} font-medium text-white leading-snug mb-2`}>
                You started strong. <span className="text-green-400 font-semibold">Zone 4</span> exceeded goal.
              </p>
              <div className={`${isFullModal ? 'h-16' : 'h-12'} w-full bg-zinc-800/50 rounded-lg border border-zinc-700 p-1.5 relative overflow-hidden group-hover:border-green-400/30 transition-colors`}>
                <div className="flex items-end justify-between h-full gap-0.5 opacity-80">
                  <div className="w-1 bg-green-400/20 h-1 rounded-sm"></div>
                  <div className="w-1 bg-green-400/30 h-3 rounded-sm"></div>
                  <div className="w-1 bg-green-400/40 h-2 rounded-sm"></div>
                  <div className="w-1 bg-green-400/50 h-4 rounded-sm"></div>
                  <div className="w-1 bg-green-400/80 h-7 rounded-sm"></div>
                  <div className="w-1 bg-green-400 h-9 rounded-sm animate-pulse"></div>
                  <div className="w-1 bg-green-400/70 h-6 rounded-sm"></div>
                  <div className="w-1 bg-green-400/50 h-4 rounded-sm"></div>
                  <div className="w-1 bg-green-400/30 h-2 rounded-sm"></div>
                  <div className="w-1 bg-green-400/20 h-1 rounded-sm"></div>
                </div>
                <div className={`absolute top-1 right-1 bg-zinc-900/90 text-white ${isFullModal ? 'text-[9px]' : 'text-[8px]'} px-1 py-0.5 rounded shadow-sm border border-white/10 backdrop-blur-sm`}>
                  164 BPM
                </div>
              </div>
            </div>
          </div>

          {/* Event 2 - Deep Sleep */}
          <div className={`${isFullModal ? 'pl-8' : 'pl-5'} relative group cursor-pointer ${isFullModal ? '' : 'opacity-70 hover:opacity-100'} transition-opacity`}>
            <div className={`absolute left-0 top-1 ${isFullModal ? 'w-2.5 h-2.5 bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.5)]' : 'w-2 h-2 bg-zinc-600 group-hover:bg-blue-400'} ring-2 ring-zinc-900 z-10 transition-colors`}></div>
            <div className="transition-all duration-300">
              <div className="flex justify-between items-baseline mb-0.5">
                <div className={`${isFullModal ? 'text-[10px]' : 'text-[9px]'} font-mono text-zinc-500 uppercase tracking-wider`}>Wed • Deep Sleep</div>
                <span className={`${isFullModal ? 'text-[10px]' : 'text-[9px]'} text-blue-400 font-bold`}>+15%</span>
              </div>
              <p className={`${isFullModal ? 'text-sm' : 'text-xs'} font-medium text-white leading-snug mb-2`}>
                Circadian rhythm synchronized. <span className="text-blue-400 font-semibold">Recovery optimal.</span>
              </p>
              <div className={`${isFullModal ? 'h-16' : 'h-12'} w-full bg-zinc-800/50 rounded-lg border border-zinc-700 p-1.5 relative overflow-hidden group-hover:border-blue-400/30 transition-colors`}>
                <div className="flex items-center gap-2 h-full">
                  <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-blue-400 rounded-full"></div>
                  </div>
                  <span className={`${isFullModal ? 'text-sm' : 'text-[9px]'} text-blue-400 font-bold`}>85%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Event 3 - Mood Trend */}
          <div className={`${isFullModal ? 'pl-8' : 'pl-5'} relative group cursor-pointer ${isFullModal ? '' : 'opacity-40'} transition-opacity`}>
            <div className={`absolute left-0 top-1 ${isFullModal ? 'w-2.5 h-2.5 bg-yellow-400 shadow-[0_0_8px_rgba(251,191,36,0.5)]' : 'w-2 h-2 bg-zinc-700'} ring-2 ring-zinc-900 z-10`}></div>
            <div className="transition-all duration-300">
              <div className="flex justify-between items-baseline mb-0.5">
                <div className={`${isFullModal ? 'text-[10px]' : 'text-[9px]'} font-mono text-zinc-500 uppercase tracking-wider`}>Fri • Mood Trend</div>
                <span className={`${isFullModal ? 'text-[10px]' : 'text-[9px]'} text-yellow-400 font-bold`}>Stable</span>
              </div>
              <p className={`${isFullModal ? 'text-sm' : 'text-xs'} font-medium text-white leading-snug mb-2`}>
                Positive outlook maintained. <span className="text-yellow-400 font-semibold">Wellness balanced.</span>
              </p>
              <div className={`${isFullModal ? 'h-16' : 'h-12'} w-full bg-zinc-800/50 rounded-lg border border-zinc-700 p-1.5 relative overflow-hidden`}>
                <div className="flex items-center justify-between h-full gap-0.5">
                  <div className="flex items-center gap-0.5">
                    <span className={`${isFullModal ? 'text-sm' : 'text-[8px]'} text-yellow-400`}>😊</span>
                    <span className={`${isFullModal ? 'text-sm' : 'text-[8px]'} text-yellow-400`}>😊</span>
                    <span className={`${isFullModal ? 'text-sm' : 'text-[8px]'} text-yellow-400`}>😊</span>
                    <span className={`${isFullModal ? 'text-sm' : 'text-[8px]'} text-yellow-400`}>😐</span>
                    <span className={`${isFullModal ? 'text-sm' : 'text-[8px]'} text-yellow-400`}>😊</span>
                    <span className={`${isFullModal ? 'text-sm' : 'text-[8px]'} text-yellow-400`}>😊</span>
                    <span className={`${isFullModal ? 'text-sm' : 'text-[8px]'} text-yellow-400`}>😊</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className={`absolute bottom-0 left-0 right-0 ${isFullModal ? 'h-16' : 'h-12'} bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none z-20`}></div>
    </div>
  );

  if (isModal) {
    return (
      <>
        <div onClick={() => setIsModalOpen(true)} className="cursor-pointer">
          <CardContent isFullModal={false} />
        </div>

        {/* Enhanced Modal */}
        {isModalOpen && (
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-6"
            onClick={() => setIsModalOpen(false)}
          >
            <div 
              className="w-full h-full max-w-4xl bg-black relative shadow-2xl overflow-hidden flex flex-col rounded-2xl border border-zinc-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="absolute top-0 left-0 right-0 p-6 z-30 flex justify-between items-start bg-gradient-to-b from-black via-black/80 to-transparent h-28 pointer-events-none">
                <div className="pointer-events-auto">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-green-400">Live Report</span>
                  </div>
                  <h2 className="text-xl font-bold text-white leading-none">Your Weekly Story</h2>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="pointer-events-auto w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-sm group"
                >
                  <span className="material-icons-round text-lg group-hover:rotate-90 transition-transform duration-300">close</span>
                </button>
              </div>

              {/* Modal Content - Scrollable Sections */}
              <div className="overflow-y-auto h-full scroll-smooth relative z-10 bg-black scrollbar-hide">
                {/* Section 1: Introduction */}
                <div className="h-full min-h-screen flex flex-col justify-center items-center px-8 py-20 relative overflow-hidden">
                  <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
                    <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-1/3 left-1/5 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-green-400/5 rounded-full blur-3xl"></div>
                  </div>
                  <div className="max-w-2xl w-full relative z-10 text-center">
                    <div className="mb-8">
                      <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-green-400 text-xs font-bold mb-6 border border-white/10 uppercase tracking-widest backdrop-blur-sm">
                        March 4 - 10
                      </div>
                      <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
                        Hello Alex,<br/>Your Health Story.
                      </h1>
                      <div className="relative pl-6 border-l-2 border-green-400/50">
                        <p className="text-xl text-gray-300 leading-relaxed font-light">
                          This week was a testament to your consistent efforts, showing positive trends in activity and restful sleep. <span className="text-white font-medium">Let's dive into the details!</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-60">
                    <span className="text-xs uppercase tracking-widest text-gray-500">Scroll to Explore</span>
                    <span className="material-icons-round text-gray-400">keyboard_arrow_down</span>
                  </div>
                </div>

                {/* Section 2: Cardio Peak */}
                <div className="h-full min-h-screen flex flex-col justify-center items-center px-8 py-20 relative bg-gradient-to-b from-black to-emerald-950 border-t border-white/5">
                  <div className="max-w-3xl w-full">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                      <span className="text-green-400 block text-sm font-bold uppercase tracking-widest mb-2">Chapter 1</span>
                      Your Energy Soared!
                    </h3>
                    <div className="bg-gray-800/20 backdrop-blur-lg p-8 rounded-2xl border border-white/5 mb-8">
                      <div className="h-64 flex items-end justify-between gap-4">
                        {[40, 60, 45, 30, 50, 90, 70].map((height, idx) => (
                          <div key={idx} className="w-full flex flex-col justify-end h-full group relative">
                            <div 
                              className={`w-full ${idx === 5 ? 'bg-gradient-to-t from-green-400 to-emerald-300' : 'bg-gray-700/50'} rounded-t-lg transition-colors cursor-pointer`}
                              style={{ height: `${height}%` }}
                            ></div>
                            <div className="text-xs text-center mt-3 text-gray-500 font-mono">
                              {['M', 'T', 'W', 'T', 'F', 'S', 'S'][idx]}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-emerald-950/50 p-6 rounded-xl border border-emerald-500/30">
                      <p className="text-emerald-100 font-light">
                        "You hit your <span className="text-white font-bold">10,000 steps goal 5 out of 7 days</span>, a 15% increase from last week! Your consistency on weekends is becoming a strong habit."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 3: Sleep */}
                <div className="h-full min-h-screen flex flex-col justify-center items-center px-8 py-20 relative bg-gradient-to-b from-emerald-950 to-indigo-950 border-t border-white/5">
                  <div className="max-w-3xl w-full">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-12">
                      <span className="text-indigo-400 block text-sm font-bold uppercase tracking-widest mb-2">Chapter 2</span>
                      Restful Nights Awaited
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-indigo-900/20 p-5 rounded-2xl border border-indigo-500/20 text-center">
                        <div className="text-xs text-indigo-300 uppercase tracking-widest mb-1">Avg Duration</div>
                        <div className="text-3xl font-bold text-white">7h 45m</div>
                      </div>
                      <div className="bg-indigo-900/20 p-5 rounded-2xl border border-indigo-500/20 text-center">
                        <div className="text-xs text-indigo-300 uppercase tracking-widest mb-1">Quality Score</div>
                        <div className="text-3xl font-bold text-white">92</div>
                      </div>
                      <div className="bg-indigo-900/20 p-5 rounded-2xl border border-indigo-500/20 text-center">
                        <div className="text-xs text-indigo-300 uppercase tracking-widest mb-1">Deep Sleep</div>
                        <div className="text-3xl font-bold text-white">2h 10m</div>
                      </div>
                    </div>
                    <div className="bg-indigo-950/50 p-6 rounded-xl border border-indigo-500/30 flex gap-4">
                      <span className="material-icons-round text-indigo-400">auto_awesome</span>
                      <p className="text-indigo-100 font-light">
                        "Your average sleep duration was 7 hours and 45 minutes, a significant improvement! Focus on your consistent bedtime to maintain this."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 4: Mood */}
                <div className="h-full min-h-screen flex flex-col justify-center items-center px-8 py-20 relative bg-gradient-to-b from-indigo-950 to-gray-900 border-t border-white/5">
                  <div className="max-w-3xl w-full">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-10">
                      <span className="text-yellow-400 block text-sm font-bold uppercase tracking-widest mb-2">Chapter 3</span>
                      Your Emotional Compass
                    </h3>
                    <div className="relative w-full h-48 bg-gray-800/30 rounded-3xl border border-white/5 overflow-hidden mb-8 p-6 flex items-center justify-center">
                      <svg className="w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="moodGradient" x1="0" x2="1" y1="0" y2="0">
                            <stop offset="0%" stopColor="#3B82F6"></stop>
                            <stop offset="50%" stopColor="#8B5CF6"></stop>
                            <stop offset="100%" stopColor="#F59E0B"></stop>
                          </linearGradient>
                        </defs>
                        <path d="M50,120 Q150,120 150,60 T280,80 T410,40 T540,100 T670,100 T800,50" fill="none" stroke="url(#moodGradient)" strokeLinecap="round" strokeWidth="3" opacity="0.8"></path>
                      </svg>
                      <div className="absolute top-6 right-6 px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-bold border border-yellow-500/30">
                        Overall: Positive
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 p-6 rounded-2xl border border-blue-500/30 flex gap-4 items-start">
                      <div className="bg-blue-500/20 p-3 rounded-full shrink-0">
                        <span className="material-icons-round text-blue-400">self_improvement</span>
                      </div>
                      <div>
                        <h4 className="text-blue-200 font-bold mb-1 text-sm uppercase tracking-wide">Mindfulness Tip</h4>
                        <p className="text-gray-300">
                          "Your energy dips mid-week suggested some stress. <span className="text-white font-medium">Consider a 5-minute meditation around 3 PM</span> to boost afternoon focus."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 5: Closing */}
                <div className="h-full min-h-screen flex flex-col justify-center items-center px-8 py-20 relative bg-black border-t border-white/5 overflow-hidden">
                  <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-400/30 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-green-400/10 to-transparent"></div>
                  </div>
                  <div className="max-w-xl w-full relative z-10">
                    <div className="text-center mb-12">
                      <div className="inline-block p-3 bg-white/5 rounded-full mb-4">
                        <span className="material-icons-round text-3xl text-green-400">emoji_events</span>
                      </div>
                      <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Empowering Your<br/>Future Health</h2>
                      <p className="text-gray-400">Based on your story, here is your path forward.</p>
                    </div>
                    <div className="space-y-4 mb-12">
                      <div className="bg-gray-900/80 p-5 rounded-xl border border-gray-800 hover:border-green-400/50 transition-colors flex gap-4 items-center cursor-pointer group">
                        <div className="w-10 h-10 rounded-full bg-green-400/10 flex items-center justify-center shrink-0 group-hover:bg-green-400/20 transition-colors">
                          <span className="material-icons-round text-green-400 text-sm">fitness_center</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-medium text-sm group-hover:text-green-400 transition-colors">Strength Training</h4>
                          <p className="text-xs text-gray-500 mt-0.5">Try a new 15-minute routine twice this week</p>
                        </div>
                        <span className="material-icons-round text-gray-600 group-hover:text-white transition-colors">chevron_right</span>
                      </div>
                      <div className="bg-gray-900/80 p-5 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors flex gap-4 items-center cursor-pointer group">
                        <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                          <span className="material-icons-round text-blue-400 text-sm">bedtime</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-medium text-sm group-hover:text-blue-400 transition-colors">Sleep Consistency</h4>
                          <p className="text-xs text-gray-500 mt-0.5">Aim for 8 hours for 5 consecutive nights</p>
                        </div>
                        <span className="material-icons-round text-gray-600 group-hover:text-white transition-colors">chevron_right</span>
                      </div>
                    </div>
                    <button className="relative w-full py-4 rounded-xl bg-gradient-to-r from-green-400 to-emerald-500 text-white font-bold uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(16,185,129,0.4)] overflow-hidden group">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        View Full Insights
                        <span className="material-icons-round group-hover:translate-x-1 transition-transform">arrow_forward</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  return <CardContent isFullModal={false} />;
};

export default WeeklyStory;
