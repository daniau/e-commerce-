import { Truck, Headphones, ShieldCheck } from "lucide-react"
export default function OurServices() {
  return (
    <section className="mt-25 mx-5 lg:mx-18 flex items-center justify-evenly flex-wrap h-[450px] md:h-fit">
      <Services title={"FREE AND FAST DELIVERY"} decription={"Free delivery for all orders over $140"}>
        <Truck  size={40} color={"white"} strokeWidth={1}/>
      </Services>

      <Services title={"CUSTOMER SERVICE"} decription={"Friendly 24/7 customer support"}>
        <Headphones  size={40} color={"white"} strokeWidth={1}/>
      </Services>

      <Services title={"SECURE PAYMENT"} decription={"100% secure payment system"}>
        <ShieldCheck  size={40} color={"white"} strokeWidth={1}/>
      </Services>


    </section>
  )
}
function Services({title,decription,children}){
  return(
    <div className= "flex flex-col items-center justify-between h-[140px]">
     <div className="bg-black border-8 border-gray-400 rounded-[50%] w-20 h-20 flex items-center justify-center">
      {children}

     </div>
    <div className="flex  flex-col items-center">
        <h2 className="font-bold text-black">{title}</h2>
        <p>{decription}</p>

    </div>
    
    </div>
   
  )
}