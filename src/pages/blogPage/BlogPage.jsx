import Navbar from "../../components/navbars/Landing-Page-Navbar"
import { HeroSection } from "../../components/blog-page/heroSection"
import ELearningVideo  from "../../components/blog-page/E-learningVideo"
import LearnFromSection  from "../../components/blog-page/Learn-from-Section"
import { Tabs } from "../../components/blog-page/Tabs"
import Footer from "../../components/footer/Footer"

export const BlogPage = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Tabs />
            
            <div className="grid lg:grid-cols-2 bg-[#5AB1BB] py-20">
            < LearnFromSection />
            < ELearningVideo />

            </div>

            <Footer />

        </div>
    )
}