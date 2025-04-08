import Hero from '../components/Hero'
import React from 'react'
import { Nav } from '../components/ui/Nav'
import Grid from '@/components/Grid'
import SignupFormDemo from '@/components/signupForm'

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Nav
          navItems={[
            { name: 'Home', link: '/', icon: 'test' },
            { name: 'About', link: '/about', icon: 'info' },
            { name: 'Services', link: '/services', icon: 'briefcase' },
            { name: 'Contact', link: '/contact', icon: 'phone' },
          ]}
        />
        <Hero />
        <Grid />
        <SignupFormDemo />
      </div>
    </main>
  )
}
