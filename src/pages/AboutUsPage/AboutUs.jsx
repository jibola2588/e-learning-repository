import React from 'react'
import CourseRating from '../../components/about-us/CourseRating'
import HeroSection from '../../components/about-us/HeroSection'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbars/Landing-Page-Navbar'


function AboutUs() {
  return (
   <>
    <Navbar/>
    <div className='relative'>
      <HeroSection/>
    </div>
    <div className='-mt-44 top-[380px] left-0 right-0'>
      <CourseRating/>
    </div>
    <Footer/>
   </>
  )
}

export default AboutUs