import AppleImage from "../../../../assets/images/apple.png";
import heroImage from"../../../../assets/images/heroImage.jpg"
import { ArrowRight } from "lucide-react";


export default function HeroBanner() {
  return (

    <div className="bg-black text-white flex justify-between items-center md:w-[70%] sm:text-lg  xl:text-5xl
    md:text-3xl md:mt-10 rounded-2xl   mr-5 lg:mr-20 py-4 px-5 md:py-8 md:px-10 w-[80%]  h-[230px] md:h-[350px] mt-4 shadow-lg shadow-gray-800/40 ">
      <div className="flex  flex-col items-start justify-between space-y-2  sm:space-y-3 md:space-y-5">
        <div className="flex  items-center">
          <img src={AppleImage} width={50} height={50} className="w-[35px] h-[35px]" alt="Apple logo" />
          <span className="text-[10px] md:text-[12px] lg:text-[14px] ">iphone 14 series</span>
        </div>
        <p className="lg:w-[60%]  md:leading-10 xl:leading-15 font-bold 
">Up to 10% off Voucher</p>
        <a href="" className="text-[12px] underline lg:text-[14px] flex  hover:text-gray-300 transition-all duration-300 mr-1 ">Shop Now
          <ArrowRight strokeWidth={1} />
        </a>


      </div>
      <img src={heroImage} className="md:w-[60%] md:h-[250px] h-[135px] w-[60%]  transition-transform duration-1000 ease-in-out hover:scale-105" alt="iPhone 14 banner" />
    </div>
  )
}