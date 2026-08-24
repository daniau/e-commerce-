import { Link, useParams } from "react-router";
import NavigationPath from "../../component/common/NavigationPath"
import ItemDetails from "./ItemDetails"
import ImageSection from "./ImageSection"
import ReleatedItem from "./RelatedItems"
import PDPSkeleton from "../../component/skeleton/PDPSkeleton";
import { useItem } from "../../hooks/useItem";
import ProductGridSkeleton from "../../component/skeleton/ProductGridSkeleton";

export default function PDP() {
  const params = useParams();       
  const{item,itemStatus,relatedItems}=useItem(params.id)
  // const [product, setProduct] = useState(null);

  // useEffect(() => {
  //   let ignaor=false
  //   async function fetchData() {
  //     try {
  //       let response = await fetch(`https://dummyjson.com/products/${params.id}`)
  //       let item = await response.json()
  //       if(!ignaor)
  //       setProduct(item)

  //     } catch (error) {
  //       alert(error)

  //     }
  //   }
  //   fetchData()
  //   return()=> ignaor=true

  // }, [params.id]);

  if (itemStatus.isLoading) return <>
  <PDPSkeleton/>
  </>;
  if(!item) return <PDPSkeleton/>

  return (
<>
<section className="mt-20 mx-5 lg:mx-18  ">
      <NavigationPath category={`${item.category}/`} title={`${item.title}`} />
      <div className="flex  justify-start items-start gap-5 mt-10 flex-wrap md:flex-nowrap ">
      <ImageSection item={item}  />
      <ItemDetails item={item} />
      </div>
      
     

    </section>
    <ReleatedItem item={relatedItems}/>
</>
   
  );
}
