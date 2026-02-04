import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Search, 
  Briefcase, 
  MapPin, 
  Calendar, 
  TrendingUp,
  Building2,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Filter
} from "lucide-react"
import { motion } from "framer-motion"

export default function CampusOpportunities() {
  const [searchQuery, setSearchQuery] = useState("")
  const [roleFilter, setRoleFilter] = useState("all")
  const [packageFilter, setPackageFilter] = useState("all")

  const campusJobs = [
    {
      id: 1,
      company: "Zoho Corporation",
      role: "Software Development Engineer",
      package: "6.5 LPA",
      location: "Chennai",
      type: "Full-Time",
      deadline: "Feb 15, 2025",
      driveDate: "Feb 20, 2025",
      minCGPA: 7.5,
      branches: ["CSE", "IT", "ECE"],
      skills: ["React", "Node.js", "DSA", "System Design"],
      matchPercentage: 92,
      logo: "https://logo.clearbit.com/zoho.com",
      aiMatch: {
        strengths: ["Your React and Node.js projects align perfectly", "CGPA 8.4 exceeds requirement", "Previous hackathon experience is a plus"],
        gaps: ["Consider improving system design knowledge", "Practice more DSA problems"]
      },
      studentsApplied: 156,
      slots: 25
    },
    {
      id: 2,
      company: "Freshworks",
      role: "Full Stack Developer",
      package: "7.2 LPA",
      location: "Bangalore",
      type: "Full-Time",
      deadline: "Feb 18, 2025",
      driveDate: "Feb 25, 2025",
      minCGPA: 7.0,
      branches: ["CSE", "IT"],
      skills: ["JavaScript", "React", "Ruby on Rails", "PostgreSQL"],
      matchPercentage: 87,
      logo: "https://logo.clearbit.com/freshworks.com",
      aiMatch: {
        strengths: ["Full-stack skills match requirements", "Your internship demonstrates practical experience"],
        gaps: ["Ruby on Rails experience would strengthen application", "Add cloud platform knowledge"]
      },
      studentsApplied: 98,
      slots: 15
    },
    {
      id: 3,
      company: "Infosys",
      role: "Power Programmer",
      package: "4.5 LPA + Incentives",
      location: "Multiple Locations",
      type: "Full-Time",
      deadline: "Feb 10, 2025",
      driveDate: "Feb 14, 2025",
      minCGPA: 7.0,
      branches: ["CSE", "IT", "ECE", "EEE"],
      skills: ["Java", "Python", "C++", "DSA", "Problem Solving"],
      matchPercentage: 81,
      logo: "https://logo.clearbit.com/infosys.com",
      aiMatch: {
        strengths: ["Strong fundamentals and CGPA", "Competitive programming background"],
        gaps: ["Limited Java experience", "Focus on advanced DSA topics"]
      },
      studentsApplied: 284,
      slots: 50
    },
  ]

  const internships = [
    {
      id: 1,
      company: "Amazon Web Services",
      role: "SDE Intern",
      stipend: "₹50,000/month",
      duration: "6 months",
      location: "Hyderabad",
      deadline: "Feb 12, 2025",
      skills: ["Python", "AWS", "Linux", "Networking"],
      matchPercentage: 78,
      type: "campus",
      logo: "https://logo.clearbit.com/aws.amazon.com",
      aiGuidance: "Strong fit for your cloud interests. This will significantly boost your backend career path."
    },
    {
      id: 2,
      type: "ai-suggested",
      title: "AI Recommends: Look for Backend Development Internships",
      description: "Based on your profile, you should search for internships focusing on:",
      suggestedSkills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Microservices"],
      platforms: ["LinkedIn", "Internshala", "AngelList"],
      why: "Your current skillset aligns with backend roles. An internship will give you production experience and strengthen your placement prospects for companies like Zoho, Freshworks."
    },
  ]

  const getMatchColor = (match) => {
    if (match >= 85) return "text-green-600 bg-green-50 border-green-200"
    if (match >= 70) return "text-blue-600 bg-blue-50 border-blue-200"
    return "text-yellow-600 bg-yellow-50 border-yellow-200"
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
            Campus Opportunities
          </h1>
          <p className="text-slate-600">
            Discover jobs and internships with AI-powered recommendations
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="border-slate-200/60 bg-white/90 backdrop-blur-sm shadow-md">
            <CardContent className="p-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="lg:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <Input
                      placeholder="Search by company, role, or skills..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-white"
                    />
                  </div>
                </div>
                <Select value={roleFilter} onValueChange={setRoleFilter}>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Role Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Roles</SelectItem>
                    <SelectItem value="sde">Software Engineer</SelectItem>
                    <SelectItem value="fullstack">Full Stack</SelectItem>
                    <SelectItem value="data">Data Science</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={packageFilter} onValueChange={setPackageFilter}>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Package Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Packages</SelectItem>
                    <SelectItem value="high">7+ LPA</SelectItem>
                    <SelectItem value="mid">5-7 LPA</SelectItem>
                    <SelectItem value="entry">3-5 LPA</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tabs for Jobs vs Internships */}
        <Tabs defaultValue="jobs" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-slate-100">
            <TabsTrigger value="jobs" className="data-[state=active]:bg-white">
              <Briefcase className="mr-2 h-4 w-4" />
              Campus Drives ({campusJobs.length})
            </TabsTrigger>
            <TabsTrigger value="internships" className="data-[state=active]:bg-white">
              <TrendingUp className="mr-2 h-4 w-4" />
              Internships
            </TabsTrigger>
          </TabsList>

          {/* Jobs Tab */}
          <TabsContent value="jobs" className="mt-6 space-y-4">
            {campusJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-slate-200/60 bg-white/90 backdrop-blur-sm shadow-md hover:shadow-xl transition-all group">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-6 lg:flex-row">
                      {/* Left: Company Info */}
                      <div className="flex-1">
                        <div className="mb-4 flex items-start gap-4">
                          {/* Company Logo */}
                          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-slate-100 p-2 shadow-sm">
                            <img 
                              src={job.logo} 
                              alt={job.company}
                              className="h-full w-full object-contain"
                              onError={(e) => {
                                e.target.style.display = 'none'
                                e.target.parentElement.innerHTML = `<div class="text-sm font-bold text-primary">${job.company.slice(0,2)}</div>`
                              }}
                            />
                          </div>

                          <div className="flex-1">
                            <div className="mb-2 flex items-start justify-between gap-3">
                              <div>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                  {job.role}
                                </h3>
                                <p className="text-sm font-medium text-slate-700">{job.company}</p>
                              </div>
                              
                              {/* Match Score Badge */}
                              <div className={`rounded-xl border-2 px-4 py-2 ${getMatchColor(job.matchPercentage)}`}>
                                <div className="flex items-center gap-1">
                                  <Sparkles className="h-4 w-4" />
                                  <span className="text-lg font-bold">{job.matchPercentage}%</span>
                                </div>
                                <p className="text-xs">AI Match</p>
                              </div>
                            </div>

                            {/* Job Details */}
                            <div className="mb-4 flex flex-wrap gap-4 text-sm text-slate-600">
                              <span className="flex items-center gap-1.5">
                                <Building2 className="h-4 w-4" />
                                {job.package}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <MapPin className="h-4 w-4" />
                                {job.location}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <Calendar className="h-4 w-4" />
                                Drive: {job.driveDate}
                              </span>
                            </div>

                            {/* Eligibility */}
                            <div className="mb-4 flex flex-wrap gap-2">
                              <Badge variant="outline" className="bg-slate-50">
                                Min CGPA: {job.minCGPA}
                              </Badge>
                              {job.branches.map((branch) => (
                                <Badge key={branch} variant="outline" className="bg-slate-50">
                                  {branch}
                                </Badge>
                              ))}
                            </div>

                            {/* Required Skills */}
                            <div>
                              <p className="mb-2 text-xs font-semibold text-slate-700">Required Skills:</p>
                              <div className="flex flex-wrap gap-2">
                                {job.skills.map((skill, i) => (
                                  <Badge key={i} className="bg-primary/10 text-primary border-primary/20 text-xs">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* AI Matching Explanation */}
                        <div className="space-y-3">
                          {/* Why you match */}
                          <div className="rounded-lg bg-green-50 p-4 border border-green-200/60">
                            <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-green-800">
                              <CheckCircle2 className="h-4 w-4" />
                              Why you're a strong match:
                            </p>
                            <ul className="space-y-1 pl-6">
                              {job.aiMatch.strengths.map((strength, i) => (
                                <li key={i} className="text-sm text-green-700 list-disc">{strength}</li>
                              ))}
                            </ul>
                          </div>

                          {/* What to improve */}
                          <div className="rounded-lg bg-blue-50 p-4 border border-blue-200/60">
                            <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-blue-800">
                              <AlertCircle className="h-4 w-4" />
                              To strengthen your application:
                            </p>
                            <ul className="space-y-1 pl-6">
                              {job.aiMatch.gaps.map((gap, i) => (
                                <li key={i} className="text-sm text-blue-700 list-disc">{gap}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Right: Actions */}
                      <div className="flex flex-col justify-between lg:w-64">
                        <div className="space-y-3">
                          <div className="rounded-lg bg-slate-50 p-4 border border-slate-200">
                            <p className="text-xs text-slate-600 mb-1">Application Deadline</p>
                            <p className="font-semibold text-slate-900">{job.deadline}</p>
                            <p className="mt-2 text-xs text-slate-500">
                              {job.studentsApplied} students applied • {job.slots} slots
                            </p>
                          </div>
                        </div>

                        <div className="mt-4 space-y-2">
                          <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                            Apply Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                          <Button variant="outline" className="w-full">
                            View Full Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>

          {/* Internships Tab */}
          <TabsContent value="internships" className="mt-6 space-y-4">
            {/* AI Guidance Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Sparkles className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 font-bold text-slate-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        🎯 AI Internship Guidance
                      </h3>
                      <p className="mb-3 text-sm text-slate-700">
                        {internships.find(i => i.type === "ai-suggested")?.description}
                      </p>
                      <div className="mb-3">
                        <p className="mb-2 text-xs font-semibold text-slate-700">Focus on these technologies:</p>
                        <div className="flex flex-wrap gap-2">
                          {internships.find(i => i.type === "ai-suggested")?.suggestedSkills.map((skill, i) => (
                            <Badge key={i} className="bg-primary/10 text-primary border-primary/20">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 italic">
                        💡 {internships.find(i => i.type === "ai-suggested")?.why}
                      </p>
                      <div className="mt-4">
                        <p className="mb-2 text-xs font-semibold text-slate-700">Search on these platforms:</p>
                        <div className="flex gap-2">
                          {internships.find(i => i.type === "ai-suggested")?.platforms.map((platform) => (
                            <Badge key={platform} variant="outline" className="bg-white">
                              {platform}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Campus Internships */}
            {internships.filter(i => i.type === "campus").map((internship, index) => (
              <motion.div
                key={internship.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 1) * 0.1 }}
              >
                <Card className="border-slate-200/60 bg-white/90 backdrop-blur-sm shadow-md hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-slate-100 p-2">
                          <img 
                            src={internship.logo} 
                            alt={internship.company}
                            className="h-full w-full object-contain"
                            onError={(e) => {
                              e.target.style.display = 'none'
                              e.target.parentElement.innerHTML = `<div class="text-xs font-bold text-primary">${internship.company.slice(0,2)}</div>`
                            }}
                          />
                        </div>

                        <div className="flex-1">
                          <div className="mb-2 flex items-start justify-between gap-3">
                            <div>
                              <h3 className="text-lg font-bold text-slate-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                {internship.role}
                              </h3>
                              <p className="text-sm text-slate-600">{internship.company}</p>
                            </div>
                            <div className={`rounded-lg border px-3 py-1 ${getMatchColor(internship.matchPercentage)}`}>
                              <span className="text-sm font-bold">{internship.matchPercentage}%</span>
                            </div>
                          </div>

                          <div className="mb-3 flex flex-wrap gap-3 text-sm text-slate-600">
                            <span>💰 {internship.stipend}</span>
                            <span>📅 {internship.duration}</span>
                            <span>📍 {internship.location}</span>
                            <span className="text-red-600 font-medium">⏰ Apply by {internship.deadline}</span>
                          </div>

                          <div className="mb-3">
                            <p className="mb-1 text-xs font-semibold text-slate-700">Skills Required:</p>
                            <div className="flex flex-wrap gap-2">
                              {internship.skills.map((skill, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="rounded-lg bg-purple-50 p-3 border border-purple-200/60">
                            <p className="text-sm text-purple-700">
                              <strong>AI Insight:</strong> {internship.aiGuidance}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2 lg:flex-col">
                        <Button className="flex-1 bg-gradient-to-r from-primary to-accent">
                          Apply
                        </Button>
                        <Button variant="outline" className="flex-1">
                          Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Add Your Own Internship CTA */}
            <Card className="border-dashed border-2 border-slate-300 bg-slate-50/50">
              <CardContent className="p-8 text-center">
                <TrendingUp className="mx-auto mb-3 h-12 w-12 text-slate-400" />
                <h3 className="mb-2 font-semibold text-slate-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Found an internship externally?
                </h3>
                <p className="mb-4 text-sm text-slate-600">
                  Add internships you found on LinkedIn, Internshala, or through referrals. AI will validate if it aligns with your career goals.
                </p>
                <Button variant="outline" className="gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Add External Internship
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
