import { useEffect, useState } from "react"
import SectionHeader from "../../../component/common/SectionHeader"
import ProductImage from "../../../component/common/Card/ProductImage"
import ProductInfo from "../../../component/common/Card/ProductInfo"
import Button from "../../../component/common/Button"

export default function BestSellingProducts() {
  const [isOpen,setIsOpen]=useState(false)
  const [product,setProduct]=useState([])
  useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then((data)=>{
      return data.json()})
    .then((item)=>{
      return setProduct(item.products)
    })

    
  },[])
  function handleClick(){
    setIsOpen(!isOpen)
  }
  console.log([...product.slice(7)])
  console.log([...product.slice(0,8)])
  return (
    <section className="mt-30 mx-5 lg:mx-18   border-b border-b-gray-300">
    <SectionHeader tag={"This Month"} title={"Best Selling Products"}   opcity={'0'}/>
    <div className={`mt-10 flex gap-3 lg:gap-8  items-center justify-start overflow-x-auto flex-wrap `}
    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >  
      {[...product.slice(0,4)].map((item) => (
        
       <div key={item.id} className="w-[300px] h-[350px] shrink-0" >         
          <ProductImage  image={item.thumbnail} disCountBgColor={`transparent`} />
          <ProductInfo title={item.title} price={`${item.price} $`} originalPrice={+(item.price / (1 - item.discountPercentage / 100)).toFixed(2)} rating={item.rating} reviews={item.rating} />
        </div>
      )
      )}
       {isOpen&&[...product.slice(4)].map((item) => (       
        <div key={item.id} className="w-[300px] h-[350px] shrink-0" >         
           <ProductImage  image={item.thumbnail} disCountBgColor={`transparent`} />
           <ProductInfo title={item.title} price={`${item.price} $`} originalPrice={+(item.price / (1 - item.discountPercentage / 100)).toFixed(2)} rating={item.rating} reviews={item.rating} />
         </div>
       )
       )}

    </div>
    <div className="flex items-center justify-center my-10">  <Button onClick={handleClick} tag={`${isOpen?`Hide`:`View All Product`}`}  /></div>

   
   </section>
  )
}