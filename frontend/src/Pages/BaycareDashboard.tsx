import React from "react";
import AppleActivityCard from "../components/AppleActivityCard";
import CryptoCard from "../components/Healthcard";
import MoodTracker from "../components/moodtraker";
import SleepTracker from "../components/SleepTracker";

const BaycareDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-6 grid-rows-2 gap-4 h-screen">
          
          {/* Large Module Card - Top Left */}
          <div className="col-span-2 row-span-2 bg-zinc-900 rounded-2xl p-8 flex items-center justify-center border border-zinc-800">
            <h2 className="text-6xl font-light text-white">Modular</h2>
          </div>

          {/* Presentation Card - Top Center */}
          <div className="col-span-2 row-span-1 bg-zinc-900 rounded-2xl p-8 flex items-center justify-center border border-zinc-800">
            <h3 className="text-3xl font-medium text-white">Presentation</h3>
          </div>

          {/* Metrics Column - Top Right */}
          <div className="col-span-1 row-span-2 bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
            <div className="flex justify-between items-start h-full">
              <div className="flex flex-col justify-start space-y-2">
                <p className="text-xs text-white font-light">HeartRate</p>
                <p className="text-xs text-white font-light">High</p>
                <p className="text-xs text-white font-light">Good</p>
                <p className="text-xs text-white font-light">#163468</p>
              </div>
              <div className="w-16 h-16 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Apple Activity Card - Top Right */}
          <div className="col-span-1 row-span-1 bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
            <AppleActivityCard 
              title="Health Rings"
              className="bg-transparent h-full w-full flex items-center justify-center scale-50"
            />
          </div>

          {/* Style Card - Middle Center */}
          <div className="col-span-2 row-span-1 bg-zinc-900 rounded-2xl p-8 flex items-center justify-center border border-zinc-800">
            <h3 className="text-3xl font-medium text-white">Style</h3>
          </div>

          {/* Mood Tracker Card - Middle Right */}
          <div className="col-span-1 row-span-1 bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
            <MoodTracker />
          </div>

          {/* Text Block Card - Bottom Left */}
          <div className="col-span-2 row-span-1 bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
            <p className="text-sm text-zinc-300 leading-relaxed">
              The depth of brand case studies enables a detailed look into the implementation and effects of various marketing tools. They allow marketers to observe the correlation between specific tools and their impacts on brand perception and growth.
            </p>
            <p className="text-xs text-zinc-500 mt-4">baycarehealthcare.ai</p>
          </div>

          {/* Blood Pressure Health Card - Bottom Center */}
          <div className="col-span-1 row-span-1 bg-transparent rounded-2xl overflow-hidden border-0">
            <CryptoCard 
              title="Blood Pressure"
              value="120/80"
              currency="mmHg"
              percentChange={2.5}
              changeLabel="24h Change"
              width={200}
              height={200}
            />
          </div>

          {/* Sleep Tracker Card - Bottom Right */}
          <div className="col-span-1 row-span-1 bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
            <SleepTracker 
              totalSleep="7h 24m"
              qualityScore={85}
              bedTime="11:30 PM"
              wakeTime="6:54 AM"
            />
          </div>

          {/* Typography Card - Bottom Right Large */}
          <div className="col-span-2 row-span-1 bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
            <div className="h-full flex flex-col justify-between">
              <h3 className="text-4xl font-light text-white mb-4">AaBbCc</h3>
              <div className="text-xs text-zinc-400 space-y-1">
                <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                <p>abcdefghijklmnopqrstuvwxyz</p>
                <p>1234567890</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BaycareDashboard;
