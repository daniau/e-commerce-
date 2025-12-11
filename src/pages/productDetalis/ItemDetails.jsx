import { Heart, Star } from "lucide-react"
import { useState } from "react"
import Button from "../../component/common/Button"
import { useCart } from "../../context/CartContext"

export default function ItemDetails({ item }) {
  const [count, setCount] = useState(0)
  const{cart,addToCart,updateQuantity}=useCart()
  function handlePlus() {
  setCount((prev)=>prev+1)
   
  }
  function handleAddition(item){
    if(count===0) return

    if(cart.find((i)=>i.id===item.id)){
      updateQuantity(item.id,count)
    }else addToCart(item)

  }
  function handleDes() {
    if(count==0) return 
    return setCount((prev)=>prev-1)
     
    }
  return (
    <section className="w-full md:w-[50%] flex flex-col justify-start">
      <h1 className="text-black mb-4 font-bold text-2xl md:text-4xl">{item.title}</h1>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((index) => {
          let cilp = (100 - (((item.rating % 1).toFixed(2)) * 100).toFixed(0)) + "%"
          if (index <= Math.floor(item.rating)) {
            return <Star key={index} className="fill-[#FFD700] text-[#FFD700] inline" />
          }
          // else 
          //   return <Star className="text-[#FFD700] fill-[#FFD700] inline " clipPath={`inset(0 ${cilp} 0 0)`} key={index} />
     

        })}
        <span className="ml-6 font-medium text-gray-500">{item.rating}</span>

      </div>
      <p className="font-medium text-xl md:text-2xl mt-7">({item.price}$)</p>
      <p className="font-medium text-[18px] md:text-xl mt-8">{item.description}</p>
      <hr className="border-t-2 border-gray-500 w-full mt-10" />
      <div className="font-medium text-black text-[18px] md:text-xl mt-8 flex justify-start items-center">Colours:
        <div className="w-6 h-6 bg-black rounded-[50%] ml-5"></div>
        <div className="w-6 h-6 bg-[#DB4444] rounded-[50%] ml-5"></div>


      </div>
      <div className="font-medium text-black text-[18px] md:text-xl mt-8 flex justify-start items-center">
        <p>Size:</p>
        <Butt tag={"XS"} />
        <Butt tag={"S"} />
        <Butt tag={"M"} />
        <Butt tag={"L"} />
        <Butt tag={"XL"} />


      </div>

      <div className="font-medium text-black text-[18px] md:text-xl mt-8 flex justify-start items-center gap-6 md:flex-nowrap flex-wrap">
        <div className="flex ">
        <button className="hover:bg-[#DB4444]  hover:text-white  cursor-pointer border border-gray-800 p-2 rounded-l-[5px] transition-all duration-300 font-bold"  onClick={handleDes}>-</button>
        <span className="border-y border-gray-800 py-2 px-8">{count}</span>
        <button  className="hover:bg-[#DB4444]  hover:text-white  cursor-pointer border border-gray-800 p-2 rounded-r-[5px] transition-all duration-300  font-bold" onClick={handlePlus}>+</button>
        </div>
        <Button tag={"Add to Cart"} onClick={()=>handleAddition(item)}/>
      
          <Heart className="hover:underline text-[#DB4444] hover:text-white hover:bg-[#DB4444] hover:rounded-[50%] transition-all duration-300 cursor-pointer ml-8  text-xl md:text-2xl"/>
       
      
      </div>

    </section>
  )
}
function Butt({ tag }) {
  return (
    <button className="hover:bg-[#DB4444] hover:text-white hover:border-white cursor-pointer border border-gray-800 mx-2 p-2 rounded-[5px] transition-all duration-300 font-bold">
      {tag}
    </button>
  );
}

