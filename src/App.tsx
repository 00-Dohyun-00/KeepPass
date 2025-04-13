import './App.css'
import { Routes, Route } from 'react-router-dom'
import HistoryPage from '@/pages/HistoryPage'
import NotFoundPage from '@/pages/NotFoundPage'
import HomePage from '@/pages/HomePage'

function App() {
  return (
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/history" element={<HistoryPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
  )
}

export default App
