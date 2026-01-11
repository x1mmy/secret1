import { useState, useEffect } from 'react'
import StorySection from './components/StorySection'
import QuestionSection from './components/QuestionSection'
import SuccessScreen from './components/SuccessScreen'
import Particles from './components/Particles'
import LoadingScreen from './components/LoadingScreen'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleYesClick = () => {
    setShowSuccess(true)
  }

  if (loading) {
    return <LoadingScreen />
  }

  if (showSuccess) {
    return <SuccessScreen />
  }

  return (
    <div className="app">
      <Particles />
      <StorySection />
      <QuestionSection onYesClick={handleYesClick} />
    </div>
  )
}

export default App
