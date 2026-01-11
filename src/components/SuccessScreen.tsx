import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './SuccessScreen.css'

const SuccessScreen = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const confettiRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 1, ease: 'elastic.out(1, 0.5)' }
      )
    }

    // Create confetti
    if (confettiRef.current) {
      for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div')
        confetti.className = 'confetti'
        confetti.style.left = `${Math.random() * 100}%`
        confetti.style.backgroundColor = ['#8b0000', '#d4af37', '#000000', '#c41e1e'][Math.floor(Math.random() * 4)]
        confetti.style.animationDelay = `${Math.random() * 3}s`
        confetti.style.animationDuration = `${3 + Math.random() * 2}s`
        confettiRef.current.appendChild(confetti)

        gsap.to(confetti, {
          y: window.innerHeight + 100,
          rotation: Math.random() * 360,
          duration: 3 + Math.random() * 2,
          delay: Math.random() * 0.5,
          ease: 'power1.in'
        })
      }
    }
  }, [])

  return (
    <div className="success-screen" ref={containerRef}>
      <div className="confetti-container" ref={confettiRef}></div>

      <div className="success-content">
        <div className="sparkle-heart">🔥</div>

        <h1 className="success-title">Fuck yes. I knew you'd surrender to me.</h1>

        <p className="success-message">
          Now that you're mine, I'm going to worship and wreck you in equal measure. Every filthy fantasy I've had, every dark desire I've been holding back—I'm going to make them all real. I hope you're ready to be claimed, possessed, and completely consumed. Because I've waited long enough, and I'm done holding back.
        </p>

        <div className="gif-container">
          <img
            src="https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif"
            alt="Romantic celebration"
            className="celebration-gif"
          />
        </div>

        <div className="romantic-quote">
          "You're mine now—body, mind, and soul. This Valentine's Day is just the beginning of me making you understand exactly what it means to belong to me." 🔥
        </div>

        <div className="floating-hearts">
          <span className="heart">🔥</span>
          <span className="heart">💋</span>
          <span className="heart">🖤</span>
          <span className="heart">💋</span>
          <span className="heart">🔥</span>
        </div>
      </div>
    </div>
  )
}

export default SuccessScreen
