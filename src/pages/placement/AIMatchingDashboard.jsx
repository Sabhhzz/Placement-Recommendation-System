import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Brain, 
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Download,
  Mail,
  Eye
} from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function AIMatchingDashboard() {
  const [selectedDrive, setSelectedDrive] = useState("zoho-sde")
  const [isProcessing, setIsProcessing] = useState(false)

  const drives = [
    { id: "zoho-sde", name: "Zoho - SDE (6.5 LPA)" },
    { id: "freshworks", name: "Freshworks - Full Stack (7.2 LPA)" },
    { id: "infosys", name: "Infosys - Power Programmer (4.5 LPA)" },
  ]

  const rankedStudents = [
    {
      rank: 1,
      name: "Aisha Patel",
      email: "aisha.patel@svce.ac.in",
      branch: "CSE",
      cgpa: 8.9,
      aiScore: 94,
      matchPercentage: 96,
      skills: ["React", "Node.js", "AWS", "DSA"],
      reasoning: {
        strengths: [
          "Exceptional CGPA of 8.9 exceeds requirement by 1.4 points",
          "Perfect tech stack: React + Node.js projects",
          "AWS certification demonstrates cloud expertise",
          "2 previous internships show real-world experience"
        ],
        concerns: [],
        verdict: "Top candidate - Immediate shortlist recommended"
      }
    },
    {
      rank: 2,
      name: "Rohan Kumar",
      email: "rohan.kumar@svce.ac.in",
      branch: "IT",
      cgpa: 8.5,
      aiScore: 88,
      matchPercentage: 89,
      skills: ["JavaScript", "Python", "React", "SQL"],
      reasoning: {
        strengths: [
          "Strong CGPA of 8.5 well above minimum",
          "Solid JavaScript foundation with 4 projects",
          "Google Cloud certification complements requirements"
        ],
        concerns: [
          "Only 1 internship vs top candidates with 2+"
        ],
        verdict: "Strong candidate - Shortlist with confidence"
      }
    },
    {
      rank: 3,
      name: "Priya Sharma",
      email: "priya.sharma@svce.ac.in",
      branch: "CSE",
      cgpa: 7.8,
      aiScore: 76,
      matchPercentage: 78,
      skills: ["React", "Express", "MySQL"],
      reasoning: {
        strengths: [
          "CGPA 7.8 meets minimum requirement",
          "React skills match core technologies"
        ],
        concerns: [
          "Missing AWS/cloud knowledge (important for role)",
          "No certifications to validate skills",
          "Fewer projects than top candidates"
        ],
        verdict: "Borderline - Consider if interview slots available"
      }
    },
  ]

  const handleRunScreening = () => {
    setIsProcessing(true)
    setTimeout(() => setIsProcessing(false), 2000)
  }

  const getScoreColor = (score) => {
    if (score >= 85) return "text-green-600"
    if (score >= 70) return "text-blue-600"
    return "text-yellow-600"
  }

  const getRankBadge = (rank) => {
    if (rank === 1) return "bg-gradient-to-br from-yellow-400 to-yellow-600 text-white"
    if (rank === 2) return "bg-gradient-to-br from-slate-400 to-slate-600 text-white"
    if (rank === 3) return "bg-gradient-to-br from-orange-400 to-orange-600 text-white"
    return "bg-slate-300 text-slate-700"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/20">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <motion.div className="mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                AI Matching Dashboard
              </h1>
              <p className="text-slate-600">Intelligent candidate screening and ranking</p>
            </div>
          </div>
        </motion.div>

        {/* Controls */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Screening Configuration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[250px]">
                <Label className="mb-2 block">Select Campus Drive</Label>
                <Select value={selectedDrive} onValueChange={setSelectedDrive}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {drives.map(d => (
                      <SelectItem key={d.id} value={d.id}>{d.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button 
                  onClick={handleRunScreening}
                  disabled={isProcessing}
                  className="bg-gradient-to-r from-primary to-accent"
                >
                  {isProcessing ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Run AI Screening
                    </>
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
              AI-Ranked Candidates ({rankedStudents.length})
            </h2>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export Results
            </Button>
          </div>

          {rankedStudents.map((student, index) => (
            <motion.div
              key={student.rank}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={cn(
                "border-l-4",
                student.rank === 1 ? "border-l-yellow-500 bg-gradient-to-r from-yellow-50/30 to-white" :
                student.rank === 2 ? "border-l-slate-400 bg-gradient-to-r from-slate-50/30 to-white" :
                "border-l-orange-500 bg-gradient-to-r from-orange-50/30 to-white"
              )}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    {/* Rank */}
                    <div className="flex-shrink-0">
                      <div className={cn("flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg", getRankBadge(student.rank))}>
                        <span className="text-2xl font-bold">#{student.rank}</span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {student.name}
                          </h3>
                          <p className="text-sm text-slate-600">{student.email} • {student.branch}</p>
                          <Badge variant="outline" className="mt-2">CGPA: {student.cgpa}</Badge>
                        </div>
                        <div className="rounded-xl border-2 border-primary/20 bg-primary/5 px-4 py-3 text-center">
                          <p className="text-xs text-slate-600">AI Score</p>
                          <p className={cn("text-3xl font-bold", getScoreColor(student.aiScore))}>
                            {student.aiScore}
                          </p>
                          <p className="text-xs text-slate-600">{student.matchPercentage}% match</p>
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="mb-4">
                        <p className="text-xs font-semibold text-slate-700 mb-2">Skills:</p>
                        <div className="flex flex-wrap gap-2">
                          {student.skills.map((skill, i) => (
                            <Badge key={i} className="bg-primary/10 text-primary border-primary/20 text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* AI Reasoning */}
                      <div className="rounded-xl bg-slate-50 p-5 border">
                        <div className="flex items-start gap-3 mb-4">
                          <Brain className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <h4 className="font-semibold text-slate-900">AI Analysis</h4>
                        </div>

                        {student.reasoning.strengths.length > 0 && (
                          <div className="mb-3">
                            <p className="text-sm font-semibold text-green-700 mb-2 flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4" />
                              Strengths:
                            </p>
                            <ul className="space-y-1 pl-6">
                              {student.reasoning.strengths.map((s, i) => (
                                <li key={i} className="text-sm text-slate-700 list-disc">{s}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {student.reasoning.concerns.length > 0 && (
                          <div className="mb-3">
                            <p className="text-sm font-semibold text-yellow-700 mb-2 flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4" />
                              Concerns:
                            </p>
                            <ul className="space-y-1 pl-6">
                              {student.reasoning.concerns.map((c, i) => (
                                <li key={i} className="text-sm text-slate-700 list-disc">{c}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="rounded-lg bg-primary/5 p-3 border border-primary/20">
                          <p className="text-sm font-semibold text-primary">
                            ✓ {student.reasoning.verdict}
                          </p>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="mt-4 flex gap-2">
                        <Button size="sm" className="bg-gradient-to-r from-primary to-accent gap-2">
                          <CheckCircle2 className="h-4 w-4" />
                          Shortlist
                        </Button>
                        <Button variant="outline" size="sm" className="gap-2">
                          <Eye className="h-4 w-4" />
                          View Profile
                        </Button>
                        <Button variant="outline" size="sm" className="gap-2">
                          <Mail className="h-4 w-4" />
                          Contact
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
