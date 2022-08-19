
export const Input = () => {
  return (
    <div>
      <div className="flex items-center lg:mt-[25px] w-5/6 rounded-full bg-[#EFF0F6]" >
             <input type="email" placeholder="Enter your email" className="flex-1 h-[100%] md:pl-[16px] lg:pl-[25px] border-none bg-transparent  outline-none placeholder-gray-800"/>
             <button className="flex-2 text-sm  leading-5 px-[32px] py-[14px] bg-[#00349A] rounded-full text-white text-sm leading-5 cursor-pointer hover:bg-[#fff] hover:text-[#00349A] border border-[#00349A]">14 Days Trial</button>
     </div>
    </div>
  );
}


