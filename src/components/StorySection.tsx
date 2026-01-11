import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const StorySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  const storyParagraphs = [
    "I've been watching you for so long, imagining all the filthy things I want to do to you in the dark. The way you move, the way you breathe—it's become my obsession. I know exactly how I want to pin you down, spread you open, and make you scream my name until your voice breaks.",

    "This hunger isn't normal. It's dark, possessive, all-consuming. I touch myself every night thinking about burying myself inside you, feeling you clench around me as I fuck you so hard you forget everything but the feeling of me claiming you. I want to own every inch of your body, every moan, every orgasm.",

    "I crave the taste of you on my tongue. I want to eat your pussy until you're shaking and begging, until you're so sensitive you can't take anymore—and then I'll keep going. I want to feel you come undone in my mouth, on my fingers, around my cock. Over and over until you're ruined for anyone else.",

    "You've infected me with this twisted need. I don't just want to fuck you—I want to possess you, mark you, make you mine in every primal way. I want my handprints on your throat, my teeth marks on your skin, my cum dripping down your thighs as proof that you belong to me.",

    "I imagine tying you up, watching you writhe and beg as I tease every sensitive spot on your body. The power of having you completely at my mercy, helpless and desperate, trusting me with your pleasure and pain. I'll push you to your limits and then past them, until pleasure and pain blur into pure ecstasy.",

    "Every time I see you, I get hard thinking about all the ways I want to take you. Against walls, on tables, in the dark where no one can hear you scream. I want to fuck you rough and dirty, then slow and deep, learning every reaction, every trigger that makes you lose control.",

    "I need to feel you wrapped around me—your legs, your arms, your tight wet heat gripping my cock as I pound into you. I want to watch your face as you come, see that moment when you surrender completely. I want to fill you, claim you, make you understand that you're fucking mine.",

    "So be mine this Valentine's Day. Let me worship you and wreck you in equal measure. Let me show you what it's like to be wanted with this kind of dark, desperate, all-consuming hunger. Say yes, and I promise—I'll make every filthy fantasy you've ever had come true."
  ]
  useEffect(() => {
    const paragraphs = sectionRef.current?.querySelectorAll('.story-paragraph')

    if (!paragraphs) return

    paragraphs.forEach((paragraph, index) => {
      gsap.fromTo(
        paragraph,
        {
          opacity: 0,
          y: 50,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: paragraph,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
            scrub: 1
          }
        }
      )

      // Add sparkle effect on certain paragraphs
      if (index % 2 === 0) {
        gsap.to(paragraph, {
          textShadow: '0 0 20px rgba(212, 175, 55, 0.5)',
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          scrollTrigger: {
            trigger: paragraph,
            start: 'top 60%',
            end: 'top 30%',
            toggleActions: 'play none none reverse'
          }
        })
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="story-section" ref={sectionRef}>
      {storyParagraphs.map((paragraph, index) => (
        <p
          key={index}
          className={`story-paragraph ${index === 0 ? 'first' : ''}`}
        >
          {paragraph}
        </p>
      ))}
    </div>
  )
}

export default StorySection
