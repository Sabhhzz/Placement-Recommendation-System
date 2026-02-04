import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Plus, 
  Upload, 
  Calendar,
  Building2,
  DollarSign,
  Users,
  CheckCircle2,
  Clock,
  Eye
} from "lucide-react"
import { motion } from "framer-motion"

export default function RecruitmentManagement() {
  const [showAddDrive, setShowAddDrive] = useState(false)

  const activeDrives = [
    {
      id: 1,
      company: "Zoho Corporation",
      role: "Software Development Engineer",
      package: "6.5 LPA",
      minCGPA: 7.5,
      branches: ["CSE", "IT"],
      driveDate: "Feb 20, 2025",
      deadline: "Feb 15, 2025",
      slots: 25,
      applicants: 156,
      shortlisted: 0,
      status: "Active"
    },
    {
      id: 2,
      company: "Freshworks",
      role: "Full Stack Developer",
      package: "7.2 LPA",
      minCGPA: 7.0,
      branches: ["CSE", "IT", "ECE"],
      driveDate: "Feb 25, 2025",
      deadline: "Feb 18, 2025",
      slots: 15,
      applicants: 98,
      shortlisted: 12,
      status: "Active"
    },
    {
      id: 3,
      company: "TCS",
      role: "Digital - Ninja",
      package: "3.36 LPA",
      minCGPA: 6.5,
      branches: ["All"],
      driveDate: "Mar 5, 2025",
      deadline: "Feb 28, 2025",
      slots: 100,
      applicants: 421,
      shortlisted: 45,
      status: "Active"
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/20">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <motion.div className="mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="mb-2 text-3xl font-bold text-slate-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Campus Recruitment Management
          </h1>
          <p className="text-slate-600">Post and manage campus placement drives</p>
        </motion.div>

        {/* Action Buttons */}
        <div className="mb-6 flex flex-wrap gap-3">
          <Button 
            onClick={() => setShowAddDrive(!showAddDrive)}
            className="bg-gradient-to-r from-primary to-accent gap-2"
          >
            <Plus className="h-4 w-4" />
            Post New Drive
          </Button>
          <Button variant="outline" className="gap-2">
            <Upload className="h-4 w-4" />
            Bulk Upload (CSV)
          </Button>
        </div>

        {/* Add Drive Form */}
        {showAddDrive && (
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
          >
            <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-white">
              <CardHeader>
                <CardTitle>Post New Campus Drive</CardTitle>
                <CardDescription>Fill in the details for the recruitment drive</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label>Company Name</Label>
                    <Input placeholder="e.g., Zoho Corporation" />
                  </div>
                  <div>
                    <Label>Job Role</Label>
                    <Input placeholder="e.g., Software Engineer" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <Label>Package (LPA)</Label>
                    <Input placeholder="e.g., 6.5" type="number" step="0.1" />
                  </div>
                  <div>
                    <Label>Min CGPA</Label>
                    <Input placeholder="e.g., 7.5" type="number" step="0.1" />
                  </div>
                  <div>
                    <Label>Slots Available</Label>
                    <Input placeholder="e.g., 25" type="number" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label>Drive Date</Label>
                    <Input type="date" />
                  </div>
                  <div>
                    <Label>Application Deadline</Label>
                    <Input type="date" />
                  </div>
                </div>

                <div>
                  <Label>Eligible Branches</Label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["CSE", "IT", "ECE", "EEE", "MECH", "CIVIL"].map(branch => (
                      <label key={branch} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">{branch}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>Required Skills (comma-separated)</Label>
                  <Input placeholder="e.g., React, Node.js, DSA, System Design" />
                </div>

                <div className="flex gap-2 justify-end">
                  <Button variant="outline" onClick={() => setShowAddDrive(false)}>
                    Cancel
                  </Button>
                  <Button className="bg-gradient-to-r from-primary to-accent">
                    Post Drive
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Active Drives */}
        <Card>
          <CardHeader>
            <CardTitle>Active Campus Drives ({activeDrives.length})</CardTitle>
            <CardDescription>Manage ongoing recruitment activities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {activeDrives.map((drive, index) => (
              <motion.div
                key={drive.id}
                className="rounded-lg border border-slate-200 bg-slate-50/50 p-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {drive.role}
                    </h3>
                    <p className="text-sm text-slate-600">{drive.company}</p>
                  </div>
                  <Badge className="bg-green-500/10 text-green-700 border-green-500/20">
                    {drive.status}
                  </Badge>
                </div>

                <div className="grid gap-4 mb-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-slate-600" />
                    <div>
                      <p className="text-xs text-slate-600">Package</p>
                      <p className="font-semibold text-slate-900">{drive.package}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-slate-600" />
                    <div>
                      <p className="text-xs text-slate-600">Drive Date</p>
                      <p className="font-semibold text-slate-900">{drive.driveDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-slate-600" />
                    <div>
                      <p className="text-xs text-slate-600">Applications</p>
                      <p className="font-semibold text-slate-900">{drive.applicants}/{drive.slots}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-slate-600" />
                    <div>
                      <p className="text-xs text-slate-600">Shortlisted</p>
                      <p className="font-semibold text-slate-900">{drive.shortlisted}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-slate-700 mb-2">Eligibility:</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Min CGPA: {drive.minCGPA}</Badge>
                    {drive.branches.map((branch, i) => (
                      <Badge key={i} variant="outline">{branch}</Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Eye className="h-4 w-4" />
                    View Applicants
                  </Button>
                  <Button variant="outline" size="sm">
                    Edit Drive
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-50">
                    Close Drive
                  </Button>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
