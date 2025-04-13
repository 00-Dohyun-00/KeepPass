import './assets/css/app.css'
import { Routes, Route } from 'react-router-dom'
import HistoryPage from '@/pages/HistoryPage'
import NotFoundPage from '@/pages/NotFoundPage'
import HomePage from '@/pages/HomePage'
import Layout from '@/components/layouts/layout/Layout'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  )
}

export default App
