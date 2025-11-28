import { Star } from "lucide-react"
export default function ProductInfo({ title, price, originalPrice, rating, reviews }) {
  const arr = [1, 2, 3, 4, 5]
  return (
    <div className="flex-col mt-6 text-black">
      <h2 className="font-bold ">{title}</h2>
      <div>
        <span className="mr-6 text-[#DB4444] font-medium">{price}</span>
        <span className="text-gray-500 font-medium  line-through">{originalPrice}</span>
      </div>
      <span>
        {arr.map((item,index) => {
          if (item <= Math.floor(rating))
            return <Star className="text-[#FFD700] fill-[#FFD700] inline "  key={index}  />
            else if(item===Math.round(rating)){
              return <Star className="text-[#FFD700] fill-[#FFD700] inline " clipPath="inset(0 50% 0 0)" key={index} />
 
            }
          else return <Star className="fill-[#F5F5F5] inline"  key={index}/>

        })}
        <span className="ml-6 font-medium text-gray-500">{reviews}</span>
      </span>

    </div>
  )
}