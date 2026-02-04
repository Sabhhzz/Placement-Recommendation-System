import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Briefcase, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  XCircle,
  Upload,
  Calendar,
  Building2,
  Mail
} from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function MyApplications() {
  const [showAddInternship, setShowAddInternship] = useState(false)

  const applications = [
    {
      id: 1,
      company: "Zoho Corporation",
      role: "Software Development Engineer",
      package: "6.5 LPA",
      appliedDate: "Jan 28, 2025",
      status: "Interview Scheduled",
      currentStage: 3,
      timeline: [
        { stage: "Applied", date: "Jan 28", completed: true },
        { stage: "Resume Screened", date: "Jan 30", completed: true },
        { stage: "Shortlisted", date: "Feb 1", completed: true },
        { stage: "Interview", date: "Feb 8", completed: false, upcoming: true },
        { stage: "Offer", date: "TBD", completed: false },
      ],
      interviewDate: "Feb 8, 2025 - 10:00 AM",
      logo: "https://logo.clearbit.com/zoho.com"
    },
    {
      id: 2,
      company: "Wipro",
      role: "Project Engineer - WILP",
      package: "3.5 LPA",
      appliedDate: "Jan 25, 2025",
      status: "Shortlisted",
      currentStage: 2,
      timeline: [
        { stage: "Applied", date: "Jan 25", completed: true },
        { stage: "Resume Screened", date: "Jan 27", completed: true },
        { stage: "Shortlisted", date: "Jan 30", completed: true, upcoming: true },
        { stage: "Interview", date: "TBD", completed: false },
        { stage: "Offer", date: "TBD", completed: false },
      ],
      logo: "https://logo.clearbit.com/wipro.com"
    },
    {
      id: 3,
      company: "TCS",
      role: "Digital - Ninja",
      package: "3.36 LPA",
      appliedDate: "Jan 20, 2025",
      status: "Applied",
      currentStage: 0,
      timeline: [
        { stage: "Applied", date: "Jan 20", completed: true, upcoming: true },
        { stage: "Resume Screening", date: "Pending", completed: false },
        { stage: "Shortlist", date: "TBD", completed: false },
        { stage: "Interview", date: "TBD", completed: false },
        { stage: "Offer", date: "TBD", completed: false },
      ],
      logo: "https://logo.clearbit.com/tcs.com"
    },
  ]

  const internships = [
    {
      id: 1,
      company: "Amazon Web Services",
      role: "SDE Intern",
      stipend: "₹50,000/month",
      duration: "6 months",
      status: "completed",
      startDate: "June 2024",
      endDate: "Dec 2024",
      verified: true,
      skills: ["Python", "AWS Lambda", "DynamoDB"],
      achievements: "Built serverless architecture handling 10K+ requests/day"
    },
    {
      id: 2,
      company: "Startup (Referral)",
      role: "Full Stack Intern",
      stipend: "₹15,000/month",
      duration: "3 months",
      status: "ongoing",
      startDate: "Jan 2025",
      endDate: "Mar 2025",
      verified: false,
      skills: ["React", "Node.js", "MongoDB"],
      achievements: "Currently working on customer dashboard"
    },
  ]

  const getStatusColor = (status) => {
    const colors = {
      "Interview Scheduled": "bg-blue-500/10 text-blue-700 border-blue-500/20",
      "Shortlisted": "bg-green-500/10 text-green-700 border-green-500/20",
      "Applied": "bg-slate-500/10 text-slate-700 border-slate-500/20",
      "Rejected": "bg-red-500/10 text-red-700 border-red-500/20",
      "Offer Received": "bg-purple-500/10 text-purple-700 border-purple-500/20",
    }
    return colors[status] || "bg-slate-500/10 text-slate-700"
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
            My Applications
          </h1>
          <p className="text-slate-600">Track your placement journey and manage internships</p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mb-6 grid gap-4 sm:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="border-slate-200/60 bg-gradient-to-br from-blue-50 to-white">
            <CardContent className="p-4">
              <p className="text-sm text-slate-600">Total Applications</p>
              <p className="text-2xl font-bold text-slate-900">{applications.length}</p>
            </CardContent>
          </Card>
          <Card className="border-slate-200/60 bg-gradient-to-br from-green-50 to-white">
            <CardContent className="p-4">
              <p className="text-sm text-slate-600">Shortlisted</p>
              <p className="text-2xl font-bold text-slate-900">2</p>
            </CardContent>
          </Card>
          <Card className="border-slate-200/60 bg-gradient-to-br from-purple-50 to-white">
            <CardContent className="p-4">
              <p className="text-sm text-slate-600">Interviews</p>
              <p className="text-2xl font-bold text-slate-900">1</p>
            </CardContent>
          </Card>
          <Card className="border-slate-200/60 bg-gradient-to-br from-yellow-50 to-white">
            <CardContent className="p-4">
              <p className="text-sm text-slate-600">Internships</p>
              <p className="text-2xl font-bold text-slate-900">{internships.length}</p>
            </CardContent>
          </Card>
        </motion.div>

        <Tabs defaultValue="applications">
          <TabsList className="grid w-full grid-cols-2 bg-slate-100">
            <TabsTrigger value="applications">
              <Briefcase className="mr-2 h-4 w-4" />
              Campus Applications
            </TabsTrigger>
            <TabsTrigger value="internships">
              <TrendingUp className="mr-2 h-4 w-4" />
              Internships
            </TabsTrigger>
          </TabsList>

          {/* Applications Tab with Timeline */}
          <TabsContent value="applications" className="mt-6 space-y-6">
            {applications.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-slate-200/60 bg-white/90 backdrop-blur-sm shadow-md">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-slate-100 p-2">
                          <img 
                            src={app.logo} 
                            alt={app.company}
                            className="h-full w-full object-contain"
                            onError={(e) => {
                              e.target.style.display = 'none'
                              e.target.parentElement.innerHTML = `<div class="text-xs font-bold text-primary">${app.company.slice(0,2)}</div>`
                            }}
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {app.role}
                          </h3>
                          <p className="text-sm text-slate-600">{app.company}</p>
                          <p className="mt-1 text-sm font-medium text-primary">{app.package}</p>
                        </div>
                      </div>
                      <Badge className={getStatusColor(app.status)}>
                        {app.status}
                      </Badge>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                      {/* Vertical line */}
                      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200" />
                      <motion.div
                        className="absolute left-4 top-0 w-0.5 bg-gradient-to-b from-primary to-accent origin-top"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: app.currentStage / app.timeline.length }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />

                      <div className="space-y-6">
                        {app.timeline.map((stage, stageIndex) => (
                          <div key={stageIndex} className="relative flex items-start gap-4 pl-10">
                            {/* Dot */}
                            <div className={cn(
                              "absolute left-0 flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all",
                              stage.completed 
                                ? "border-primary bg-primary shadow-lg shadow-primary/20" 
                                : stage.upcoming
                                ? "border-primary bg-white shadow-md"
                                : "border-slate-300 bg-white"
                            )}>
                              {stage.completed ? (
                                <CheckCircle2 className="h-4 w-4 text-white" />
                              ) : stage.upcoming ? (
                                <Clock className="h-4 w-4 text-primary" />
                              ) : (
                                <div className="h-2 w-2 rounded-full bg-slate-300" />
                              )}
                            </div>

                            {/* Content */}
                            <div className="flex-1 pb-2">
                              <div className={cn(
                                "rounded-lg p-4 transition-all",
                                stage.completed 
                                  ? "bg-green-50 border border-green-200/60" 
                                  : stage.upcoming
                                  ? "bg-blue-50 border border-blue-200/60"
                                  : "bg-slate-50 border border-slate-200/60"
                              )}>
                                <p className={cn(
                                  "font-semibold mb-1",
                                  stage.completed 
                                    ? "text-green-900" 
                                    : stage.upcoming
                                    ? "text-blue-900"
                                    : "text-slate-700"
                                )}>
                                  {stage.stage}
                                </p>
                                <p className="text-sm text-slate-600">{stage.date}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Interview Details (if scheduled) */}
                    {app.interviewDate && (
                      <div className="mt-6 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 p-4 border border-primary/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <p className="font-semibold text-slate-900">Upcoming Interview</p>
                        </div>
                        <p className="text-sm text-slate-700">{app.interviewDate}</p>
                        <Button variant="outline" size="sm" className="mt-3">
                          Add to Calendar
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>

          {/* Internships Tab */}
          <TabsContent value="internships" className="mt-6 space-y-4">
            {/* My Internships */}
            {internships.map((internship, index) => (
              <motion.div
                key={internship.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-slate-200/60 bg-white/90 backdrop-blur-sm shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-3">
                          <h3 className="text-lg font-bold text-slate-900 flex-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {internship.role}
                          </h3>
                          <div className="flex gap-2">
                            <Badge className={
                              internship.status === "completed" 
                                ? "bg-green-500/10 text-green-700 border-green-500/20"
                                : "bg-blue-500/10 text-blue-700 border-blue-500/20"
                            }>
                              {internship.status === "completed" ? "Completed" : "Ongoing"}
                            </Badge>
                            {internship.verified && (
                              <Badge className="bg-purple-500/10 text-purple-700 border-purple-500/20">
                                <CheckCircle2 className="mr-1 h-3 w-3" />
                                Verified
                              </Badge>
                            )}
                          </div>
                        </div>

                        <p className="text-sm text-slate-600 mb-3">{internship.company}</p>

                        <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-4">
                          <span>💰 {internship.stipend}</span>
                          <span>📅 {internship.duration}</span>
                          <span>🗓️ {internship.startDate} - {internship.endDate}</span>
                        </div>

                        <div className="mb-3">
                          <p className="mb-2 text-xs font-semibold text-slate-700">Skills Gained:</p>
                          <div className="flex flex-wrap gap-2">
                            {internship.skills.map((skill, i) => (
                              <Badge key={i} variant="outline" className="bg-primary/5 text-primary border-primary/20 text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {internship.achievements && (
                          <div className="rounded-lg bg-slate-50 p-3 border border-slate-200">
                            <p className="text-sm text-slate-700">
                              <strong>Key Achievement:</strong> {internship.achievements}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {!internship.verified && internship.status === "completed" && (
                      <div className="mt-4 rounded-lg bg-yellow-50 p-4 border border-yellow-200">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-yellow-800 mb-2">
                              Verification Pending
                            </p>
                            <p className="text-sm text-yellow-700 mb-3">
                              Upload your offer letter or completion certificate to get this internship verified
                            </p>
                            <Button size="sm" variant="outline" className="gap-2">
                              <Upload className="h-4 w-4" />
                              Upload Certificate
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Add New Internship Card */}
            <Card className="border-dashed border-2 border-primary/30 bg-primary/5">
              <CardContent className="p-8">
                <div className="text-center">
                  <TrendingUp className="mx-auto mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 text-lg font-semibold text-slate-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Add External Internship
                  </h3>
                  <p className="mb-4 text-sm text-slate-600">
                    Found an internship on LinkedIn, Internshala, or through referrals? Add it here and get AI validation!
                  </p>
                  <Button 
                    onClick={() => setShowAddInternship(!showAddInternship)}
                    className="bg-gradient-to-r from-primary to-accent"
                  >
                    {showAddInternship ? "Cancel" : "Add Internship"}
                  </Button>
                </div>

                {/* Add Internship Form */}
                {showAddInternship && (
                  <motion.div
                    className="mt-6 space-y-4 border-t border-primary/20 pt-6"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label>Company Name</Label>
                        <Input placeholder="e.g., Google, Startup Name" className="bg-white" />
                      </div>
                      <div>
                        <Label>Role/Position</Label>
                        <Input placeholder="e.g., Backend Intern" className="bg-white" />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label>Stipend</Label>
                        <Input placeholder="e.g., ₹20,000/month" className="bg-white" />
                      </div>
                      <div>
                        <Label>Duration</Label>
                        <Input placeholder="e.g., 3 months" className="bg-white" />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label>Start Date</Label>
                        <Input type="date" className="bg-white" />
                      </div>
                      <div>
                        <Label>Status</Label>
                        <select className="w-full rounded-md border border-slate-300 p-2 text-sm">
                          <option>Applied</option>
                          <option>Ongoing</option>
                          <option>Completed</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label>Skills You'll Gain</Label>
                      <Input placeholder="e.g., React, Node.js, MongoDB (comma-separated)" className="bg-white" />
                    </div>

                    <Button className="w-full bg-gradient-to-r from-primary to-accent">
                      <Sparkles className="mr-2 h-4 w-4" />
                      Add & Get AI Validation
                    </Button>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
