import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  TrendingUp, 
  BookOpen, 
  CheckCircle2,
  Clock,
  Award,
  Sparkles,
  ArrowRight,
  Youtube,
  FileText
} from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function SkillDevelopment() {
  const targetRole = "Full Stack Developer"
  
  const skillGaps = [
    { 
      skill: "Data Structures & Algorithms", 
      priority: "High", 
      currentLevel: 40, 
      targetLevel: 90,
      impact: "+15 points to Career Readiness",
      timeEstimate: "2-3 months"
    },
    { 
      skill: "System Design", 
      priority: "High", 
      currentLevel: 20, 
      targetLevel: 75,
      impact: "+12 points to Career Readiness",
      timeEstimate: "1-2 months"
    },
    { 
      skill: "AWS Cloud Services", 
      priority: "Medium", 
      currentLevel: 35, 
      targetLevel: 70,
      impact: "+8 points to Career Readiness",
      timeEstimate: "1 month"
    },
    { 
      skill: "Docker & Kubernetes", 
      priority: "Medium", 
      currentLevel: 10, 
      targetLevel: 60,
      impact: "+6 points to Career Readiness",
      timeEstimate: "3-4 weeks"
    },
  ]

  const learningRoadmap = [
    {
      phase: "Immediate (Next 2 Weeks)",
      status: "current",
      tasks: [
        { title: "Complete DSA Fundamentals", platform: "LeetCode", type: "Practice", duration: "2-3 hours/day" },
        { title: "Arrays & Strings Mastery", platform: "NeetCode", type: "Course", duration: "20 problems" },
        { title: "Hash Maps & Sets", platform: "FreeCodeCamp", type: "Tutorial", duration: "1 week" },
      ]
    },
    {
      phase: "Short Term (Next Month)",
      status: "upcoming",
      tasks: [
        { title: "System Design Basics", platform: "YouTube", type: "Course", duration: "2 weeks" },
        { title: "AWS Solutions Architect Course", platform: "Udemy", type: "Certification", duration: "3 weeks" },
        { title: "Build Scalable REST API", platform: "Personal Project", type: "Project", duration: "1 week" },
      ]
    },
    {
      phase: "Long Term (2-3 Months)",
      status: "planned",
      tasks: [
        { title: "Advanced DSA (Trees, Graphs, DP)", platform: "Coursera", type: "Course", duration: "6 weeks" },
        { title: "Docker & Kubernetes Fundamentals", platform: "Docker Docs", type: "Hands-on", duration: "3 weeks" },
        { title: "Build Microservices Project", platform: "GitHub Portfolio", type: "Project", duration: "4 weeks" },
      ]
    },
  ]

  const recommendedCourses = [
    {
      title: "Master DSA for Placements",
      platform: "Udemy",
      instructor: "Abdul Bari",
      rating: 4.8,
      duration: "40 hours",
      price: "Free with SVCE access",
      url: "#"
    },
    {
      title: "System Design Interview Prep",
      platform: "YouTube",
      instructor: "Gaurav Sen",
      rating: 4.9,
      duration: "Free series",
      price: "Free",
      url: "#"
    },
    {
      title: "AWS Cloud Practitioner",
      platform: "Coursera",
      instructor: "Amazon Web Services",
      rating: 4.7,
      duration: "16 hours",
      price: "₹2,499",
      url: "#"
    },
  ]

  const getPriorityColor = (priority) => {
    if (priority === "High") return "bg-red-500/10 text-red-700 border-red-500/20"
    if (priority === "Medium") return "bg-yellow-500/10 text-yellow-700 border-yellow-500/20"
    return "bg-blue-500/10 text-blue-700 border-blue-500/20"
  }

  const getPhaseStatus = (status) => {
    if (status === "current") return "border-l-primary bg-primary/5"
    if (status === "upcoming") return "border-l-blue-500 bg-blue-50/50"
    return "border-l-slate-300 bg-slate-50/50"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="mb-2 text-3xl font-bold text-slate-900 sm:text-4xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Skill Development Hub
          </h1>
          <p className="text-slate-600">AI-powered learning roadmap to achieve your career goals</p>
        </motion.div>

        {/* Target Role */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="border-l-4 border-l-primary bg-gradient-to-r from-primary/10 to-accent/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <Target className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-sm text-slate-600">Your Target Role</p>
                  <p className="text-xl font-bold text-slate-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {targetRole}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left: Skill Gaps */}
          <div className="lg:col-span-1 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-slate-200/60 bg-white/90 backdrop-blur-sm shadow-md sticky top-8">
                <CardHeader>
                  <CardTitle className="text-lg">Skill Gap Analysis</CardTitle>
                  <CardDescription>Focus areas for maximum impact</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skillGaps.map((gap, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-900">{gap.skill}</span>
                        <Badge className={getPriorityColor(gap.priority)}>
                          {gap.priority}
                        </Badge>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="relative h-3 w-full rounded-full bg-slate-200">
                        <div 
                          className="absolute h-3 rounded-full bg-gradient-to-r from-red-500 to-orange-500"
                          style={{ width: `${gap.currentLevel}%` }}
                        />
                        <div 
                          className="absolute h-3 rounded-full bg-gradient-to-r from-primary to-accent opacity-30"
                          style={{ width: `${gap.targetLevel}%` }}
                        />
                      </div>
                      
                      <div className="flex justify-between text-xs text-slate-600">
                        <span>Current: {gap.currentLevel}%</span>
                        <span>Target: {gap.targetLevel}%</span>
                      </div>
                      
                      <div className="rounded-lg bg-green-50 p-2 border border-green-200">
                        <p className="text-xs text-green-700 font-medium">{gap.impact}</p>
                        <p className="text-xs text-green-600">Est. {gap.timeEstimate}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right: Learning Roadmap */}
          <div className="lg:col-span-2 space-y-6">
            {/* AI Roadmap */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border-slate-200/60 bg-white/90 backdrop-blur-sm shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                      <Sparkles className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <CardTitle>AI-Generated Learning Roadmap</CardTitle>
                      <CardDescription>Personalized path to reach your goals</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {learningRoadmap.map((phase, phaseIndex) => (
                    <div key={phaseIndex} className={cn("rounded-lg border-l-4 p-5", getPhaseStatus(phase.status))}>
                      <div className="flex items-center gap-2 mb-4">
                        {phase.status === "current" && <Clock className="h-5 w-5 text-primary" />}
                        {phase.status === "upcoming" && <TrendingUp className="h-5 w-5 text-blue-600" />}
                        {phase.status === "planned" && <Target className="h-5 w-5 text-slate-600" />}
                        <h3 className="text-lg font-bold text-slate-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          {phase.phase}
                        </h3>
                      </div>
                      
                      <div className="space-y-3">
                        {phase.tasks.map((task, taskIndex) => (
                          <div key={taskIndex} className="flex items-start gap-3 rounded-lg bg-white p-4 border border-slate-200">
                            <CheckCircle2 className="h-5 w-5 text-slate-400 flex-shrink-0 mt-0.5" />
                            <div className="flex-1">
                              <p className="font-semibold text-slate-900">{task.title}</p>
                              <div className="mt-2 flex flex-wrap gap-2 text-xs">
                                <Badge variant="outline" className="bg-slate-50">{task.platform}</Badge>
                                <Badge variant="outline" className="bg-slate-50">{task.type}</Badge>
                                <Badge variant="outline" className="bg-slate-50">
                                  <Clock className="mr-1 h-3 w-3" />
                                  {task.duration}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Recommended Courses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="border-slate-200/60 bg-white/90 backdrop-blur-sm shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Recommended Courses
                  </CardTitle>
                  <CardDescription>Top-rated courses for your learning path</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recommendedCourses.map((course, index) => (
                    <div key={index} className="rounded-lg border border-slate-200 bg-slate-50/50 p-5 hover:shadow-md transition-all">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-900 mb-1">{course.title}</h4>
                          <p className="text-sm text-slate-600 mb-2">{course.instructor}</p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="bg-white text-xs">
                              {course.platform}
                            </Badge>
                            <Badge variant="outline" className="bg-white text-xs">
                              ⭐ {course.rating}
                            </Badge>
                            <Badge variant="outline" className="bg-white text-xs">
                              {course.duration}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {course.price}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full gap-2">
                        Start Learning
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
