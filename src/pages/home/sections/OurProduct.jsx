import { useEffect, useState } from "react"
import SectionHeader from "../../../component/common/SectionHeader"
import ProductImage from "../../../component/common/Card/ProductImage"
import ProductInfo from "../../../component/common/Card/ProductInfo"
import Button from "../../../component/common/Button"
import { Link } from 'react-router';

export default function OurProduct() {
  const [isOpen,setIsOpen]=useState(false)
  const [product,setProduct]=useState([])
  const[status,setStatus]=useState({isLoading:true,error:null})
  useEffect(()=>{
    async function fetchData() {
      try {
       const response=await fetch("https://dummyjson.com/products")
       console.log(response)
       if(!response.ok) throw new Error("Failed to fetch products")
       const data=await response.json()
       setProduct(data.products)
        
      } catch (error) {
        setStatus((prev)=>({...prev,error}))
        
      }finally{
        setStatus((prev)=>( {...prev,isLoading:false}))
      }
      
    }
    fetchData()
   

    
  },[])
  function handleClick(){
    setIsOpen(!isOpen)
  }

  const products=isOpen?product:product.slice(0,8)
 
  return (
    <section className="mt-30 mx-5 lg:mx-18   border-b border-b-gray-300">
    <SectionHeader tag={"Our Products"} title={"Explore Our Products"}   opcity={'0'}/>
    {status.isLoading&& <p className="text-center my-10">Loading...</p>}
    {status.error&& <p className="text-center text-red-500">{status.error.message}</p>}
   {!status.isLoading&&!status.error&& <ul className={`mt-10 flex gap-3 lg:gap-8  items-center justify-start overflow-x-auto flex-wrap `}
    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >  
      {products.map((item) => (
        
       <li  key={item.id} className="w-[300px] h-[350px] shrink-0" >         
        <Link to={`/products/${item.id}`}>
        <ProductImage product={item}  image={item.thumbnail} disCountBgColor={`transparent`} />
        </Link> 
          <ProductInfo title={item.title} price={`${item.price} $`} originalPrice={+(item.price / (1 - item.discountPercentage / 100)).toFixed(2)} rating={item.rating} reviews={item.rating} />
        </li>
      )
      )}
    </ul>}
    <div className="flex items-center justify-center my-10">  <Button onClick={handleClick} tag={`${isOpen?`Hide`:`View All Product`}`}  /></div>

   
   </section>
  )
}