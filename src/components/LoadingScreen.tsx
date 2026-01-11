import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './LoadingScreen.css'

const LoadingScreen = () => {
  const heartRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (heartRef.current) {
      gsap.to(heartRef.current, {
        scale: 1.2,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })
    }

    if (textRef.current) {
      gsap.to(textRef.current, {
        opacity: 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
    }
  }, [])

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-heart" ref={heartRef}>
          🔥
        </div>
        <p className="loading-text" ref={textRef}>
          Preparing to claim what's mine...
        </p>
        <div className="loading-sparkles">💋 🔥 💋</div>
      </div>
    </div>
  )
}

export default LoadingScreen
