import { use, useState } from "react"

export default function ImageSection({ item }) {
  return (
    <section className="w-fit h-full flex justify-start items-center gap-2 flex-wrap md:flex-nowrap mt-10">
      <div className="bg-[#F5F5F5] w-fit border border-[#DB4444] rounded-xl">
        <img  key={item.id} src={item.thumbnail} alt={item.title} className="max-w-30 h-[50%]  " />

      </div>
      <div className="bg-[#F5F5F5] w-fit h-full">
        <img key={item.id} src={item.thumbnail} alt={item.title}  className="min-w-70 h-full " />
      </div>

    </section>
  )

}
