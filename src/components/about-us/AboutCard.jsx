import React from 'react'
import { Icon } from '@iconify/react';
import img1 from '../../assets/images/image1.png'
import img2 from '../../assets/images/image2.png'

function AboutCard({ card }) {
  let data
  switch (card) {
    case "A":
      data = {
        cardTitle: "UI/UX Design",
        cardImg: img1,
        cardText: "Discover a wide rage of resources written by experienced tech professionals at Enyata. Never miss a new post, stay updated by subscribing to our blog"
      }
      break;
    case "B":
      data = {
        cardTitle: "Frontend Development",
        cardImg: img2,
        cardText: "Discover a wide rage of resources written by experienced tech professionals at Enyata. Never miss a new post, stay updated by subscribing to our blog"
      }
      break;
    default:
      break;
  }
  return (
    <>
      {/* w-[340px] */}
      <div className={`flex flex-row border-box rounded-2xl hover:cursor-pointer bg-white font-[
Satoshi]`}
      >
        <div className="flex flex-col items-start space-y-2 justify-center md:justify-evenly flex-1 px-4">
          <h2 className="font-bold text-[18px] sm:text-[20px] md:text-[28px] lg:text-[36px] text-[#00349A] font-[
  Satoshi]">{data.cardTitle}</h2>
          <p className='text-[14px] xsm:text-[18px] md:text-[14px] lg:text-[18px] py-4'>
            {data.cardText}
          </p>
        </div>

        <div className='flex-1'>
          <img className='w-[100%] h-[100%] object-cover rounded-r-2xl' src={data.cardImg} alt="course images" />
        </div>
      </div>
    </>
  )
}

export default AboutCard