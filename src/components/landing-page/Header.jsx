import {Input } from './Input'
import {ReviewsImage} from './ReviewsImage'
import {ReviewStar} from './Review-Star'
import {RightImage} from './Right-Image'
import {AbsolutePartHeader} from './Absolute-Part-Header'
import {HeaderBottomPart} from './Header-Bottom-Part'
import {AllLogos} from './All-Logos'


import './header.css'

const Header = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 box-border">
          <div className="wrapper flex font-[satoshi] lg:pt-[50px] mb-4 md:mb-8 lg:mb-[40px]">
              <div className="wrapper-left flex-1  pt-4 lg:pt-[40px]">
                 <div className="flex flex-col space-y-6 lg:space-y-5">
                    <div>
                    <h3 className="font-bold leading-[45px] text-[40px] md:leading-[50px] md:text-[45px] lg:leading-[55px] lg:text-[47px] xl:leading-[67px] xl:text-[54px] text-[#00349A]">Learning Skills for</h3>  
                    <h3 className="font-bold leading-[45px] text-[40px] md:leading-[50px] md:text-[45px]  lg:leading-[55px] lg:text-[47px] xl:leading-[67px] xl:text-[54px]  text-[#00349A]">a better career</h3>
                    </div>
                    <div className="">
                    <p className="p1 font-normal text-base leading-6 text-[#636468]">We believe the world is more beautiful as each person</p>
                    <p className="p2 font-normal text-base leading-6 text-[#636468]">get more skill and know how to implement. </p>
                    <p className="p3 hidden font-normal text-base leading-6 text-[#636468]">We believe the world is more beautiful as each person get more skill and know how to implement. </p>

                    </div>
                    <Input />  
                    <div  className=" flex reviewWrapper items-center flex-wrap">
                        <div className="left flex items-center">
                           <ReviewsImage type="rev1"/>
                           <ReviewsImage type="rev2"/>
                           <ReviewsImage type="rev3"/>
                           <ReviewsImage type="rev4"/>
                           <ReviewsImage type="rev5"/>
                        </div> 
                        <div className="right review pl-4 ">
                            <div className="top">
                                <p className="font-normal text-base leading-[22px] text-[#636367]">32k+ Review with 5 star rating </p>
                            </div>
                            <div className="bottom  reviewStar flex items-center">
                              <ReviewStar color = "black"/>
                              <ReviewStar  color = "black"/>
                              <ReviewStar  color = "black"/>
                              <ReviewStar color="black"/>
                              <ReviewStar color="white"/>
                            </div>
                        </div>
                    </div>
                 </div>
              </div>
              <div className="wrapper-right relative flex-1  flex flex-col gap-[12px]">
                 <div className="top flex gap-[12px] items-center">
                     <div className="left flex-1 ">
                           <RightImage type="part1" />
                     </div>
                     <div className="right flex-1 ">
                         <RightImage  type="part2"/>
                     </div>
                 </div>
                 <div className="bottom flex gap-[12px] items-center">
                 <div className="left flex-1  ">
                         <RightImage  type="part3"/>
                     </div>
                     <div className="right flex-1 ">
                         <RightImage  type="part4"/>
                     </div>
                 </div>
                      
              <div className="absolute stack1 z-10 -top-10 -left-36">
               <AbsolutePartHeader />
              </div>
              <div  className="absolute stack2 z-10 top-[40%] -right-[70px] hidden xl:block">
               <AbsolutePartHeader />
              </div>
              <div  className="absolute stack3 z-10 bottom-2 -left-36">
               <AbsolutePartHeader />
              </div> 
              </div>     
              
           </div>
              {/* below main header */}
              <div className="my-[40px] lg:my-[50px] flex items-center">
                  <HeaderBottomPart type="A"/>
                  <HeaderBottomPart type="B"/>
                  <HeaderBottomPart type="C"/>
                  <HeaderBottomPart type="D"/>
            
              </div>

           <hr className="bg-[#E5E7EB] border"/>
           <div className ="my-[30px]">
           <AllLogos />
           </div>
     </div>
  );
}

export default Header;
