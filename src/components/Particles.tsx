import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Particles.css'

const Particles = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const createParticle = (type: 'petal' | 'sparkle') => {
      const particle = document.createElement('div')
      particle.className = `particle ${type}`

      if (type === 'petal') {
        const petals = ['🥀', '🌹', '💋']
        particle.textContent = petals[Math.floor(Math.random() * petals.length)]
      } else {
        const sparkles = ['🔥', '💋', '🖤']
        particle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)]
      }

      particle.style.left = `${Math.random() * 100}%`
      particle.style.fontSize = `${15 + Math.random() * 20}px`
      particle.style.opacity = '0'

      containerRef.current?.appendChild(particle)

      const duration = 10 + Math.random() * 10
      const xMovement = -50 + Math.random() * 100

      gsap.to(particle, {
        y: window.innerHeight + 100,
        x: xMovement,
        rotation: Math.random() * 360,
        opacity: 0.7,
        duration: duration,
        ease: 'none',
        onComplete: () => {
          particle.remove()
        }
      })

      gsap.to(particle, {
        opacity: 0,
        duration: 1,
        delay: duration - 2,
        ease: 'power2.in'
      })
    }

    const intervalPetal = setInterval(() => {
      createParticle('petal')
    }, 800)

    const intervalSparkle = setInterval(() => {
      createParticle('sparkle')
    }, 1200)

    return () => {
      clearInterval(intervalPetal)
      clearInterval(intervalSparkle)
    }
  }, [])

  return <div className="particles-container" ref={containerRef}></div>
}

export default Particles
