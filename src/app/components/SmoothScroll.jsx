'use client'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Добавляем обработчик события scroll
    lenis.on('scroll', () => {
      console.log('Scrolling...');
    })

    // Обработчики для touch событий
    window.addEventListener('touchstart', () => {
      lenis.start()
    })
    window.addEventListener('touchmove', () => {
      lenis.stop()
    })

    return () => {
      lenis.destroy()
      window.removeEventListener('touchstart', () => lenis.stop())
      window.removeEventListener('touchmove', () => lenis.stop())
    }
  }, [])

  return null
}
