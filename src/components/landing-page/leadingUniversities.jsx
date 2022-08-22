// import BackgroundImg from "../../assets/images/leadingUniversitiesbackdrop.png"
// import ELearningVideo from '../../assets/videos/Stop Trying To Memorize Code  Do This Instead_480p.mp4'
// import "./leadingUniversities.css"
// import DottedFrame from '../../assets/images/Dotted-frame.svg'



// // import './header.css'

// const leadingUniversities = () => {
//     return (
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 ">
//             <div className="wrapper flex flex-wrap items-start justify-between  font-[satoshi] lg:pt-[50px] ">
//                 <div className="image-stack right relative flex-1  flex flex-row md:right-[10rem]">
//                     <div className="image-stack__item image-stack__item--bottom w-[430px] h-[570px] hidden md:block">
//                         <img className="bgImage" src={BackgroundImg} alt="" />
//                     </div>
//                     <img className='absolute left-[18rem] top-[2rem] hidden md:block' src={DottedFrame} alt="dotted-frame" />
//                     <div className="image-stack__item image-stack__item--top border-white   ">
//                     <video className='sm:m-auto ' src={ELearningVideo} type="video/mp4" controls></video>
//                     </div>
//                 </div>



//                 <div className="left flex-2 mt-5 pt-4 lg:pt-[40px]">
//                     <div className="align-center">
//                         <h5 className="font-bold md:leading-[30px] text-[25px] md:text-[30px] lg:leading-[40px] lg:text-[35px] text-black">Learning from leading</h5>
//                         <h5 className="font-bold md:leading-[30px] text-[25px] md:text-[30px] lg:leading-[40px] lg:text-[35px]  text-black">Universities and companies</h5>
//                         <div className="mt-2 lg:mt-[14px]">
//                             <p className="font-normal text-base leading-6 text-[#636468]">Start Streams on video demand lectures today from top</p>
//                             <p className="font-normal text-base leading-6 text-[#636468]">instructors in subjects like business, computer science,</p>
//                             <p className="font-normal text-base leading-6 text-[#636468]">data science, language learning & more.</p>
//                         </div>
//                         <div className="py-[16px]">
//                         <button 
//                             className="font-bold flex-2 px-[32px] py-[14px] bg-[#00349A] rounded-full text-white text-sm leading-5 cursor-pointer hover:bg-[#fff] hover:text-[#00349A] border border-[#00349A]">
//                             Start learning now
//                         </button>
//                         </div>
//                     </div>
//                 </div> 
//             </div>

//         </div>
//     );
// }

// export default leadingUniversities;

import ELearningVideo  from "../../components/blog-page/E-learningVideo"
import LearnFromSection  from "../../components/blog-page/Learn-from-Section"


export default function LearnFromAndVideo() {
    
    return (
        <div className="grid lg:grid-cols-2 pt-40 pb-52 relative space-y-[8rem] lg:space-y-0">
        < ELearningVideo />
        < LearnFromSection />

        </div>
    )
}


