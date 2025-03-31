import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from '../lib/utils'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import Button from './ui/Button'

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full items-center justify-center bg-white dark:bg-black">
        <div
          className={cn(
            'absolute inset-0',
            '[background-size:80px_80px]',
            '[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
            'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]'
          )}
        />

        <div className="flex justify-center relative my-20 z-0">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              West Auckland Water Blasting
            </p>
            <TextGenerateEffect
              words="Cost-effective Water Blasting services to keep your property looking its best."
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />
            <a href="#contact-us">
              <Button>Get Quote</Button>
            </a>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_90%,black)] dark:bg-black" />
      </div>
    </div>
  )
}

export default Hero
