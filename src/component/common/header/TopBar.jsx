import { useState } from "react"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';



export default function TopBar() {
  const [lang,setLang]=useState("English")
  // const [click,setClick]=useState(false)
  // function handleClick(){
  //   // setClick(!click)
  //   // console.log(click)
  // }
  function handleLng(e){
    setLang(e.target.value)
  }
  return (
    <header className= "bg-black text-white w-full h-[48px] text-left flex items-center justify-evenly text-[11px] md:text-[16px] lg:text-[18px] py-2 px-4 md:px-6  text-wrap h-fit">
      <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!  <span className="underline ">ShopNow</span></p>
      <select className="bg-black focus:outline-none cursor-pointer border-none font-medium" value={lang} onChange={handleLng}>
        <option value={"English"}>English</option>
        <option value={"Arabic"}>Arabic</option>


      </select>
      {/* <div className="relative w-fit ">
      <button className="bg-black   rounded py-2 px-0 md:px-4 font-medium outline-none  focus:outline-none cursor-pointer focus:ring-0 " onClick={handleClick}>
      English
      {click?<FontAwesomeIcon icon={faChevronUp} className="md:inline lg:pl-4 md:pl-2 hidden"/>:<FontAwesomeIcon  className="md:inline lg:pl-4 md:pl-2 hidden" icon={faChevronDown}/>}
      
       </button>
       <div className={`absolute top-full font-medium  left-0 bg-black text-white flex items-center overflow-hidden justify-center border-t-transparent
        ${click? "h-15 w-[100%]": "h-0"}`} ><p className="py-2 px-8 cursor-pointer">Arabic</p>
        
        </div>
      </div> */}
      
       
      
       
     
      
      </header>
  )
}