import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/Landing_page.tsx'
import BaycareDashboard from './Pages/BaycareDashboard.tsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/baycare-dashboard" element={<BaycareDashboard />} />
      </Routes>
    </Router>
  )
}

export default App
