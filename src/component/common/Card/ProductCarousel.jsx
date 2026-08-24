import { useEffect, useState } from "react";
import { Link } from "react-router";
import ProductImage from "../Card/ProductImage";
import ProductInfo from "./ProductInfo";
import { useProduct } from "../../../hooks/useProduct";
import ProductGridSkeleton from "../../skeleton/ProductGridSkeleton";

export default function ProductCarousel({ currentIndex }) {
 const{products,status}=useProduct()

  if (status.isLoading) return <ProductGridSkeleton />;
  if (status.error) return <p className="text-center text-red-500">{status.error.message}</p>;

  const visibleProducts = products.slice(currentIndex);

  return (
    <ul
      className="mt-10 flex gap-3 lg:gap-8 items-center justify-start overflow-x-auto"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      
      {visibleProducts.map((item) => (
        <li
         
          key={item.id}
          className="w-[300px] h-[350px] shrink-0"
        >
          <Link to={`/products/${item.id}`}>
          <ProductImage
          product={item}
            image={item.thumbnail}
            disCountBgColor="transparent"
          />
          
          </Link>
          
          <ProductInfo
            title={item.title}
            price={`${item.price} $`}
            originalPrice={+(item.price / (1 - item.discountPercentage / 100)).toFixed(2)}
            rating={item.rating}
            reviews={item.rating}
          />
        </li>
      ))}
    </ul>
  );
}
