"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, Play, RotateCcw, CheckCircle, Clock, AlertTriangle, Timer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"
import { useParams } from "next/navigation"
import { text } from "stream/consumers"

// ONLY LOGIC FIX: Added fire-evacuation-drill quiz

const drillData = {
  "earthquake-school-drill": {
    id: "earthquake-school-drill",
    title: "School Earthquake Drill",
    description:
      "Practice Drop, Cover, and Hold procedures in a classroom setting with evacuation routes.",
    type: "earthquake",
    difficulty: "Beginner",
    duration: "10 minutes",
    instructions: [
      "Follow the Drop, Cover, and Hold technique when shaking starts",
      "Stay calm and listen to your teacher's instructions",
      "Wait for the 'all clear' signal before evacuating",
      "Walk, don't run, to the designated assembly area",
      "Stay with your class and wait for attendance check",
    ],
    scenarios: [
      {
        id: "classroom-shake",
        title: "Earthquake Starts in Classroom",
        description:
          "You're in your classroom when you feel the ground shaking. What do you do first?",
        timeLimit: 15,
        actions: [
          {
            id: "drop-cover",
            text: "Immediately drop and take cover under desk",
            correct: true,
            feedback: "Correct! Drop, Cover, and Hold protects you.",
            points: 100,
          },
          {
            id: "run-outside",
            text: "Run outside immediately",
            correct: false,
            feedback: "Unsafe during shaking.",
            points: 0,
          },
          {
            id: "stand-doorway",
            text: "Stand in the doorway",
            correct: false,
            feedback: "Doorways are not safer.",
            points: 20,
          },
        ],
      },
    ],
  },

  "fire-evacuation-drill": {
    id: "fire-evacuation-drill",
    title: "Fire Evacuation Drill",
    description: "Practice safe evacuation during a fire emergency in school.",
    type: "fire",
    difficulty: "Beginner",
    duration: "8 minutes",
    instructions: [
      "Stay low under smoke",
      "Do not use elevators",
      "Follow exit signs",
      "Do not stop for belongings",
      "Gather at assembly point",
    ],
    scenarios: [
      {
        id: "alarm",
        title: "Fire Alarm Rings",
        description: "The fire alarm rings during class. What should you do first?",
        timeLimit: 15,
        actions: [
          {
            id: "exit",
            text: "Calmly move toward nearest exit",
            correct: true,
            feedback: "Correct! Evacuate calmly.",
            points: 100,
          },
          {
            id: "collect-bag",
            text: "Pack your bag then leave",
            correct: false,
            feedback: "Leave belongings behind.",
            points: 10,
          },
          {
            id: "ignore",
            text: "Ignore alarm",
            correct: false,
            feedback: "Never ignore alarms.",
            points: 0,
          },
        ],
      },
      {
        id: "smoke",
        title: "Smoke in Hallway",
        description: "The corridor is filled with smoke.",
        timeLimit: 20,
        actions: [
          {
            id: "crawl",
            text: "Stay low and crawl to exit",
            correct: true,
            feedback: "Correct! Smoke rises.",
            points: 100,
          },
          {
            id: "run",
            text: "Run through smoke",
            correct: false,
            feedback: "Running can cause panic.",
            points: 0,
          },
        ],
      },
      {
        id: "assembly",
        title: "After Evacuation",
        description: "You reach the assembly point.",
        timeLimit: 15,
        actions: [
          {
            id: "stay",
            text: "Stay with class and wait for headcount",
            correct: true,
            feedback: "Correct procedure.",
            points: 100,
          },
          {
            id: "leave",
            text: "Go home immediately",
            correct: false,
            feedback: "Never leave without permission.",
            points: 0,
          },
        ],
      },
    ],
  },
};

export default function DrillPage() {
  const params = useParams()
  const drillId = params.drillId
  const drill = drillData[drillId]

  const [currentScenario, setCurrentScenario] = useState(0)
  const [selectedAction, setSelectedAction] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    if (!drill) return
    setTimeLeft(drill.scenarios[currentScenario].timeLimit)
    setIsActive(false)
    setSelectedAction(null)
    setShowFeedback(false)
  }, [currentScenario])

  if (!drill) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-bold mb-4">Drill in Progress</h1>
          <Button asChild><Link href="/drills">Back</Link></Button>
        </div>
      </div>
    )
  }

  const scenario = drill.scenarios[currentScenario]

  const choose = (id) => {
    if (!isActive || selectedAction) return
    setSelectedAction(id)
    setIsActive(false)
    setShowFeedback(true)

    const act = scenario.actions.find(a => a.id === id)
    if (act) setScore(s => s + act.points)
  }

  const next = () => {
    if (currentScenario < drill.scenarios.length - 1) setCurrentScenario(i => i + 1)
    else setCompleted(true)
  }

  if (completed) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Drill Completed!</h1>
          <p className="mb-4">Score: {score}</p>
          <Button asChild><Link href="/drills">More Drills</Link></Button>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{drill.title}</h1>
      <p className="mb-4">{scenario.title}</p>

      {!isActive && !showFeedback && (
        <Button onClick={() => setIsActive(true)}>Start Scenario</Button>
      )}

      {isActive && (
        <div className="space-y-2">
          {scenario.actions.map(a => (
            <Button key={a.id} onClick={() => choose(a.id)}>{a.text}</Button>
          ))}
        </div>
      )}

      {showFeedback && (
        <div className="mt-4">
          {scenario.actions.map(a => (
            <p key={a.id} className={a.correct ? "text-green-600" : "text-red-600"}>{a.text} — {a.feedback}</p>
          ))}
          <Button className="mt-3" onClick={next}>{currentScenario < drill.scenarios.length - 1 ? "Next" : "Finish"}</Button>
        </div>
      )}
    </div>
  )
}
