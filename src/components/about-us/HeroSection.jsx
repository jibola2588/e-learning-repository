import React from 'react'

function HeroSection() {
    return (
        <div className='bg-[#EBF1FF] overflow-hidden'>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 relative">
                <div className="flex flex-col md:flex-row items-center sm:items-start text-center sm:text-start">
                    <div className="heroText flex-auto mt-2 sm:mt-12 space-y-5  sm:space-y-6 flex-col font-[Satoshi]">
                        <h1 className='text-[#00349A] font-bold leading-[45px] text-[25px] md:leading-[50px] md:text-[45px] lg:leading-[55px] lg:text-[47px] xl:leading-[67px] xl:text-[54px]'>About the Solution</h1>
                        <div className=''>
                            <p className="font-normal text-base leading-6 text-[#14142B]">Discover a wide range of resources written by experienced tech professionals</p>
                            <p className="font-normal text-base leading-6 text-[#14142B]">at Enyata. Never miss a new post, stay updated by subscribing to our blog.</p>
                        </div>
                    </div>
                    <div className="heroShapes flex-auto mt-6 sm:mt-0">
                        <div className="shape1 w-44 sm:w-[296.77px] h-44 sm:h-[296.77px] bg-[#FBE3B2] rounded-full"></div>
                        <div className="shape1 w-44 sm:w-[296.77px] h-44 sm:h-[296.77px] bg-[#D2F8FF] rounded-full absolute left-[150px] sm:left-[850px] top-[350px] sm:top-[135px]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection