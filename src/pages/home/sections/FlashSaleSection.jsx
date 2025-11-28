import SectionHeader from "../../../component/common/SectionHeader"
import CounterDownTimer from "../../../component/CounterDownTimer"
import ProductCarousel from "../../../component/common/Card/ProductCarousel"
import productData from "../../../utils/flashSlaeData"
import Button from "../../../component/common/Button"
import { useState } from "react";
export default function FlashSaleSection() {
  const [count, setCount] = useState({
    second: 5,
    minute: 10,
    hour: 20,
    day: 25

  });

  const [currentIndex, setCurrentIndex] = useState(0)
  function handleNext() {
    setCurrentIndex((prev) => {
      return (prev + 1) % productData.length
    })
  }
  function handlePrev() {
    setCurrentIndex((prev) => {
      if (prev == 0) return prev

      return (prev - 1 + productData.length) % productData.length
    })
  }
  return (

    <section className="mt-30 mx-5 lg:mx-18   border-b border-b-gray-300" >
      <SectionHeader tag="Today's" title="Flash Sales" next={handleNext} prev={handlePrev}>
        <CounterDownTimer count={count} setCount={setCount}>
          <div className="flex  items-center justify-between">
            <Card tag="Day" time={count.day} ><span className="text-[#DB4444]">:</span></Card>
            <Card tag="Hour" time={count.hour} ><span className="text-[#DB4444]">:</span></Card>
            <Card tag="Minute" time={count.minute} ><span className="text-[#DB4444]">:</span></Card>
            <Card tag="Second" time={count.second} />
          </div>
        </CounterDownTimer>
      </SectionHeader>
      <ProductCarousel currentIndex={currentIndex} />
      <div className="flex items-center justify-center my-10">  <Button tag={"View All Product"} /></div>

    </section>
  )
}

function Card({ tag, time, children }) {
  return (
    <div className="flex-col items-start justify-between  mr-4 my-4 md:my-0 ">
      <div className="text-[14px] font-semibold mb-2 flex items-center">{tag}</div>
      <div className="font-bold">{time} {children}</div>

    </div>
  )

}