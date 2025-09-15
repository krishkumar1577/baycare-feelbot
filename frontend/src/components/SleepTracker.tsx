import React from "react";

interface SleepStage {
  stage: "Deep" | "Light" | "REM" | "Awake";
  duration: number; // in minutes
  color: string;
}

interface SleepTrackerProps {
  totalSleep: string;
  qualityScore: number;
  bedTime: string;
  wakeTime: string;
}

const SleepTracker: React.FC<SleepTrackerProps> = ({
  totalSleep = "7h 24m",
  qualityScore = 85,
  bedTime = "11:30 PM",
  wakeTime = "6:54 AM"
}) => {
  const sleepStages: SleepStage[] = [
    { stage: "Deep", duration: 120, color: "#3B82F6" }, // Blue
    { stage: "Light", duration: 180, color: "#8B5CF6" }, // Purple
    { stage: "REM", duration: 90, color: "#10B981" }, // Green
    { stage: "Awake", duration: 15, color: "#F59E0B" }, // Amber
  ];

  const totalMinutes = sleepStages.reduce((sum, stage) => sum + stage.duration, 0);

  const getQualityColor = (score: number) => {
    if (score >= 80) return "text-green-400";
    if (score >= 60) return "text-yellow-400";
    return "text-red-400";
  };

  const getQualityBg = (score: number) => {
    if (score >= 80) return "bg-green-500/20";
    if (score >= 60) return "bg-yellow-500/20";
    return "bg-red-500/20";
  };

  return (
    <div className="h-full flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
          <span className="text-xs text-zinc-400 font-medium">SLEEP</span>
        </div>
        <div className={`px-2 py-0.5 rounded-full text-xs font-medium ${getQualityBg(qualityScore)} ${getQualityColor(qualityScore)}`}>
          {qualityScore}%
        </div>
      </div>

      {/* Main Sleep Info */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="text-xl font-light text-white">{totalSleep}</h3>
          <p className="text-xs text-zinc-400">Total Sleep</p>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-1 mb-0.5">
            <svg className="w-2.5 h-2.5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <span className="text-xs text-zinc-400">{bedTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-2.5 h-2.5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span className="text-xs text-zinc-400">{wakeTime}</span>
          </div>
        </div>
      </div>

      {/* Sleep Stages Bar */}
      <div>
        <div className="flex h-2 rounded-full overflow-hidden bg-zinc-800 mb-1.5">
          {sleepStages.map((stage, index) => {
            const percentage = (stage.duration / totalMinutes) * 100;
            return (
              <div
                key={index}
                className="h-full transition-all duration-500"
                style={{
                  width: `${percentage}%`,
                  backgroundColor: stage.color,
                }}
              />
            );
          })}
        </div>

        {/* Sleep Stages Legend - Simplified */}
        <div className="grid grid-cols-2 gap-0.5 text-xs">
          {sleepStages.slice(0, 4).map((stage, index) => (
            <div key={index} className="flex items-center gap-1">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: stage.color }}
              />
              <span className="text-zinc-400 text-xs truncate">
                {stage.stage} {Math.floor(stage.duration / 60)}h
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SleepTracker;