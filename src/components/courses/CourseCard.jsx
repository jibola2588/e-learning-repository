import React from 'react'
import { Icon } from '@iconify/react';


function CourseCard({backgroundImg,Reviews,courseDuration, courseReviews,courseViews,courseTitle,tutorName,slashPrice,currentPrice}) {
  return (
    <>
        <div  className={`flex flex-col relative rounded-xl border-t border-b border-r border-l border-[#D9D9D9] p-2 mt-2 md:mt-4 mb-0`}>
            {/* Course Image */}
            <div className='flex-1'>
            <img className='w-full' src={`${backgroundImg}`} alt="" />
            </div>


            {/* course Actions */}
            <div className="flex-1 flex flex-row w-full justify-around md:px-1 py-4">
                {/* course Reviews */}
                <div className='flex flex-row items-center'>
                <Icon icon="clarity:star-line" color="#14142b" className='md:text-2xl -mt-0.5 md:-mt-1'/>
                  <div className='flex flex-row'>
                    <p className='font-bold text-[#00349A] text-sm md:text-lg mr-1 md:mx-1'>{courseReviews}</p>
                    <p className='font-bold text-[#D3D3D3] text-sm md:text-lg'>{Reviews}</p>
                  </div>
                </div>

                {/* course Views */}
                <div className='flex flex-row items-center'>
                  <Icon icon="gg:eye" color="#14142b" className='md:text-2xl'/>
                  <p className='font-bold text-[#00349A] mr-1 md:mx-1 text-sm md:text-lg'>{courseViews}</p>
                </div>

                {/* course Lessons*/}
                <div className='flex flex-row items-center'>
                  <Icon icon="fluent:play-12-regular" color="#036525" className='md:text-2xl'/>
                  <div className='flex flex-row'>
                    <p className='font-bold text-[#00349A] mr-1 md:mx-1 text-sm md:text-lg'>{courseDuration}</p>
                    <p className='font-bold text-[#D3D3D3] text-sm md:text-lg'>Lesson</p>
                  </div>
                </div>
            </div>
            {/* <div className="absolute w-full bg-[
#C4C4C4] border-t top-44 xsm:top-60 left-0 right-0"></div> */}
            <h2 className="courseTitle text-[18px] sm:text-[24px] text-[#00349A] font-[
Satoshi] mt-0 md:mt-2">{courseTitle}</h2>
        <div className="courseTutor flex-1 flex flex-row justify-between py-4">
                {/* course TutorDetails */}
                <div className='flex flex-row items-center'>
                  <div className='flex flex-row'>
                    <p className='font-bold text-[#00349A] text-sm md:text-lg mr-1 md:mx-1'>{tutorName}</p>
                  </div>
                </div>


                {/* course Price*/}
                <div className='flex flex-row items-center'>
                  <div className='flex flex-row gap-2'>
                    <p className='font-bold text-[#C4C4C4] text-sm md:text-lg'>{slashPrice}</p>
                    <p className='font-bold text-[#14142B] mr-1 md:mx-1 text-sm md:text-lg'>{currentPrice}</p>
                  </div>
                </div>
        </div>
        </div>
    </>
  )
}

export default CourseCard



// coursesViews, courseTitle, coursePrice, tutorImg, tutorName