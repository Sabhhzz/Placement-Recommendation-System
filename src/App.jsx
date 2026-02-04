import { Routes, Route, Navigate } from 'react-router-dom'

// Student Pages
import StudentLogin from './pages/student/StudentLogin'
import StudentDashboard from './pages/student/StudentDashboard'
import CampusOpportunities from './pages/student/CampusOpportunities'
import MyApplications from './pages/student/MyApplications'
import StudentProfile from './pages/student/StudentProfile'
import SkillDevelopment from './pages/student/SkillDevelopment'
import CareerInsights from './pages/student/CareerInsights'

// Placement Pages
import PlacementLogin from './pages/placement/PlacementLogin'
import PlacementDashboard from './pages/placement/PlacementDashboard'
import StudentManagement from './pages/placement/StudentManagement'
import RecruitmentManagement from './pages/placement/RecruitmentManagement'
import AIMatchingDashboard from './pages/placement/AIMatchingDashboard'
import Analytics from './pages/placement/Analytics'
import CommunicationHub from './pages/placement/CommunicationHub'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/student/login" replace />} />
      
      {/* Student Routes */}
      <Route path="/student/login" element={<StudentLogin />} />
      <Route path="/student/dashboard" element={<StudentDashboard />} />
      <Route path="/student/opportunities" element={<CampusOpportunities />} />
      <Route path="/student/applications" element={<MyApplications />} />
      <Route path="/student/profile" element={<StudentProfile />} />
      <Route path="/student/skills" element={<SkillDevelopment />} />
      <Route path="/student/insights" element={<CareerInsights />} />

      {/* Placement Routes */}
      <Route path="/placement/login" element={<PlacementLogin />} />
      <Route path="/placement/dashboard" element={<PlacementDashboard />} />
      <Route path="/placement/students" element={<StudentManagement />} />
      <Route path="/placement/recruitment" element={<RecruitmentManagement />} />
      <Route path="/placement/ai-matching" element={<AIMatchingDashboard />} />
      <Route path="/placement/analytics" element={<Analytics />} />
      <Route path="/placement/communications" element={<CommunicationHub />} />
      
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App