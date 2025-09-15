import { useState } from "react"

const moodData = [
  { level: 1, emoji: "😢", label: "Terrible" },
  { level: 2, emoji: "😞", label: "Very Bad" },
  { level: 3, emoji: "😔", label: "Bad" },
  { level: 4, emoji: "😕", label: "Poor" },
  { level: 5, emoji: "😐", label: "Okay" },
  { level: 6, emoji: "🙂", label: "Fair" },
  { level: 7, emoji: "😊", label: "Good" },
  { level: 8, emoji: "😄", label: "Very Good" },
  { level: 9, emoji: "😁", label: "Great" },
  { level: 10, emoji: "🤩", label: "Amazing" },
]

export default function MoodTracker() {
  const [currentMood, setCurrentMood] = useState<(typeof moodData)[0]>(moodData[6]) // Start with Good mood

  const navigateMood = (direction: "prev" | "next") => {
    const currentIndex = moodData.findIndex((mood) => mood.level === currentMood.level)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : moodData.length - 1
    } else {
      newIndex = currentIndex < moodData.length - 1 ? currentIndex + 1 : 0
    }

    setCurrentMood(moodData[newIndex])
  }

  return (
    <div className="h-full flex flex-col justify-between">
      {/* Header */}
      <div className="text-right">
        <p className="text-xs text-zinc-400 text-Center">Mood Tracker</p>
      </div>

      {/* Mood Display */}
      <div className="flex flex-col items-center space-y-2">
        <div className="text-4xl">{currentMood.emoji}</div>
        <div className="text-center">
          <h3 className="text-sm font-medium text-white">{currentMood.label}</h3>
          <p className="text-xs text-zinc-400">{currentMood.level}/10</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={() => navigateMood("prev")}
          className="text-white hover:bg-white/10 h-8 w-8 rounded-full border border-white/20 hover:border-white/40 transition-all duration-200 flex items-center justify-center"
        >
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => navigateMood("next")}
          className="text-white hover:bg-white/10 h-8 w-8 rounded-full border border-white/20 hover:border-white/40 transition-all duration-200 flex items-center justify-center"
        >
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
