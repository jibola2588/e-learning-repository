import React from 'react'
import AboutCard from './AboutCard'

function AboutCards() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 box-border">
        <div className="flex flex-wrap gap-[40px] items-center xl:justify-between md:space-around sm:justify-center">
        <AboutCard card="A"/>
        <AboutCard card="B"/>
        <AboutCard card="A"/>
        </div>
    </div>
  )
}

export default AboutCards