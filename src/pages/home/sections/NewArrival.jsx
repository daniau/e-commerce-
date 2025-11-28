import playStation from "../../../assets/images/playSation.png";
import women from "../../../assets/images/women.jpg";
import Speakers from "../../../assets/images/speakers.png";
import Perfum from "../../../assets/images/perfum.png";
import SectionHeader from "../../../component/common/SectionHeader"

import { ArrowRight } from "lucide-react";

export default function NewArrival() {
  return (
    <section className="mt-25 mx-5 lg:mx-18 ">
        <SectionHeader tag={"Featured"} title={"New Arrival"}   opcity={'0'}/>
     <div className="mt-10 grid grid-rows-4 md:grid-cols-[40%_30%_30%] md:grid-rows-[50%_50%]  md:h-[500px] gap-5 mx-auto ">
      <div className="bg-cover bg-center bg-black text-white p-4 md:row-span-2 transition-transform duration-1000 ease-in-out hover:scale-103"
      style={{backgroundImage:`url(${playStation})`}}>
        <NewArrivalInfo title={"Play Station 5"} description={"Black and whit version of the PS5 coming out on sale."} />

      </div>
      <div className="bg-cover bg-right    bg-black text-white p-4 md:col-span-2 transition-transform duration-1000 ease-in-out hover:scale-103"
      style={{backgroundImage:`url(${women})`}}>
        <NewArrivalInfo title={"Women's Collections"} description={"Featured woman collections that giv you another vibe."} />

      </div>
      <div className="bg-cover bg-center bg-black text-white p-4 transition-transform duration-1000 ease-in-out hover:scale-105"
      style={{backgroundImage:`url(${Speakers})`}}>
        <NewArrivalInfo title={"Speakers"} description={"Amazon wireless speakers."} />

      </div>
      <div className="bg-cover bg-center  bg-black text-white p-4 transition-transform duration-1000 ease-in-out hover:scale-105"
      style={{backgroundImage:`url(${Perfum})`}}>
        <NewArrivalInfo title={"Perfum"} description={"GUCCI INTENSE OUD EDP."} />

      </div>


    </div>
    
    </section>
   
  )
}
function NewArrivalInfo({title,description}){
  return(
    <div className="flex flex-col justify-end items-start  h-full">
      <h1 className="font-bold ">{title}</h1>
      <p className="font-normal text-[14px] w-[70%]">{description}</p>
      <button className="underline cursor-pointer hover:text-gray-300 transition-all duration-300 flex items-center mr-1">Shop Now 
      <ArrowRight strokeWidth={1} />
      </button>
    </div>
    
  )
} 