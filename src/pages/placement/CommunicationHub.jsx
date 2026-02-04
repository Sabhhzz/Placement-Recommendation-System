import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Mail, 
  Send,
  Users,
  CheckCircle2,
  Calendar,
  FileText,
  Sparkles
} from "lucide-react"
import { motion } from "framer-motion"

export default function CommunicationHub() {
  const [recipientGroup, setRecipientGroup] = useState("all")
  const [messageTemplate, setMessageTemplate] = useState("custom")

  const templates = [
    { id: "drive-announcement", name: "Campus Drive Announcement", preview: "New placement drive posted..." },
    { id: "deadline-reminder", name: "Application Deadline Reminder", preview: "Reminder: Apply before..." },
    { id: "interview-invite", name: "Interview Invitation", preview: "You're shortlisted for..." },
    { id: "custom", name: "Custom Message", preview: "Write your own message" },
  ]

  const recipientGroups = [
    { id: "all", name: "All Students", count: 1248 },
    { id: "cse", name: "CSE Department", count: 420 },
    { id: "it", name: "IT Department", count: 180 },
    { id: "final-year", name: "Final Year Only", count: 624 },
    { id: "eligible-zoho", name: "Eligible for Zoho Drive", count: 156 },
    { id: "job-ready", name: "Job-Ready Students", count: 456 },
  ]

  const recentCommunications = [
    {
      id: 1,
      subject: "Zoho Campus Drive - Feb 20",
      recipients: "CSE + IT (CGPA > 7.5)",
      sentTo: 156,
      sentDate: "Feb 3, 2025",
      openRate: "87%",
      status: "Delivered"
    },
    {
      id: 2,
      subject: "Application Deadline - Freshworks",
      recipients: "All Eligible Students",
      sentTo: 234,
      sentDate: "Feb 2, 2025",
      openRate: "92%",
      status: "Delivered"
    },
    {
      id: 3,
      subject: "Interview Schedule - TCS Digital",
      recipients: "TCS Shortlisted",
      sentTo: 45,
      sentDate: "Feb 1, 2025",
      openRate: "100%",
      status: "Delivered"
    },
  ]

  const selectedGroup = recipientGroups.find(g => g.id === recipientGroup)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/20">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <motion.div className="mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="mb-2 text-3xl font-bold text-slate-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Communication Hub
          </h1>
          <p className="text-slate-600">Send bulk emails and announcements to students</p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left: Compose Email */}
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    Compose Message
                  </CardTitle>
                  <CardDescription>Create and send bulk communications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Recipients */}
                  <div>
                    <Label className="mb-2 block">Select Recipients</Label>
                    <Select value={recipientGroup} onValueChange={setRecipientGroup}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {recipientGroups.map(group => (
                          <SelectItem key={group.id} value={group.id}>
                            {group.name} ({group.count} students)
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {selectedGroup && (
                      <div className="mt-2 rounded-lg bg-primary/5 p-3 border border-primary/20">
                        <p className="text-sm text-primary">
                          <Users className="inline h-4 w-4 mr-1" />
                          Will send to <strong>{selectedGroup.count} students</strong>
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Template */}
                  <div>
                    <Label className="mb-2 block">Message Template</Label>
                    <Select value={messageTemplate} onValueChange={setMessageTemplate}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {templates.map(template => (
                          <SelectItem key={template.id} value={template.id}>
                            {template.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Subject */}
                  <div>
                    <Label>Email Subject</Label>
                    <Input 
                      placeholder="e.g., Important: Campus Drive Announcement" 
                      className="mt-1"
                    />
                  </div>

                  {/* Message Body */}
                  <div>
                    <Label>Message Body</Label>
                    <textarea
                      className="mt-1 w-full min-h-[200px] rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Type your message here..."
                      defaultValue={
                        messageTemplate === "drive-announcement" 
                          ? "Dear Students,\n\nWe are pleased to announce a new campus placement drive...\n\nBest regards,\nPlacement Cell, SVCE"
                          : ""
                      }
                    />
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-gradient-to-r from-primary to-accent gap-2">
                      <Send className="h-4 w-4" />
                      Send Now ({selectedGroup?.count} recipients)
                    </Button>
                    <Button variant="outline">
                      Save Draft
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right: Recent Communications */}
          <div className="lg:col-span-1">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle>Recent Communications</CardTitle>
                  <CardDescription>Email history and analytics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentCommunications.map((comm, index) => (
                    <div key={comm.id} className="rounded-lg border border-slate-200 bg-white p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <p className="font-semibold text-slate-900 text-sm mb-1">{comm.subject}</p>
                          <p className="text-xs text-slate-600">{comm.recipients}</p>
                        </div>
                        <Badge className="bg-green-500/10 text-green-700 border-green-500/20 text-xs">
                          {comm.status}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-600 mt-3">
                        <span>{comm.sentTo} recipients</span>
                        <span className="font-medium text-primary">{comm.openRate} opened</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">{comm.sentDate}</p>
                    </div>
                  ))}

                  <Button variant="outline" className="w-full text-xs">
                    View All History
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
