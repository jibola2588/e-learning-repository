import { ClassNames } from '@emotion/react'
import React from 'react'
import AboutCard from './AboutCard'

function AboutCards() {
  return (
    <div className="bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 box-border mb-20">
        {/* xl:justify-btween md:space-around sm:justify-center */}
            <div className="grid md:grid-cols-2 gap-[33px]">
            <AboutCard card="B"/>
            <AboutCard card="A"/>
            <AboutCard card="B"/>
            <AboutCard card="A"/>
            <AboutCard card="B"/>
            <AboutCard card="A"/>
            </div>
        </div>
    </div>
  )
}

export default AboutCards