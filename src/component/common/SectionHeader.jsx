import { ArrowRight, ArrowLeft } from "lucide-react";
export default function SectionHeader({ tag, title, children,next,prev,opcity }) {
  return (
    <div >
      <div className="flex items-center justify-between w-fit text-[#DB4444] font-bold  ">
        <div className="bg-[#DB4444] w-6 h-10 rounded mr-4 "></div>
        <span>{tag}</span>

      </div>
      <div className="flex items-center justify-between  text-black text-xl md:text-3xl flex-wrap md:flex-nowrap my-6">
        <div className="flex  items-center justify-between flex-wrap  md:flex-nowrap">
        <h2 className="font-medium mr-20">{title}</h2>
        {children}
        </div>
        <div className="flex">
            <div className="bg-[#F5F5F5] w-8 h-8 rounded-2xl flex items-center  justify-center mr-4 cursor-pointer hover:bg-[#DB4444] hover:duration-700 hover:text-white"
            style={{opacity:` ${opcity}`||`1`}} > <ArrowLeft size={20} onClick={prev} /></div>
            <div className="bg-[#F5F5F5] w-8 h-8 rounded-2xl flex items-center  justify-center cursor-pointer hover:bg-[#DB4444] hover:duration-700 hover:text-white" 
              style={{opacity:` ${opcity}`||`1`}}
            >    <ArrowRight size={20} onClick={next} /></div>
          </div>
       
      </div>


    </div>

  )
}
