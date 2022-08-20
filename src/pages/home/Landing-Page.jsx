import Navbar from "../../components/navbars/Landing-Page-Navbar"
import Header from "../../components/landing-page/Header"
import Testimony from "../../components/landing-page/Testimony"
import Footer from "../../components/footer/Footer"
import LeadingUniversities from "../../components/landing-page/leadingUniversities"


export const LandingPage = () => { 
    return ( 
        <div>
            <Navbar />
            <Header /> 
            <LeadingUniversities />
            <Testimony />
             <Footer /> 
        </div>
    )
}