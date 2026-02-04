import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Users, 
  Search, 
  Filter,
  Eye,
  Mail,
  Download,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Target,
  TrendingUp
} from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function StudentManagement() {
  const [searchQuery, setSearchQuery] = useState("")
  const [deptFilter, setDeptFilter] = useState("all")
  const [readinessFilter, setReadinessFilter] = useState("all")
  const [viewMode, setViewMode] = useState("filter") // 'filter' or 'guidance'

  const students = [
    {
      id: 1,
      name: "Aisha Patel",
      email: "aisha.patel@svce.ac.in",
      branch: "CSE",
      year: "Final",
      cgpa: 8.9,
      readinessScore: 94,
      status: "job-ready",
      applications: 8,
      interviews: 3,
      skillsMatch: ["React", "Node.js", "AWS", "DSA"],
      filterMode: {
        eligibleDrives: ["Zoho SDE", "Freshworks", "Amazon Intern"],
        ineligibleDrives: ["TCS Ninja (Applied already)"],
        topMatches: "92% for Zoho, 89% for Freshworks"
      },
      guidanceMode: {
        nextSteps: ["Focus on system design", "Complete AWS certification", "Build scalable project"],
        careerPath: "Backend SDE → Senior Engineer (2-3 years)",
        recommendations: "Ready for product companies. Consider negotiating offers."
      }
    },
    {
      id: 2,
      name: "Rohan Kumar",
      email: "rohan.kumar@svce.ac.in",
      branch: "IT",
      year: "Final",
      cgpa: 8.2,
      readinessScore: 76,
      status: "needs-prep",
      applications: 5,
      interviews: 1,
      skillsMatch: ["Python", "React", "SQL"],
      filterMode: {
        eligibleDrives: ["Infosys Power", "Wipro WILP", "Cognizant"],
        ineligibleDrives: ["Zoho (CGPA < 8.5)"],
        topMatches: "81% for Infosys, 78% for Wipro"
      },
      guidanceMode: {
        nextSteps: ["Improve DSA skills urgently", "Complete one more internship", "Build portfolio project"],
        careerPath: "Junior Developer → Mid-level (3 years)",
        recommendations: "Target service-based first, then transition to product companies after 1 year."
      }
    },
    {
      id: 3,
      name: "Priya Menon",
      email: "priya.menon@svce.ac.in",
      branch: "ECE",
      year: "Final",
      cgpa: 7.1,
      readinessScore: 58,
      status: "at-risk",
      applications: 2,
      interviews: 0,
      skillsMatch: ["C++", "Basic Web"],
      filterMode: {
        eligibleDrives: ["Mass Recruiters (TCS, Wipro, Cognizant)"],
        ineligibleDrives: ["Most product companies (skill/CGPA gaps)"],
        topMatches: "65% for TCS, 62% for Wipro"
      },
      guidanceMode: {
        nextSteps: [
          "URGENT: Complete web development bootcamp",
          "Build 3 projects in next 2 months",
          "Get internship experience ASAP",
          "Consider pivot to embedded systems (ECE strength)"
        ],
        careerPath: "Needs 3-4 months intensive preparation",
        recommendations: "Focus on mass recruiters. Consider off-campus after skill development."
      }
    },
  ]

  const getStatusBadge = (status) => {
    const config = {
      "job-ready": { label: "Job-Ready", className: "bg-green-500/10 text-green-700 border-green-500/20" },
      "needs-prep": { label: "Needs Prep", className: "bg-yellow-500/10 text-yellow-700 border-yellow-500/20" },
      "at-risk": { label: "At-Risk", className: "bg-red-500/10 text-red-700 border-red-500/20" },
    }
    return config[status]
  }

  const getScoreColor = (score) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-blue-600"
    return "text-yellow-600"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/20">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <motion.div className="mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="mb-2 text-3xl font-bold text-slate-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Student Management
          </h1>
          <p className="text-slate-600">View and manage all student profiles with AI insights</p>
        </motion.div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <Input
                    placeholder="Search by name, email, skills..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={deptFilter} onValueChange={setDeptFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="cse">CSE</SelectItem>
                  <SelectItem value="it">IT</SelectItem>
                  <SelectItem value="ece">ECE</SelectItem>
                  <SelectItem value="eee">EEE</SelectItem>
                </SelectContent>
              </Select>
              <Select value={readinessFilter} onValueChange={setReadinessFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Readiness</SelectItem>
                  <SelectItem value="ready">Job-Ready</SelectItem>
                  <SelectItem value="prep">Needs Prep</SelectItem>
                  <SelectItem value="risk">At-Risk</SelectItem>
                </SelectContent>
              </Select>
              <Select value={viewMode} onValueChange={setViewMode}>
                <SelectTrigger className="border-primary/50 bg-primary/5">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="filter">Filter Mode</SelectItem>
                  <SelectItem value="guidance">Guidance Mode</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Dual-Mode Indicator */}
        <div className="mb-6 flex items-center justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 px-6 py-3 border border-primary/20">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="font-semibold text-slate-900">
              {viewMode === "filter" ? "Filter Mode: Showing Eligibility & Matching" : "Guidance Mode: Showing Career Roadmaps"}
            </span>
          </div>
        </div>

        {/* Students List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-600">Showing {students.length} students</p>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export CSV
            </Button>
          </div>

          {students.map((student, index) => {
            const statusBadge = getStatusBadge(student.status)
            
            return (
              <motion.div
                key={student.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-slate-200/60 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      {/* Avatar */}
                      <div className="flex-shrink-0">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 text-2xl font-bold text-primary">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>

                      {/* Student Info */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              {student.name}
                            </h3>
                            <p className="text-sm text-slate-600">{student.email}</p>
                            <div className="mt-2 flex flex-wrap gap-2">
                              <Badge variant="outline">{student.branch}</Badge>
                              <Badge variant="outline">CGPA: {student.cgpa}</Badge>
                              <Badge variant="outline">{student.applications} Applications</Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="mb-2 rounded-xl border-2 border-primary/20 bg-primary/5 px-4 py-2">
                              <p className="text-xs text-slate-600">Readiness Score</p>
                              <p className={cn("text-2xl font-bold", getScoreColor(student.readinessScore))}>
                                {student.readinessScore}
                              </p>
                            </div>
                            <Badge className={statusBadge.className}>
                              {statusBadge.label}
                            </Badge>
                          </div>
                        </div>

                        {/* Skills */}
                        <div className="mb-4">
                          <p className="text-xs font-semibold text-slate-700 mb-2">Skills:</p>
                          <div className="flex flex-wrap gap-2">
                            {student.skillsMatch.map((skill, i) => (
                              <Badge key={i} className="bg-primary/10 text-primary border-primary/20 text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* DUAL-MODE CONTENT */}
                        {viewMode === "filter" ? (
                          /* FILTER MODE - Eligibility */
                          <div className="space-y-3">
                            <div className="rounded-lg bg-green-50 p-4 border border-green-200">
                              <p className="text-sm font-semibold text-green-800 mb-2 flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4" />
                                Eligible for {student.filterMode.eligibleDrives.length} drives:
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {student.filterMode.eligibleDrives.map((drive, i) => (
                                  <Badge key={i} className="bg-green-600/10 text-green-700 border-green-600/20 text-xs">
                                    {drive}
                                  </Badge>
                                ))}
                              </div>
                              <p className="mt-2 text-xs text-green-700">
                                <strong>Top Matches:</strong> {student.filterMode.topMatches}
                              </p>
                            </div>

                            {student.filterMode.ineligibleDrives.length > 0 && (
                              <div className="rounded-lg bg-red-50 p-4 border border-red-200">
                                <p className="text-sm font-semibold text-red-800 mb-2 flex items-center gap-2">
                                  <XCircle className="h-4 w-4" />
                                  Not eligible:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {student.filterMode.ineligibleDrives.map((drive, i) => (
                                    <Badge key={i} className="bg-red-600/10 text-red-700 border-red-600/20 text-xs">
                                      {drive}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ) : (
                          /* GUIDANCE MODE - Career Roadmap */
                          <div className="space-y-3">
                            <div className="rounded-lg bg-blue-50 p-4 border border-blue-200">
                              <p className="text-sm font-semibold text-blue-800 mb-2 flex items-center gap-2">
                                <Target className="h-4 w-4" />
                                Recommended Next Steps:
                              </p>
                              <ul className="space-y-1 pl-5">
                                {student.guidanceMode.nextSteps.map((step, i) => (
                                  <li key={i} className="text-sm text-blue-700 list-disc">{step}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="rounded-lg bg-purple-50 p-4 border border-purple-200">
                              <p className="text-sm font-semibold text-purple-800 mb-1">Career Path:</p>
                              <p className="text-sm text-purple-700">{student.guidanceMode.careerPath}</p>
                            </div>

                            <div className="rounded-lg bg-green-50 p-4 border border-green-200">
                              <p className="text-sm font-semibold text-green-800 mb-1">AI Recommendation:</p>
                              <p className="text-sm text-green-700">{student.guidanceMode.recommendations}</p>
                            </div>
                          </div>
                        )}

                        {/* Actions */}
                        <div className="mt-4 flex gap-2">
                          <Button variant="outline" size="sm" className="gap-2">
                            <Eye className="h-4 w-4" />
                            Full Profile
                          </Button>
                          <Button variant="outline" size="sm" className="gap-2">
                            <Mail className="h-4 w-4" />
                            Send Email
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
