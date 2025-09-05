"use client"

import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { ChevronLeft, ChevronRight } from "lucide-react"

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
  const [currentMood, setCurrentMood] = useState<(typeof moodData)[0]>(moodData[4]) // Start with neutral mood

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
    <div className="min-h-screen bg-black p-6 flex items-center justify-center">
      <div className="w-full max-w-sm">
        <Card className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl font-light text-white">Mood Tracker</CardTitle>
            <CardDescription className="text-gray-400 text-sm">How are you feeling?</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-6 pb-8">
            <div className="flex items-center justify-center space-x-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigateMood("prev")}
                className="text-white hover:bg-white/10 h-10 w-10 p-0 border border-white/20 hover:border-white/40 transition-all duration-200"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex flex-col items-center space-y-3">
                <div className="text-7xl">{currentMood.emoji}</div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium text-white">{currentMood.label}</h3>
                  <p className="text-sm text-gray-400">{currentMood.level}/10</p>
                </div>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigateMood("next")}
                className="text-white hover:bg-white/10 h-10 w-10 p-0 border border-white/20 hover:border-white/40 transition-all duration-200"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
