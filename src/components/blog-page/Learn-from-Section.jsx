// import DottedFrame from '../../assets/images/Dotted-frame.svg'

export default function StartLearning() {
    return (
        <section className='bg-[#5AB1BB] py-20'>
            <div  className='grid grid-cols-2 gap-4 mx-auto 
             max-w-6xl 
             items-center gap-y-16 gap-x-20 px-4
            lg:max-w-8xl lg:grid-cols-2 lg:px-8 place-items-start'>
                    <div className="place-self-start">
                        <h5 className="text-[42px]">Learn from leading  universities and companies</h5>
                        <p className="col-5 text-[22px] pr-12">
                        Start streams on video demand lectures today from top instructors in subject like business, computer science, data science, language learning, & more.
                        </p>
                        <button className="bg-[#00349A] rounded-[40px] text-white py-[18px] px-[32px]">Start Learning Now</button>
                    </div>

            </div>

        </section>
    )
}

