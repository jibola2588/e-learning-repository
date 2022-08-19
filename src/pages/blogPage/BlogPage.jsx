import Navbar from "../../components/navbars/Landing-Page-Navbar"
import { HeroSection } from "../../components/blog-page/heroSection"
import ELearningVideo  from "../../components/blog-page/E-learningVideo"
import LearnFromSection  from "../../components/blog-page/Learn-from-Section"

export const BlogPage = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <div className="grid grid-cols-2">
            < LearnFromSection />
            < ELearningVideo />

            </div>

        </div>
    )
}