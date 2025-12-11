import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import NavigationPath from "../../component/common/NavigationPath"
import ItemDetails from "./ItemDetails"
import ImageSection from "./ImageSection"
import ReleatedItem from "./RelatedItems"
export default function PDP() {
  const params = useParams();       
  const [product, setProduct] = useState(null);

  useEffect(() => {
    let ignaor=false
    async function fetchData() {
      try {
        let response = await fetch(`https://dummyjson.com/products/${params.id}`)
        let item = await response.json()
        if(!ignaor)
        setProduct(item)

      } catch (error) {
        alert(error)

      }
    }
    fetchData()
    return()=> ignaor=true

  }, [params.id]);

  if (!product) return <p>Loading...</p>;

  return (
<>
<section className="mt-20 mx-5 lg:mx-18  ">
      <NavigationPath category={`${product.category}/`} title={`${product.title}`} />
      <div className="flex  justify-start items-start gap-5 mt-10 flex-wrap md:flex-nowrap ">
      <ImageSection item={product}  />
      <ItemDetails item={product} />
      </div>
      
     

    </section>
    <ReleatedItem item={product}/>
</>
   
  );
}
