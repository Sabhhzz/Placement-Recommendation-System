import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Upload, 
  User, 
  GraduationCap, 
  Code, 
  Award, 
  Briefcase,
  Target,
  Link as LinkIcon,
  Github,
  Linkedin,
  Plus,
  X,
  FileText
} from "lucide-react"
import { motion } from "framer-motion"

export default function StudentProfile() {
  const [skills, setSkills] = useState(["React", "Node.js", "MongoDB", "JavaScript", "Python", "Git"])
  const [newSkill, setNewSkill] = useState("")
  const [projects, setProjects] = useState([
    { title: "E-Commerce Platform", tech: "React, Node.js, MongoDB", github: "github.com/user/ecommerce" },
    { title: "AI Chatbot", tech: "Python, OpenAI, Flask", github: "github.com/user/chatbot" },
  ])

  const student = {
    name: "Haricharan M",
    email: "haricharan@svce.ac.in",
    phone: "+91 98765 43210",
    branch: "Computer Science Engineering",
    year: "Final Year",
    cgpa: 8.4,
    backlogs: 0,
    linkedin: "linkedin.com/in/haricharan",
    github: "github.com/haricharan",
    resumeUploaded: true,
    profileCompletion: 85
  }

  const certifications = [
    { name: "AWS Certified Solutions Architect", issuer: "Amazon", date: "Dec 2024" },
    { name: "React Advanced Concepts", issuer: "Udemy", date: "Oct 2024" },
    { name: "Smart India Hackathon Finalist", issuer: "GOI", date: "Aug 2024" },
  ]

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()])
      setNewSkill("")
    }
  }

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter(s => s !== skillToRemove))
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
            My Profile
          </h1>
          <p className="text-slate-600">Manage your academic and professional information</p>
        </motion.div>

        {/* Profile Completion */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="border-slate-200/60 bg-gradient-to-r from-primary/10 to-accent/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="font-semibold text-slate-900">Profile Completion</p>
                  <p className="text-sm text-slate-600">Complete your profile to get better job matches</p>
                </div>
                <span className="text-3xl font-bold text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {student.profileCompletion}%
                </span>
              </div>
              <div className="h-3 w-full rounded-full bg-slate-200">
                <div 
                  className="h-3 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                  style={{ width: `${student.profileCompletion}%` }}
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Column - Basic Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Personal Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-slate-200/60 bg-white/90 backdrop-blur-sm shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Personal Info
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-slate-700">Full Name</Label>
                    <Input value={student.name} className="mt-1 bg-white" />
                  </div>
                  <div>
                    <Label className="text-slate-700">Email</Label>
                    <Input value={student.email} disabled className="mt-1 bg-slate-50" />
                  </div>
                  <div>
                    <Label className="text-slate-700">Phone</Label>
                    <Input value={student.phone} className="mt-1 bg-white" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Academic Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border-slate-200/60 bg-white/90 backdrop-blur-sm shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Academic Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-slate-700">Branch</Label>
                    <Input value={student.branch} disabled className="mt-1 bg-slate-50" />
                  </div>
                  <div>
                    <Label className="text-slate-700">Year</Label>
                    <Input value={student.year} disabled className="mt-1 bg-slate-50" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-slate-700">CGPA</Label>
                      <Input value={student.cgpa} className="mt-1 bg-white" />
                    </div>
                    <div>
                      <Label className="text-slate-700">Backlogs</Label>
                      <Input value={student.backlogs} className="mt-1 bg-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Resume Upload */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="border-slate-200/60 bg-white/90 backdrop-blur-sm shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Resume
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {student.resumeUploaded ? (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 rounded-lg bg-green-50 p-4 border border-green-200">
                        <FileText className="h-8 w-8 text-green-600" />
                        <div className="flex-1">
                          <p className="font-semibold text-green-900">Resume_Haricharan.pdf</p>
                          <p className="text-xs text-green-700">Uploaded Jan 15, 2025</p>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full gap-2">
                        <Upload className="h-4 w-4" />
                        Replace Resume
                      </Button>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center">
                      <Upload className="mx-auto h-12 w-12 text-slate-400 mb-3" />
                      <p className="text-sm text-slate-600 mb-4">Upload your resume (PDF/DOCX)</p>
                      <Button className="bg-gradient-to-r from-primary to-accent">
                        Choose File
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column - Skills, Projects, etc */}
          <div className="lg:col-span-2 space-y-6">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-slate-200/60 bg-white/90 backdrop-blur-sm shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    Technical Skills
                  </CardTitle>
                  <CardDescription>Add skills that match your target roles</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <Badge key={index} className="bg-primary/10 text-primary border-primary/20 pr-1">
                        {skill}
                        <button
                          onClick={() => handleRemoveSkill(skill)}
                          className="ml-2 rounded-full p-0.5 hover:bg-primary/20"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Add skill (e.g., React, Python)"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
                      className="bg-white"
                    />
                    <Button onClick={handleAddSkill} size="icon" className="bg-gradient-to-r from-primary to-accent flex-shrink-0">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Projects */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border-slate-200/60 bg-white/90 backdrop-blur-sm shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      Projects
                    </CardTitle>
                    <Button size="sm" className="bg-gradient-to-r from-primary to-accent">
                      <Plus className="mr-1 h-4 w-4" />
                      Add Project
                    </Button>
                  </div>
                  <CardDescription>Showcase your best work</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {projects.map((project, index) => (
                    <div key={index} className="rounded-lg border border-slate-200 bg-slate-50/50 p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-slate-900">{project.title}</h4>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-sm text-slate-600 mb-3">{project.tech}</p>
                      <div className="flex items-center gap-2 text-sm">
                        <Github className="h-4 w-4 text-slate-600" />
                        <a href={`https://${project.github}`} className="text-primary hover:underline">
                          {project.github}
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="border-slate-200/60 bg-white/90 backdrop-blur-sm shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      Certifications & Achievements
                    </CardTitle>
                    <Button size="sm" className="bg-gradient-to-r from-primary to-accent">
                      <Plus className="mr-1 h-4 w-4" />
                      Add
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start justify-between rounded-lg border border-slate-200 bg-white p-4">
                      <div>
                        <p className="font-semibold text-slate-900">{cert.name}</p>
                        <p className="text-sm text-slate-600">{cert.issuer} • {cert.date}</p>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Career Preferences */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="border-slate-200/60 bg-white/90 backdrop-blur-sm shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Career Preferences
                  </CardTitle>
                  <CardDescription>Help AI find the best matches for you</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-slate-700">Target Roles</Label>
                    <Input placeholder="e.g., Software Engineer, Full Stack Developer" className="mt-1 bg-white" />
                  </div>
                  <div>
                    <Label className="text-slate-700">Preferred Companies</Label>
                    <Input placeholder="e.g., Zoho, Freshworks, Google" className="mt-1 bg-white" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-slate-700">Preferred Location</Label>
                      <Input placeholder="e.g., Chennai, Bangalore" className="mt-1 bg-white" />
                    </div>
                    <div>
                      <Label className="text-slate-700">Expected Salary</Label>
                      <Input placeholder="e.g., 6+ LPA" className="mt-1 bg-white" />
                    </div>
                  </div>
                  <div>
                    <Label className="text-slate-700">Domain Focus</Label>
                    <Input placeholder="e.g., Web Development, AI/ML, Backend" className="mt-1 bg-white" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="border-slate-200/60 bg-white/90 backdrop-blur-sm shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LinkIcon className="h-5 w-5 text-primary" />
                    Professional Links
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-slate-700 flex items-center gap-2">
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </Label>
                    <Input value={student.linkedin} className="mt-1 bg-white" />
                  </div>
                  <div>
                    <Label className="text-slate-700 flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      GitHub
                    </Label>
                    <Input value={student.github} className="mt-1 bg-white" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Save Button */}
            <Button className="w-full bg-gradient-to-r from-primary to-accent shadow-lg">
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
