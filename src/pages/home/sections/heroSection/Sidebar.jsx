import { useState } from "react"
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";



export default function Sidebar() {
  const [activeDropDown, setActiveDropDown] = useState("")
  const [isSmall, setIsSmal] = useState(true)
  const navItems = [
    { title: "Woman's Fashion", hasDropDown: true, dropdownItems: ["Go to my setting"] },
    { title: "Men's Fashion", hasDropDown: true, dropdownItems: ["Go to my setting"] },
    { title: "Electronics", hasDropDown: false },
    { title: "Home & LifeStyle", hasDropDown: false },
    { title: "Medicine", hasDropDown: false },
    { title: "Sport & Outdoor", hasDropDown: false },
    { title: "Baby's & Toy's", hasDropDown: false },
    { title: "Groceries & Pets", hasDropDown: false },
    { title: "Health & Beauty", hasDropDown: false },

  ]
  function handleScreen() {
    setIsSmal(!isSmall)

  }

  return (<div className="flex">


    <div className={`bg-white text-black  md:flex md:flex-col pl-5 lg:pl-18 text-[16px] font-semibold pt-8 md:border-r md:border-r-gray-300 
     ${isSmall ? "hidden" : "sm:w-full md:w-[280px] lg:w-[328px]"}
       `} >

      {navItems.map((item, index) => (
        <div key={index} >
          <div className="px-3 py-2 cursor-pointer flex items-center justify-between w-[250px] hover:bg-[#DB4444] hover:text-white"
            onClick={() => { item.hasDropDown && setActiveDropDown(activeDropDown === item.title ? "" : item.title) }}
          >
            <span>{item.title}</span>



            {item.hasDropDown && (
              <ChevronDown size={22} strokeWidth={3.5}
                className={`transition-transform duration-800 ${activeDropDown === item.title ? 'rotate-180' : ''} `}
              />
            )}
          </div>
          {item.hasDropDown && activeDropDown === item.title && (
            <div className="bg-white font-normal">
              {item.dropdownItems.map((item, index) => (
                <div key={index} className=" text-center my-2">{item}</div>
              ))}

            </div>
          )}

        </div>
      ))}

    </div>
    <button className={`md:hidden p-3  bg-[#DB4444] text-white w-[35px] h-[250px] flex items-center ${!isSmall?"h-[390px]":"h-[250px]"} `}
      onClick={handleScreen}
    >
      {isSmall ? <ChevronRight size={35} strokeWidth={3.5} /> : <ChevronLeft size={40} strokeWidth={3.5} />}
    </button>
  </div>

  )

}