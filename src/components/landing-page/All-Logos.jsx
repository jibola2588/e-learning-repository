
import {SingleLogo} from './Single-Logo'

export const AllLogos = () => {
  return (
       <div className = " flex items-center justify-center ">
        <div className = " flex gap-[20px]"> 
         <SingleLogo type="bnb" /> 
         <SingleLogo type="hub" /> 
         <SingleLogo type="google" /> 
         <SingleLogo type="soft" /> 
         <SingleLogo type="mart" /> 
         <SingleLogo type="fed" /> 
        </div>
     </div>
  );
}




