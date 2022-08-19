import img1 from '../../assets/images/test1.png'
import img2 from '../../assets/images/test2.png'
import img3 from '../../assets/images/test3.png'


export const Testimonials = ({type}) => {
    let data ;
    switch(type){ 
        case "A":
            data = {
                img : img1,
                name:"John Doe",
                company:"Testla",
                content:'The service was absolutely impeccible. I see myself and my family visiting here much more frequently.'
            }
            break;
         case "B":   
            data = {
                img : img2,
                name:"Wesley Stone",
                company:"Facebook",
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio fermentum facilisis blandit aliquet tellus et nulla faucibus. Est, mattis facilisis mauris venenatis et dolor, nam. Consequat sed penatibus nulla ultrices ut mattis facilisi donec egestas. Dolor bibendum odio est mattis urna. At maecenas convallis in sit.'
            }
            break;
        case "C":
            data = {
                img : img3,
                name:"Alfred Steve",
                company:"Amazon",
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio fermentum facilisis blandit aliquet tellus et nulla faucibus. Est, mattis facilisis mauris venenatis et dolor, nam. Consequat sed penatibus nulla ultrices.'
            }
            break;
        default:
            break;

    }
  return (
    <div className="flex  items-center max-w-4xl mt-[50px]">
           <div className="left w-1/4 pr-8">
              <div className="top flex items-center ">
                 <div className="left w-[49px] h-[49px]">
                      <img src={data.img} alt="testimonial image w-[100%] h-[100%] object-cover"/>
                 </div>
                 <div className="right pl-4">
                      <h3 className="font-bold text-base leading-[21.6px]">{data.name}</h3>
                      <p  className="font-normal text-sm leading-[18.9px] text-[#4f4f4f]" >{data.company}</p>
                 </div>
              </div>
              
           </div>

           <div className="right w-3/4">
                <div className='font-normal text-base leading-[26.32px]  border-l-[3px] border-[CBE2EC]  pl-8'>
                   {data.content}
                </div>
           </div>
       </div>
  );
}


