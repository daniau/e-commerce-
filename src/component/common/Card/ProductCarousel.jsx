import { useEffect, useState } from "react";
import { Link } from "react-router";
import ProductImage from "../Card/ProductImage";
import ProductInfo from "./ProductInfo";

export default function ProductCarousel({ currentIndex }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchItems();
  }, []);

  if (loading) return <p>Loading...</p>;

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
