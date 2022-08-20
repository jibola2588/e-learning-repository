import Navbar from "../../components/navbars/Landing-Page-Navbar"
import Header from "../../components/landing-page/Header"
import Testimony from "../../components/landing-page/Testimony"
import Footer from "../../components/footer/Footer"


export const LandingPage = () => { 
    return ( 
        <div>
            <Navbar />
            <Header /> 
            <Testimony />
             <Footer /> 
        </div>
    )
}