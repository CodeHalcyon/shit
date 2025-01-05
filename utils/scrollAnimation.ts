import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useScrollAnimation = (
  selector: string,
  animationProps: gsap.TweenVars = {},
  triggerOptions: ScrollTrigger.Vars = {}
) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current

    if (element) {
      const elements = element.querySelectorAll(selector)
      
      gsap.fromTo(
        elements,
        { opacity: 0, y: 50, ...animationProps },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            ...triggerOptions,
          },
        }
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [selector, animationProps, triggerOptions])

  return ref
}

