import CounterDownTimer from "../../../component/CounterDownTimer";
import ImageFrame from "../../../assets/images/frame.png"
import { useState } from "react";

export default function Hero() {
  const [count,setCount]=useState({
    day:5,
    hour:23,
    minute:5,
    second:10
  })
  return (
    <section className="bg-black flex flex-col-reverse justify-around gap-3 md:gap-0  items-center md:flex-row mt-30 mx-5 lg:mx-18 md:px-6 md:py:20 px-5 py-10 ">
      <div className="text-white flex flex-col justify-between  items-start gap-6">
        <p className="text-[#00FF66] md:text-xl font-normal">Categories</p>
        <h2 className="md:text-4xl text-3xl font-medium md:font-extrabold md:w-[60%]">Enhance Your Music Experience</h2>
        <CounterDownTimer  count={count} setCount={setCount}>
         <div className="flex">
         <Card time={count.day} tag={"Days"}/>
          <Card time={count.hour} tag={"Hours"}/>
          <Card time={count.minute} tag={"Minutes"}/>
          <Card time={count.second} tag={"Seconds"}/>  
          </div>      
          </CounterDownTimer>
        <button className="bg-[#00FF66] p-3 text-white font-medium rounded-md px-6 cursor-pointer">Buy Now !</button>
      </div>
      <div>
        <img src={ImageFrame} width={600}  className=" transition-transform duration-1000 ease-in-out hover:scale-105"  />
      </div>

    </section>
  )
}
function Card({ tag, time, children }) {
  return (
    <div className="flex flex-col items-center justify-center  w-[55px] h-[55px] md:w-18 md:h-18 mr-2 my-4  md:mr-4
    md:my-0 bg-[#F5F5F5] text-black rounded-[50%]">
      <div className="font-extrabold text-[16px]">{time} {children}</div>
      <div className="text-[12px] md:text-[16px] mb-2 flex items-center">{tag}</div>

    </div>
  )

}