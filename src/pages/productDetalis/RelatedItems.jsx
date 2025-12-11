import { useEffect, useState } from "react"
import SectionHeader from "../../component/common/SectionHeader"
import ProductImage from "../../component/common/Card/ProductImage"
import ProductInfo from "../../component/common/Card/ProductInfo"
import { Link } from 'react-router';
export default function ReleatedItem({item}) {
  const [products,setProduct]=useState([])
  const [isLoading,setIsLoading]=useState(true)
  useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then((data)=>{
      return data.json()})
    .then((item)=>{
      setIsLoading(false)
      return setProduct(item.products)
    }).catch((error)=>{
      alert(error)
      setIsLoading(false)
    })

    
  },[])
  if(isLoading) return <p>Loading</p>
  
  const related=products.filter((i)=>((i.category===item.category)&&(i.id!==item.id)))

 
  return (
    <section className="mt-30 mx-5 lg:mx-18   border-b border-b-gray-300">
    <SectionHeader tag={"Releated Items"}   opcity={'0'}/>
    <div className={`mt-5 flex gap-3 lg:gap-8  items-center justify-start overflow-x-auto flex-wrap `}
    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >  
      {related.map((product) => (
        
       <Link to={`/products/${product.id}`}key={product.id} className="w-[300px] h-[350px] shrink-0" >         
          <ProductImage  image={product.thumbnail} disCountBgColor={`transparent`} product={product}/>
          <ProductInfo title={product.title} price={`${product.price} $`} originalPrice={+(product.price / (1 - product.discountPercentage / 100)).toFixed(2)} rating={product.rating} reviews={product.rating} />
        </Link>
      )
      )}

    </div>

   
   </section>
  )}
