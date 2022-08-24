import React from 'react'
import { Icon } from '@iconify/react';
import img1 from '../../assets/images/image1.png'
import img2 from '../../assets/images/image2.png'

function AboutCard({card}) {
  let data
  switch (card) {
    case "A":
      data = {
        cardTitle:"UI/UX Design",
        cardImg:img1,
      }
      break;
    case "B":
      data = {
        cardTitle:"Frontend Development",
        cardImg:img2,
      }
      break;
    default:
      break;
  }
  return (
    <>
    <div className={`category w-[340px] flex flex-row-reverse border-box relative rounded-xl hover:transition-shadow border-t border-b border-r border-l border-[#D9D9D9] bg-white  mb-0 font-[
Satoshi]`}
>

    <div className="">
        <div className='flex-1 w-full boder-box h-[179px] p-2'>
        <img className='w-[100%] h-[100%] object-cover' src={data.cardImg} alt="course images"  />
      </div>
    </div>

    {/* bottomCardSecion */}
    <div className="p-2 flex flex-col">
      <div className="flex sm:h-[95px]">
        <h2 className="font-medium text-[14px] sm:text-[20px] text-[#00349A] flex-initial font-[
  Satoshi] mt-0 md:mt-2">{data.cardTitle}</h2>
      </div> 
        <div className="flex flex-col justify-between py-8 sm:h-[95px]">
              <p className='font-medium text-[#00349A] text-[12px] md:text-base mx-1'>{data.tutor}</p>
        </div>
    </div>
    </div>
  </>
  )
}

export default AboutCard