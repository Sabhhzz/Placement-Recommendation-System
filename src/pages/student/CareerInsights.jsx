import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Lightbulb, 
  TrendingUp, 
  Code, 
  Database,
  Cloud,
  Brain,
  Rocket,
  DollarSign,
  Clock,
  Target
} from "lucide-react"
import { motion } from "framer-motion"

export default function CareerInsights() {
  const careerPaths = [
    {
      role: "Software Development Engineer",
      icon: Code,
      demand: "Very High",
      avgPackage: "6-12 LPA",
      growth: "Excellent",
      skills: ["DSA", "System Design", "Java/Python", "Git"],
      companies: ["Zoho", "Freshworks", "Amazon", "Microsoft"],
      timeToReady: "3-4 months",
      description: "Build scalable applications and solve complex problems. High demand in product companies."
    },
    {
      role: "Full Stack Developer",
      icon: TrendingUp,
      demand: "High",
      avgPackage: "5-10 LPA",
      growth: "Excellent",
      skills: ["React", "Node.js", "MongoDB", "REST APIs"],
      companies: ["Startups", "Product Companies", "Service Based"],
      timeToReady: "2-3 months",
      description: "Work on both frontend and backend. Versatile role with startup opportunities."
    },
    {
      role: "Data Scientist",
      icon: Database,
      demand: "High",
      avgPackage: "7-15 LPA",
      growth: "Growing Fast",
      skills: ["Python", "ML", "Statistics", "SQL", "Pandas"],
      companies: ["Analytics Firms", "FinTech", "E-commerce"],
      timeToReady: "4-6 months",
      description: "Extract insights from data. Requires strong math and programming skills."
    },
    {
      role: "DevOps Engineer",
      icon: Cloud,
      demand: "Medium-High",
      avgPackage: "6-12 LPA",
      growth: "Steady",
      skills: ["AWS/Azure", "Docker", "Kubernetes", "CI/CD"],
      companies: ["Cloud Companies", "Enterprises", "Startups"],
      timeToReady: "3-5 months",
      description: "Manage infrastructure and deployment pipelines. High-paying niche."
    },
    {
      role: "AI/ML Engineer",
      icon: Brain,
      demand: "Very High",
      avgPackage: "8-18 LPA",
      growth: "Explosive",
      skills: ["Python", "TensorFlow", "NLP", "Deep Learning"],
      companies: ["AI Startups", "Research Labs", "Big Tech"],
      timeToReady: "6+ months",
      description: "Build intelligent systems. Hottest field with massive growth potential."
    },
  ]

  const industryTrends = [
    { trend: "AI & Machine Learning", growth: 95, description: "Fastest growing field in 2025" },
    { trend: "Cloud Computing", growth: 85, description: "Essential for modern applications" },
    { trend: "Full Stack Development", growth: 80, description: "Versatile and in-demand" },
    { trend: "Cybersecurity", growth: 75, description: "Critical need across industries" },
    { trend: "DevOps & SRE", growth: 70, description: "Infrastructure automation boom" },
  ]

  const startupIdeas = [
    {
      title: "AI-Powered Study Planner for Engineering Students",
      description: "Help students manage coursework and placements with AI scheduling",
      feasibility: "High",
      techStack: ["React", "Python", "OpenAI API"],
      marketSize: "College campuses across India"
    },
    {
      title: "Campus Food Delivery Optimization",
      description: "Real-time canteen queue and delivery tracking for hostels",
      feasibility: "Medium",
      techStack: ["Flutter", "Firebase", "Maps API"],
      marketSize: "University students nationwide"
    },
  ]

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
            Career Insights
          </h1>
          <p className="text-slate-600">Explore career paths, industry trends, and opportunities</p>
        </motion.div>

        {/* Career Path Explorer */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="border-slate-200/60 bg-white/90 backdrop-blur-sm shadow-md">
            <CardHeader>
              <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Career Path Explorer</CardTitle>
              <CardDescription>Discover roles that match your interests and skills</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {careerPaths.map((path, index) => {
                const Icon = path.icon
                return (
                  <motion.div
                    key={index}
                    className="group rounded-xl border border-slate-200 bg-gradient-to-r from-white to-slate-50/50 p-6 hover:shadow-lg transition-all"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                              {path.role}
                            </h3>
                            <p className="text-sm text-slate-600">{path.description}</p>
                          </div>
                          <Badge className="bg-green-500/10 text-green-700 border-green-500/20">
                            {path.demand} Demand
                          </Badge>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4 sm:grid-cols-4">
                          <div>
                            <p className="text-xs text-slate-600">Avg Package</p>
                            <p className="font-semibold text-slate-900">{path.avgPackage}</p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-600">Growth</p>
                            <p className="font-semibold text-slate-900">{path.growth}</p>
                          </div>
                          <div className="col-span-2">
                            <p className="text-xs text-slate-600">Time to Job-Ready</p>
                            <p className="font-semibold text-slate-900">{path.timeToReady}</p>
                          </div>
                        </div>

                        <div className="mb-4">
                          <p className="text-xs font-semibold text-slate-700 mb-2">Required Skills:</p>
                          <div className="flex flex-wrap gap-2">
                            {path.skills.map((skill, i) => (
                              <Badge key={i} variant="outline" className="text-xs bg-white">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="mb-4">
                          <p className="text-xs font-semibold text-slate-700 mb-2">Top Hiring Companies:</p>
                          <p className="text-sm text-slate-600">{path.companies.join(", ")}</p>
                        </div>

                        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                          View Detailed Roadmap
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </CardContent>
          </Card>
        </motion.div>

        {/* Industry Trends */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="border-slate-200/60 bg-white/90 backdrop-blur-sm shadow-md">
            <CardHeader>
              <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Industry Trends 2025</CardTitle>
              <CardDescription>Hottest skills and technologies in demand</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {industryTrends.map((trend, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-slate-900">{trend.trend}</span>
                    <span className="text-sm font-bold text-primary">{trend.growth}%</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-slate-200">
                    <motion.div 
                      className="h-3 rounded-full bg-gradient-to-r from-primary to-accent"
                      initial={{ width: 0 }}
                      animate={{ width: `${trend.growth}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  <p className="text-xs text-slate-600">{trend.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Startup Ideas (Entrepreneurial Students) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="border-slate-200/60 bg-white/90 backdrop-blur-sm shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Rocket className="h-6 w-6 text-primary" />
                <div>
                  <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Startup Ideas for You</CardTitle>
                  <CardDescription>AI-generated ideas based on your skills and campus problems</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {startupIdeas.map((idea, index) => (
                <div key={index} className="rounded-lg border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-white p-5">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-bold text-slate-900 flex-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      💡 {idea.title}
                    </h4>
                    <Badge className="bg-blue-500/10 text-blue-700 border-blue-500/20">
                      {idea.feasibility} Feasibility
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-700 mb-4">{idea.description}</p>
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-slate-700 mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {idea.techStack.map((tech, i) => (
                        <Badge key={i} variant="outline" className="bg-white text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-slate-600">
                    <strong>Market:</strong> {idea.marketSize}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
