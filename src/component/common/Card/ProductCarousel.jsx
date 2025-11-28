
import ProductImage from "../Card/ProductImage"
import ProductInfo from "./ProductInfo";
import productData from "../../../utils/flashSlaeData"
import { useState ,useEffect} from "react";

export default function ProductCarousel({currentIndex}) {

    const visibleProduct=productData.concat().slice(currentIndex)

  return (
    <div className={`mt-10 flex gap-3 lg:gap-8  items-center justify-start overflow-x-auto  `}
    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >  
      {visibleProduct.map((item) => (
        <div key={item.id} className="w-[300px] h-[350px] shrink-0" >
          
         
          <ProductImage  image={item.image} disCount={item.disCount} />
          <ProductInfo title={item.title} price={item.price} originalPrice={item.originalPrice} rating={item.rating} reviews={item.reviews} />
        </div>

      )



      )}

    </div>
  )
}