import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  Briefcase, 
  TrendingUp, 
  Award,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Calendar,
  Building2
} from "lucide-react"
import { motion } from "framer-motion"

export default function PlacementDashboard() {
  const stats = {
    totalStudents: 1248,
    placementRate: 87,
    avgPackage: "5.8 LPA",
    activeDrives: 12,
    totalApplications: 3456,
    interviewsScheduled: 234
  }

  const departmentStats = [
    { dept: "CSE", students: 420, placed: 378, percentage: 90, avgPackage: "6.5 LPA" },
    { dept: "IT", students: 180, placed: 153, percentage: 85, avgPackage: "5.8 LPA" },
    { dept: "ECE", students: 240, placed: 192, percentage: 80, avgPackage: "5.2 LPA" },
    { dept: "EEE", students: 180, placed: 135, percentage: 75, avgPackage: "4.8 LPA" },
  ]

  const readinessBreakdown = {
    jobReady: 456,
    needsPrep: 612,
    atRisk: 180
  }

  const upcomingDrives = [
    { company: "Zoho", role: "SDE", date: "Feb 20", slots: 25, applied: 156 },
    { company: "Freshworks", role: "Full Stack", date: "Feb 25", slots: 15, applied: 98 },
    { company: "Infosys", role: "Power Programmer", date: "Mar 1", slots: 50, applied: 284 },
  ]

  const recentActivity = [
    { action: "New Drive Posted", detail: "TCS Digital - 50 slots", time: "2 hours ago" },
    { action: "Bulk Application", detail: "45 students applied to Wipro", time: "5 hours ago" },
    { action: "Interview Scheduled", detail: "Zoho - 12 students shortlisted", time: "1 day ago" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/20">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <motion.div className="mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="mb-2 text-3xl font-bold text-slate-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Placement Dashboard
          </h1>
          <p className="text-slate-600">Overview of campus placement activities and student readiness</p>
        </motion.div>

        {/* Top Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-gradient-to-br from-blue-50 to-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Placement Rate</p>
                  <p className="text-4xl font-bold text-slate-900">{stats.placementRate}%</p>
                </div>
                <TrendingUp className="h-12 w-12 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Avg Package</p>
                  <p className="text-4xl font-bold text-slate-900">{stats.avgPackage}</p>
                </div>
                <Award className="h-12 w-12 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Active Drives</p>
                  <p className="text-4xl font-bold text-slate-900">{stats.activeDrives}</p>
                </div>
                <Briefcase className="h-12 w-12 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Student Readiness */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Student Readiness</CardTitle>
              <CardDescription>Career readiness distribution</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-green-50 border border-green-200">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-green-900">Job-Ready</span>
                </div>
                <span className="text-2xl font-bold text-green-600">{readinessBreakdown.jobReady}</span>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-yellow-50 border border-yellow-200">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <span className="font-medium text-yellow-900">Needs Prep</span>
                </div>
                <span className="text-2xl font-bold text-yellow-600">{readinessBreakdown.needsPrep}</span>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-red-50 border border-red-200">
                <div className="flex items-center gap-3">
                  <XCircle className="h-5 w-5 text-red-600" />
                  <span className="font-medium text-red-900">At-Risk</span>
                </div>
                <span className="text-2xl font-bold text-red-600">{readinessBreakdown.atRisk}</span>
              </div>
            </CardContent>
          </Card>

          {/* Department Breakdown & Upcoming Drives */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Department Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {departmentStats.map((dept, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-slate-900">{dept.dept}</span>
                        <span className="text-sm font-bold text-primary">{dept.percentage}%</span>
                      </div>
                      <div className="h-3 rounded-full bg-slate-200">
                        <div 
                          className="h-3 rounded-full bg-gradient-to-r from-primary to-accent"
                          style={{ width: `${dept.percentage}%` }}
                        />
                      </div>
                      <div className="mt-1 flex justify-between text-xs text-slate-600">
                        <span>{dept.placed}/{dept.students} placed</span>
                        <span>Avg: {dept.avgPackage}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Campus Drives</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingDrives.map((drive, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-slate-50 border">
                      <div>
                        <p className="font-semibold text-slate-900">{drive.company}</p>
                        <p className="text-sm text-slate-600">{drive.role} • {drive.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-slate-900">{drive.applied} applied</p>
                        <p className="text-xs text-slate-600">{drive.slots} slots</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}