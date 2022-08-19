import DottedFrame from '../../assets/images/Dotted-frame.svg'

export default function StartLearningVideo() {
        return (
            <section className=''>
                <div  className='relative
                 items-center gap-y-16 gap-x-20 px-4
                lg:max-w-8xl  lg:px-8 place-items-start'>

                         <div className="bg-[#14142B] opacity-20 absolute w-[430px] h-[500px] -top-[3rem] right-0">
                        </div>
                        <img className='absolute left-[155px] -top-0' src={DottedFrame} alt="dotted-frame" />

                 
                </div>
                      
            </section>
        )
}

