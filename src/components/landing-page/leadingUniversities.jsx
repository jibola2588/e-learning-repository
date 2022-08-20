import BackgroundImg from "../../assets/images/leadingUniversitiesbackdrop.png"
import OverlayImg from "../../assets/images/universityOverlay.png"
import "./leadingUniversities.css"


// import './header.css'

const leadingUniversities = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 ">
            <div className="wrapper flex flex-wrap items-start justify-between  font-[satoshi] lg:pt-[50px] ">
                <div className="image-stack right relative flex-1  flex flex-row md:right-[10rem]">
                    <div className="image-stack__item image-stack__item--bottom">
                        <img src={BackgroundImg} alt="" />
                    </div>
                    <div className="image-stack__item image-stack__item--top border-white   ">
                        <img src={OverlayImg} alt="" />
                    </div>
                </div>
                <div className="left flex-2 mt-5 pt-4 lg:pt-[40px]">
                    <div className="align-center">
                        <h3 className="font-bold md:leading-[20px] md:text-[26px] lg:leading-[40px] lg:text-[30px] text-black">Learning from leading</h3>
                        <h3 className="font-bold md:leading-[20px] md:text-[26px] lg:leading-[40px] lg:text-[30px]  text-black">Universities and companies</h3>
                        <div className="mt-2 lg:mt-[14px]">
                            <p className="font-normal text-base leading-6 text-[#636468]">Start Streams on video demand lectures today from top</p>
                            <p className="font-normal text-base leading-6 text-[#636468]">instructors in subjects like business, computer science,</p>
                            <p className="font-normal text-base leading-6 text-[#636468]">data science, language learning & more.</p>
                        </div>
                        <div className="py-[16px]">
                        <button 
                            className="font-bold flex-2 px-[32px] py-[14px] bg-[#00349A] rounded-full text-white text-sm leading-5 cursor-pointer hover:bg-[#fff] hover:text-[#00349A] border border-[#00349A]">
                            Start learning now
                        </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default leadingUniversities;
