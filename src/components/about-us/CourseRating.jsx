import React from 'react'
import HeroImage from '../../assets/images/AboutFrame.png'
import { HeaderBottomPart } from '../landing-page/Header-Bottom-Part'
import { CourseCount } from './courseCount'

function CourseRating() {
    return (
        <div className="heroImage max-w-6xl mx-auto px-4 sm:px-6 py-8 relative">
            <img src={HeroImage} alt="" />
            {/* <div className="my-[40px] lg:my-[50px] flex items-center">
                <CourseCount type="A"/>
                <CourseCount type="B"/>
                <CourseCount type="C"/>
                <CourseCount type="D"/>
                <CourseCount type="E"/>
                <CourseCount type="F"/>
                <CourseCount type="G"/>
              </div> */}
            <div className="my-[40px] lg:my-[50px] flex items-center">
              <HeaderBottomPart type="A"/>
              <HeaderBottomPart type="A"/>
              <HeaderBottomPart type="A"/>
              <HeaderBottomPart type="A"/>
              <HeaderBottomPart type="A"/>
              <HeaderBottomPart type="A"/>
            </div> 
        </div>
    )
}

export default CourseRating