import {Input } from './Input'
import {ReviewsImage} from './ReviewsImage'

const Header = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center font-[satoshi]">
              <div className="left flex-1">
                 <div>
                    <h3 className="font-bold leading-[67px] text-[56px] text-[#00349A]">Learning Skills for</h3> 
                    <h3 className="font-bold leading-[67px] text-[56px] text-[#00349A]">a better career</h3>
                    <div className="mt-2">
                    <p className="font-normal text-base leading-6 text-[#636468]">We believe the world is more beautiful as each person</p>
                    <p className="font-normal text-base leading-6 text-[#636468]">get more skill and know how to implement. </p>
                    </div>
                    <Input />  
                    <div  className="mt-4">
                        <div className="flex items-center">
                           <ReviewsImage type="rev1"/>
                           <ReviewsImage type="rev2"/>
                           <ReviewsImage type="rev3"/>
                           <ReviewsImage type="rev4"/>
                           <ReviewsImage type="rev5"/>
                        </div> 
                    </div>
                 </div>
              </div>
              <div className="right flex-1 bg-blue-500">
                right
              </div>             
           </div>
    
     </div>
  );
}

export default Header;
