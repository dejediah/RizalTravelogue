import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MacbookScroll } from '@/components/ui/macbook-scroll'

export default function IntroPage() {
  const navigate = useNavigate()
  return (
    <MacbookScroll
      src="/assets/home.png"
      showGradient={true}
      title="Welcome to the Vintage Parallax Travelogue"
      badge={
        <button
          onClick={() => navigate('/home')}
          className="rounded-full bg-black/80 px-4 py-2 text-sm text-white backdrop-blur transition hover:bg-black/60"
        >
          Enter site →
        </button>
      }
    />
  )
}
