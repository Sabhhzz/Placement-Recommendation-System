import { Link } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  TrendingUp, 
  Briefcase, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  Target,
  Award,
  BookOpen,
  Sparkles
} from "lucide-react"
import { motion } from "framer-motion"

export default function StudentDashboard() {
  // Dummy data - realistic for engineering student
  const student = {
    name: "Haricharan M",
    email: "haricharan@svce.ac.in",
    branch: "Computer Science Engineering",
    year: "Final Year",
    cgpa: 8.4,
    readinessScore: 78,
  }

  const recommendedJobs = [
    {
      id: 1,
      company: "Zoho Corporation",
      role: "Software Development Engineer",
      package: "6.5 LPA",
      matchPercentage: 92,
      location: "Chennai",
      deadline: "Feb 15, 2025",
      reason: "Strong match: Your React and Node.js projects align perfectly. CGPA exceeds requirement.",
      missing: "Consider improving DSA problem-solving speed",
      type: "campus",
      logo: "https://logo.clearbit.com/zoho.com"
    },
    {
      id: 2,
      company: "Freshworks",
      role: "Full Stack Developer Intern",
      package: "Stipend: ₹40k/month",
      matchPercentage: 87,
      location: "Bangalore",
      deadline: "Feb 20, 2025",
      reason: "Your full-stack experience matches well. Previous internship is a plus.",
      missing: "Add AWS/cloud certification for competitive edge",
      type: "internship",
      logo: "https://logo.clearbit.com/freshworks.com"
    },
    {
      id: 3,
      company: "Infosys",
      role: "Systems Engineer - Power Programmer",
      package: "4.5 LPA + Performance Bonus",
      matchPercentage: 81,
      location: "Multiple Locations",
      deadline: "Feb 10, 2025",
      reason: "Strong fundamentals and eligible CGPA. Good algorithmic thinking from hackathons.",
      missing: "System design knowledge would strengthen application",
      type: "campus",
      logo: "https://logo.clearbit.com/infosys.com"
    },
  ]

  const skillGaps = [
    { skill: "Data Structures & Algorithms", priority: "High", impact: "+15 points" },
    { skill: "System Design", priority: "Medium", impact: "+10 points" },
    { skill: "AWS Cloud Practitioner", priority: "Medium", impact: "+8 points" },
  ]

  const recentApplications = [
    { company: "TCS", role: "Digital", status: "Shortlisted", date: "Jan 25" },
    { company: "Wipro", role: "WILP", status: "Interview Scheduled", date: "Jan 28" },
    { company: "Cognizant", role: "GenC", status: "Applied", date: "Jan 30" },
  ]

  const getScoreColor = (score) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-blue-600"
    if (score >= 40) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreBgColor = (score) => {
    if (score >= 80) return "from-green-500 to-emerald-500"
    if (score >= 60) return "from-blue-500 to-cyan-500"
    if (score >= 40) return "from-yellow-500 to-orange-500"
    return "from-red-500 to-pink-500"
  }

  const getScoreLabel = (score) => {
    if (score >= 80) return "Excellent"
    if (score >= 60) return "Good"
    if (score >= 40) return "Average"
    return "Needs Improvement"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-2 text-3xl font-bold text-slate-900 sm:text-4xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Welcome back, {student.name.split(' ')[0]}! 👋
          </h1>
          <p className="text-slate-600">
            {student.branch} • {student.year} • CGPA: {student.cgpa}
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Column - Career Readiness Score */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="border-slate-200/60 bg-white/80 backdrop-blur-sm shadow-xl shadow-slate-200/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>Career Readiness</CardTitle>
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <CardDescription>AI-powered placement prediction</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Circular Progress */}
                <div className="relative mx-auto mb-6 flex h-48 w-48 items-center justify-center">
                  {/* Background circle */}
                  <svg className="absolute h-48 w-48 -rotate-90 transform">
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="none"
                      className="text-slate-200"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="url(#gradient)"
                      strokeWidth="12"
                      fill="none"
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-out"
                      style={{
                        strokeDasharray: `${2 * Math.PI * 88}`,
                        strokeDashoffset: `${2 * Math.PI * 88 * (1 - student.readinessScore / 100)}`,
                      }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" className="text-primary" style={{ stopColor: 'hsl(var(--primary))' }} />
                        <stop offset="100%" className="text-accent" style={{ stopColor: 'hsl(var(--accent))' }} />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Score display */}
                  <div className="text-center">
                    <div className={`text-5xl font-bold ${getScoreColor(student.readinessScore)}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {student.readinessScore}
                    </div>
                    <div className="text-sm font-medium text-slate-600">out of 100</div>
                    <div className={`mt-2 text-xs font-semibold ${getScoreColor(student.readinessScore)}`}>
                      {getScoreLabel(student.readinessScore)}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Academic Performance</span>
                    <span className="font-semibold text-slate-900">85/100</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Skills Match</span>
                    <span className="font-semibold text-slate-900">72/100</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Experience & Projects</span>
                    <span className="font-semibold text-slate-900">76/100</span>
                  </div>
                </div>

                <Link to="/student/skills">
                  <Button className="mt-6 w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                    <Target className="mr-2 h-4 w-4" />
                    Improve Score
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Recommendations and Stats */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Stats */}
            <motion.div
              className="grid gap-4 sm:grid-cols-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border-slate-200/60 bg-gradient-to-br from-blue-50 to-white shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600">Applications</p>
                      <p className="text-3xl font-bold text-slate-900">12</p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10">
                      <Briefcase className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200/60 bg-gradient-to-br from-green-50 to-white shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600">Interviews</p>
                      <p className="text-3xl font-bold text-slate-900">3</p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600/10">
                      <CheckCircle2 className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200/60 bg-gradient-to-br from-purple-50 to-white shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600">Matches</p>
                      <p className="text-3xl font-bold text-slate-900">8</p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600/10">
                      <Award className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* AI Skill Gap Alert */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="border-l-4 border-l-yellow-500 border-slate-200/60 bg-gradient-to-r from-yellow-50/50 to-white shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-yellow-500/10">
                      <AlertCircle className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 font-semibold text-slate-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        🎯 AI Skill Gap Analysis
                      </h3>
                      <p className="mb-4 text-sm text-slate-700">
                        To reach your target roles, focus on these high-impact skills:
                      </p>
                      <div className="space-y-2">
                        {skillGaps.map((gap, index) => (
                          <div key={index} className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm">
                            <div className="flex items-center gap-3">
                              <Badge variant={gap.priority === "High" ? "destructive" : "secondary"} className="text-xs">
                                {gap.priority}
                              </Badge>
                              <span className="text-sm font-medium text-slate-900">{gap.skill}</span>
                            </div>
                            <span className="text-xs font-semibold text-green-600">{gap.impact}</span>
                          </div>
                        ))}
                      </div>
                      <Link to="/student/skills">
                        <Button variant="outline" className="mt-4 w-full border-yellow-600/20 text-yellow-700 hover:bg-yellow-50">
                          <BookOpen className="mr-2 h-4 w-4" />
                          View Learning Roadmap
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* AI Job Recommendations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="border-slate-200/60 bg-white/80 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>AI-Recommended Opportunities</CardTitle>
                      <CardDescription>Personalized matches based on your profile</CardDescription>
                    </div>
                    <Link to="/student/opportunities">
                      <Button variant="ghost" className="gap-2 text-primary">
                        View All
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recommendedJobs.map((job, index) => (
                    <motion.div
                      key={job.id}
                      className="group relative overflow-hidden rounded-xl border border-slate-200/60 bg-gradient-to-br from-white to-slate-50/50 p-6 transition-all hover:shadow-lg hover:shadow-primary/10"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {/* Match percentage badge */}
                      <div className="absolute right-4 top-4">
                        <div className="relative flex h-16 w-16 items-center justify-center">
                          <svg className="absolute h-16 w-16 -rotate-90">
                            <circle
                              cx="32"
                              cy="32"
                              r="28"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                              className="text-slate-200"
                            />
                            <circle
                              cx="32"
                              cy="32"
                              r="28"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                              strokeLinecap="round"
                              className="text-primary"
                              style={{
                                strokeDasharray: `${2 * Math.PI * 28}`,
                                strokeDashoffset: `${2 * Math.PI * 28 * (1 - job.matchPercentage / 100)}`,
                              }}
                            />
                          </svg>
                          <span className="text-sm font-bold text-primary">{job.matchPercentage}%</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 pr-20">
                        {/* Company logo */}
                        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-slate-200/50">
                          <img src={job.logo} alt={job.company} className="h-8 w-8 object-contain" onError={(e) => {
                            e.target.style.display = 'none'
                            e.target.parentElement.innerHTML = `<div class="text-xs font-bold text-primary">${job.company.slice(0,2)}</div>`
                          }} />
                        </div>

                        <div className="flex-1">
                          <div className="mb-2 flex items-center gap-2">
                            <h3 className="text-lg font-semibold text-slate-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              {job.role}
                            </h3>
                            <Badge variant={job.type === "campus" ? "default" : "secondary"} className="text-xs">
                              {job.type === "campus" ? "Campus Drive" : "Internship"}
                            </Badge>
                          </div>
                          
                          <p className="mb-1 text-sm font-medium text-slate-700">{job.company}</p>
                          <div className="mb-4 flex flex-wrap gap-3 text-xs text-slate-600">
                            <span className="flex items-center gap-1">
                              💰 {job.package}
                            </span>
                            <span>📍 {job.location}</span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              Apply by {job.deadline}
                            </span>
                          </div>

                          {/* AI Explanation */}
                          <div className="mb-3 rounded-lg bg-green-50/80 p-3 border border-green-200/50">
                            <p className="mb-1 text-xs font-semibold text-green-800">✓ Why you're a good match:</p>
                            <p className="text-xs text-green-700">{job.reason}</p>
                          </div>

                          {job.missing && (
                            <div className="mb-4 rounded-lg bg-blue-50/80 p-3 border border-blue-200/50">
                              <p className="mb-1 text-xs font-semibold text-blue-800">💡 To strengthen your application:</p>
                              <p className="text-xs text-blue-700">{job.missing}</p>
                            </div>
                          )}

                          <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 sm:w-auto">
                            Apply Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Recent Applications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="border-slate-200/60 bg-white/80 backdrop-blur-sm shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>Recent Applications</CardTitle>
                    <Link to="/student/applications">
                      <Button variant="ghost" size="sm" className="gap-2 text-primary">
                        View All
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {recentApplications.map((app, index) => (
                    <div key={index} className="flex items-center justify-between rounded-lg bg-slate-50/80 p-4">
                      <div className="flex-1">
                        <p className="font-semibold text-slate-900">{app.company}</p>
                        <p className="text-xs text-slate-600">{app.role}</p>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={
                            app.status === "Shortlisted" ? "default" :
                            app.status === "Interview Scheduled" ? "default" :
                            "secondary"
                          }
                          className={
                            app.status === "Shortlisted" ? "bg-green-600/10 text-green-700 border-green-600/20" :
                            app.status === "Interview Scheduled" ? "bg-blue-600/10 text-blue-700 border-blue-600/20" :
                            ""
                          }
                        >
                          {app.status}
                        </Badge>
                        <p className="mt-1 text-xs text-slate-500">{app.date}</p>
                      </div>
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
