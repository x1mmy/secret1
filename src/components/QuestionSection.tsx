import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import './QuestionSection.css'

interface QuestionSectionProps {
  onYesClick: () => void
}

const QuestionSection = ({ onYesClick }: QuestionSectionProps) => {
  const [noClickCount, setNoClickCount] = useState(0)
  const [yesScale, setYesScale] = useState(1)
  const [noScale, setNoScale] = useState(1)
  const [noVisible, setNoVisible] = useState(true)
  const questionRef = useRef<HTMLDivElement>(null)
  const yesButtonRef = useRef<HTMLButtonElement>(null)
  const noButtonRef = useRef<HTMLButtonElement>(null)

  const questions = [
    "Will you be mine this Valentine's Day? Let me ruin you in all the right ways.",
    "You're really going to deny this hunger between us?",
    "Still pretending you don't want me to pin you down and make you scream?",
    "Don't you want to know what my hands, my mouth, my cock can do to you?",
    "You sure you can resist me? I can see the need in your eyes.",
    "You're already mine. Stop fighting it and surrender to me."
  ]

  useEffect(() => {
    if (questionRef.current) {
      gsap.fromTo(
        questionRef.current,
        { opacity: 0, scale: 0.8, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: 'elastic.out(1, 0.5)' }
      )
    }
  }, [])

  useEffect(() => {
    if (yesButtonRef.current) {
      gsap.to(yesButtonRef.current, {
        scale: yesScale,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)'
      })
    }
  }, [yesScale])

  useEffect(() => {
    if (noButtonRef.current && noVisible) {
      gsap.to(noButtonRef.current, {
        scale: noScale,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)'
      })
    }
  }, [noScale, noVisible])

  const handleNoClick = () => {
    const newCount = noClickCount + 1

    // Shake animation for No button
    if (noButtonRef.current) {
      gsap.to(noButtonRef.current, {
        keyframes: [
          { x: -10 },
          { x: 10 },
          { x: -10 },
          { x: 10 },
          { x: 0 }
        ],
        duration: 0.5,
        ease: 'power2.inOut'
      })
    }

    // Update scales
    setYesScale(prev => prev + 0.2)
    setNoScale(prev => prev - 0.2)
    setNoClickCount(newCount)

    // Hide No button after 5 clicks
    if (newCount >= 5) {
      if (noButtonRef.current) {
        gsap.to(noButtonRef.current, {
          opacity: 0,
          scale: 0,
          duration: 0.8,
          ease: 'power3.in',
          onComplete: () => setNoVisible(false)
        })
      }
    }

    // Pulse animation for question text
    if (questionRef.current) {
      gsap.to(questionRef.current, {
        scale: 1.05,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut'
      })
    }
  }

  const handleYesClick = () => {
    if (yesButtonRef.current) {
      gsap.to(yesButtonRef.current, {
        scale: yesScale * 1.2,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut',
        onComplete: onYesClick
      })
    }
  }

  const handleYesHover = () => {
    if (yesButtonRef.current) {
      gsap.to(yesButtonRef.current, {
        y: -5,
        boxShadow: '0 10px 40px rgba(212, 175, 55, 0.6)',
        duration: 0.3,
        ease: 'power2.out'
      })
    }
  }

  const handleYesLeave = () => {
    if (yesButtonRef.current) {
      gsap.to(yesButtonRef.current, {
        y: 0,
        boxShadow: '0 5px 20px rgba(212, 175, 55, 0.4)',
        duration: 0.3,
        ease: 'power2.out'
      })
    }
  }

  const handleNoHover = () => {
    if (noButtonRef.current && noVisible) {
      gsap.to(noButtonRef.current, {
        y: -3,
        duration: 0.3,
        ease: 'power2.out'
      })
    }
  }

  const handleNoLeave = () => {
    if (noButtonRef.current && noVisible) {
      gsap.to(noButtonRef.current, {
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
    }
  }

  return (
    <div className="question-section">
      <div className="question-container" ref={questionRef}>
        <div className="heart-icon">🔥</div>
        <h1 className="question-text">
          {questions[Math.min(noClickCount, questions.length - 1)]}
        </h1>
        <div className="rose-decoration">💋</div>
      </div>

      <div className="buttons-container">
        <button
          ref={yesButtonRef}
          className="yes-button"
          onClick={handleYesClick}
          onMouseEnter={handleYesHover}
          onMouseLeave={handleYesLeave}
        >
          I'm Yours
        </button>
        {noVisible && (
          <button
            ref={noButtonRef}
            className="no-button"
            onClick={handleNoClick}
            onMouseEnter={handleNoHover}
            onMouseLeave={handleNoLeave}
          >
            Not Yet
          </button>
        )}
      </div>

      {noClickCount >= 5 && (
        <p className="final-text">Good. Now give yourself to me. I've waited long enough. 🔥</p>
      )}
    </div>
  )
}

export default QuestionSection
