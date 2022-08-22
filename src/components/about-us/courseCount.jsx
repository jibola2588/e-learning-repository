
export const CourseCount = ({type}) => {
    let data;
    switch(type){ 
       case "A" : 
         data = { 
           num : '4500+',
           detail: "Graduates",
           border:true
         }
          break;
       case "B" : 
         data = { 
           num : '203+',
           detail: "UI/UX Designers",
           border:true
         }
          break;
       case "C" : 
         data = { 
           num : '354+',
           detail: "Frontend Developers",
           border:true
         }
          break;
       case "D" : 
         data = { 
           num : '1200+',
           detail: "Backend Developers",
           border:true
         }
          break;
        case "E" : 
        data = { 
        num : '1900+',
        detail: "Digital Marketers",
        border:true
        }
            break;
        case "F" : 
        data = { 
        num : '905+',
        detail: "Hardware Engineers",
        border:true
        }
            break;
        case "G" : 
        data = { 
        num : '1050+',
        detail: "Mobile Developers",
        border:false
        }
            break;
          default:
            break;
    }
    return (
      <div className="flex  items-center">
         <div className="left flex flex-col pr-[10px] sm:pr-[30px]">
           <div className="top">
             <h3 className="font-bold  text-[14px] leading-[18px] sm:text-[18px] sm:leading-[24px]">{data.num}+</h3>
           </div>
           <div className="bottom">
             <p className="font-normal  text-[14px] leading-[18px] sm:text-[18px] sm:leading-[24px] text-[#636367]">{data.detail}</p>
           </div>
         </div>
         <div className="right pr-[10px] sm:pr-[30px]">
           {data.border && <h3 className="border border-[#636367] bg-[#636367] h-[30px] "></h3>}
         </div>
      </div>
    );
  }
  
  
  