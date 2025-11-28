import SectionHeader from "../../../component/common/SectionHeader"
import { Smartphone,Monitor, Camera,Headphones,Gamepad,Watch} from "lucide-react"
import { useState } from "react";

export default function BrowseCategories() {
  const browseCategory=[
    {id:0,name:"Phones", icon:Smartphone},
    {id:1,name:"Computers", icon:Monitor},
    {id:2,name:"Smartwatch", icon:Watch},
    {id:3,name:"Camera", icon:Camera},
    {id:4,name:"Headphones", icon:Headphones},
    {id:5,name:"Gaming", icon:Gamepad},
  ]
  const [currentIndex, setCurrentIndex] = useState(0)
  function handleNext() {
    setCurrentIndex((prev) =>{
      if(prev===browseCategory.length-1)return prev
      return (prev + 1) % browseCategory.length
    })
  }
  function handlePrev() {
    setCurrentIndex((prev) =>{
      if(prev===0) return prev
       return (prev - 1 + browseCategory.length) % browseCategory.length
      })
  }
  const visibleBrowseCategory=[...browseCategory.slice(currentIndex),
    ...browseCategory.slice(0,currentIndex)
  ]
 

  
 
  return (
   <section className="mt-30 mx-5 lg:mx-18   border-b border-b-gray-300">
    <SectionHeader tag={"Categories"} title={"Browse By Category"} next={handleNext} prev={handlePrev} />
    <div className="flex items-center justify-between overflow-x-auto mb-5 gap-1  "
    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      {visibleBrowseCategory.map((item)=>(
        <div key={item.id} className="flex-col px-10 py-3  border border-black cursor-pointer items-center justify-items-center justify-between text-black hover:text-white hover:bg-[#DB4444] hover:duration-700 ease-in-out p-3
         md:px-20 md:py-6">
           <item.icon/>
          {item.name}    
        </div>
      ))}
    </div>
   
   </section>
  )
}