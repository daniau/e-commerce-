import { useState } from "react"
import SectionHeader from "../../../component/common/SectionHeader"
import ProductImage from "../../../component/common/Card/ProductImage"
import ProductInfo from "../../../component/common/Card/ProductInfo"
import Button from "../../../component/common/Button"
import { Link } from 'react-router';
import { useProduct } from "../../../context/productContext"

export default function BestSellingProducts() {
  const [isOpen, setIsOpen] = useState(false)
  const{products,status}=useProduct()
 
  function handleClick() {
    setIsOpen(!isOpen)
  }

  const visibleProducts =isOpen?products:products.slice(0,4)


  return (
    <section className="mt-30 mx-5 lg:mx-18   border-b border-b-gray-300">
      <SectionHeader tag={"This Month"} title={"Best Selling Products"} opcity={'0'} />
      {status.isLoading?<p className="text-center  ">Loading...</p>:status.error?<p className="text-center text-red-500 mt-30 mx-5 lg:mx-18">{status.error.message}</p>:
      <ul className={`mt-10 flex gap-3 lg:gap-8  items-center justify-start overflow-x-auto flex-wrap `}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {visibleProducts .map((item) => (

          <li key={item.id} className="w-[300px] h-[350px] shrink-0" >
            <Link to={`/products/${item.id}`} >
              <ProductImage image={item.thumbnail} disCountBgColor={`transparent`} product={item} />
            </Link>
            <ProductInfo title={item.title} price={`${item.price} $`} originalPrice={+(item.price / (1 - item.discountPercentage / 100)).toFixed(2)} rating={item.rating} reviews={item.rating} />
          </li>
        )
        )}
      </ul>}
      <div className="flex items-center justify-center my-10">  <Button onClick={handleClick} tag={`${isOpen ? `Hide` : `View All Product`}`} /></div>
      

    </section>
  )
}