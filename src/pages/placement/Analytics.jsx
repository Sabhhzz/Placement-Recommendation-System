import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  TrendingUp, 
  Download,
  BarChart3,
  PieChart,
  Users,
  Briefcase
} from "lucide-react"
import { motion } from "framer-motion"

export default function Analytics() {
  const yearlyTrends = [
    { year: "2021-22", placementRate: 78, avgPackage: 4.2, students: 980 },
    { year: "2022-23", placementRate: 82, avgPackage: 4.8, students: 1050 },
    { year: "2023-24", placementRate: 85, avgPackage: 5.2, students: 1150 },
    { year: "2024-25", placementRate: 87, avgPackage: 5.8, students: 1248 },
  ]

  const topSkills = [
    { skill: "Data Structures & Algorithms", demand: 95, jobs: 245 },
    { skill: "React/Frontend", demand: 88, jobs: 198 },
    { skill: "Node.js/Backend", demand: 82, jobs: 176 },
    { skill: "Cloud (AWS/Azure)", demand: 75, jobs: 134 },
    { skill: "System Design", demand: 68, jobs: 98 },
  ]

  const topRecruiters = [
    { company: "TCS", hires: 145, avgPackage: "3.6 LPA", visits: 4 },
    { company: "Infosys", hires: 98, avgPackage: "4.2 LPA", visits: 3 },
    { company: "Wipro", hires: 76, avgPackage: "3.8 LPA", visits: 3 },
    { company: "Zoho", hires: 34, avgPackage: "6.5 LPA", visits: 2 },
    { company: "Freshworks", hires: 28, avgPackage: "7.2 LPA", visits: 2 },
  ]

  const internshipInsights = {
    totalCompleted: 342,
    conversionRate: 28,
    topCompanies: ["Amazon", "Microsoft", "Startups"],
    avgStipend: "₹25,000/month"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/20">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <motion.div className="mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="mb-2 text-3xl font-bold text-slate-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Analytics & Reports
              </h1>
              <p className="text-slate-600">Placement trends and performance insights</p>
            </div>
            <Button className="bg-gradient-to-r from-primary to-accent gap-2">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
          </div>
        </motion.div>

        {/* Placement Trends */}
        <motion.div className="mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Placement Trends (Year-over-Year)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {yearlyTrends.map((year, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-slate-900">{year.year}</span>
                      <div className="flex gap-4 text-sm">
                        <span className="text-slate-600">Rate: <strong className="text-green-600">{year.placementRate}%</strong></span>
                        <span className="text-slate-600">Avg: <strong className="text-primary">{year.avgPackage} LPA</strong></span>
                        <span className="text-slate-600">Students: <strong>{year.students}</strong></span>
                      </div>
                    </div>
                    <div className="h-3 rounded-full bg-slate-200">
                      <motion.div 
                        className="h-3 rounded-full bg-gradient-to-r from-primary to-accent"
                        initial={{ width: 0 }}
                        animate={{ width: `${year.placementRate}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Top Skills */}
          <Card>
            <CardHeader>
              <CardTitle>Top Skills in Demand</CardTitle>
              <CardDescription>Most requested in job postings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {topSkills.map((item, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-900">{item.skill}</span>
                    <span className="text-sm text-slate-600">{item.jobs} jobs</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-200">
                    <div 
                      className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                      style={{ width: `${item.demand}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Top Recruiters */}
          <Card>
            <CardHeader>
              <CardTitle>Top Recruiting Companies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {topRecruiters.map((company, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-slate-50 border">
                  <div>
                    <p className="font-semibold text-slate-900">{company.company}</p>
                    <p className="text-xs text-slate-600">{company.visits} campus visits</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-primary">{company.hires}</p>
                    <p className="text-xs text-slate-600">{company.avgPackage}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Internship Analytics */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Internship Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-4">
              <div className="rounded-lg bg-blue-50 p-4 border border-blue-200">
                <p className="text-sm text-blue-600 mb-1">Completed</p>
                <p className="text-2xl font-bold text-blue-900">{internshipInsights.totalCompleted}</p>
              </div>
              <div className="rounded-lg bg-green-50 p-4 border border-green-200">
                <p className="text-sm text-green-600 mb-1">Conversion Rate</p>
                <p className="text-2xl font-bold text-green-900">{internshipInsights.conversionRate}%</p>
              </div>
              <div className="rounded-lg bg-purple-50 p-4 border border-purple-200">
                <p className="text-sm text-purple-600 mb-1">Avg Stipend</p>
                <p className="text-lg font-bold text-purple-900">{internshipInsights.avgStipend}</p>
              </div>
              <div className="rounded-lg bg-yellow-50 p-4 border border-yellow-200">
                <p className="text-sm text-yellow-600 mb-1">Top Companies</p>
                <p className="text-sm font-bold text-yellow-900">{internshipInsights.topCompanies.join(", ")}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
