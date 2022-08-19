import {Input } from './Input'
import {ReviewsImage} from './ReviewsImage'
import {ReviewStar} from './Review-Star'
import {RightImage} from './Right-Image'
import {AbsolutePartHeader} from './Absolute-Part-Header'
import {HeaderBottomPart} from './Header-Bottom-Part'
import {AllLogos} from './All-Logos'


const Header = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-start font-[satoshi] lg:pt-[50px]">
              <div className="left flex-1  pt-4 lg:pt-[40px]">
                 <div>
                    <h3 className="font-bold leading-[67px] text-[54px] text-[#00349A]">Learning Skills for</h3> 
                    <h3 className="font-bold leading-[67px] text-[54px] text-[#00349A]">a better career</h3>
                    <div className="mt-2 lg:mt-[14px]">
                    <p className="font-normal text-base leading-6 text-[#636468]">We believe the world is more beautiful as each person</p>
                    <p className="font-normal text-base leading-6 text-[#636468]">get more skill and know how to implement. </p>
                    </div>
                    <Input />  
                    <div  className="lg:mt-[30px] flex items-center">
                        <div className="left flex items-center">
                           <ReviewsImage type="rev1"/>
                           <ReviewsImage type="rev2"/>
                           <ReviewsImage type="rev3"/>
                           <ReviewsImage type="rev4"/>
                           <ReviewsImage type="rev5"/>
                        </div> 
                        <div className="right pl-4">
                            <div className="top">
                                <p className="font-normal text-base leading-[22px] text-[#636367]">32k+ Review with 5 star rating </p>
                            </div>
                            <div className="bottom flex items-center">
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
              <div className="right relative flex-1  flex flex-col gap-[12px]">
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
                   {/* absolute part          */}
              <div className="absolute z-10 -top-10 -left-36">
               <AbsolutePartHeader />
              </div>
              <div  className="absolute z-10 top-[40%] -right-[70px]">
               <AbsolutePartHeader />
              </div>
              <div  className="absolute z-10 bottom-2 -left-36">
               <AbsolutePartHeader />
              </div>
              </div>    
              
           </div>
              {/* below main header */}
              <div className="mt-[45px] mb-[50px] flex items-center">
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
