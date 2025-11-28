import { Heart, Eye } from "lucide-react"
import { useState } from "react"
export default function ProductImage({ image, disCount ,disCountBgColor}) {
  const[hover,setHover]=useState(false)
  function update(){
    setHover(!hover)
  }
  return (
    <div className="flex-col   bg-[#F5F5F5]  w-[300px] h-fit  " onMouseEnter={update} onMouseLeave={update}>
      <div className="flex w-fit h-fit justify-between items-start gap-2  px-3 pb-2 pt-4 ">
        <div className={` w-10 h-6 rounded text-sm flex items-center justify-center text-white`}
         style={{backgroundColor: disCountBgColor||`#DB4444 ` }}>{disCount}</div>
        <img src={image} width={180} height={180} className="transition transform duration-700 ease-in-out hover:scale-112" />
        <div className=" flex flex-col  ">
          <button className=" cursor-pointer bg-[#F5F5F5] rounded-2xl mb-4"><Heart  /></button>
          <button className=" cursor-pointer bg-[#F5F5F5] rounded-2xl"><Eye /></button>

        </div>

      </div>
      <button  className={`bg-black text-white w-full items-end py-2 cursor-pointer hover:duration-500  ${hover? "block":"opacity-0"} rounded-b-xl`}>Add To Cart</button>
    </div>




  )
}