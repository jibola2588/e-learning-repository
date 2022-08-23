import ELearningVideo  from "../../components/landing-page/E-learningVideo"
import LearnFromSection  from "../../components/landing-page/learn-from-section"


export default function LearnFromAndVideo() {
    
    return (
        <div className="grid lg:grid-cols-2 max-w-6xl mx-auto pt-40 pb-32 relative space-y-[8rem] lg:space-y-0">
        < ELearningVideo />
        < LearnFromSection />
        </div>
    )
}

// import ELearningVideo  from "../../components/blog-page/E-learningVideo"
// import LearnFromSection  from "../../components/blog-page/Learn-from-Section"


// export default function LearnFromAndVideo() {
    
//     return (
//         <div className="grid lg:grid-cols-2 pt-40 pb-52 relative space-y-[8rem] lg:space-y-0">
//         < LearnFromSection />
//         < ELearningVideo />

//         </div>
//     )
// }
