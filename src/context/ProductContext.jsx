import { useEffect,createContext,useState, useContext } from "react"
import fetchProducts from "../api/products"
const productContext=createContext()

export const ProductProvider=({children})=>{
  const [products,setProducts]=useState([])
  const[status,setStatus]=useState({isLoading:true,error:null})
  useEffect(()=>{
    async function loadProducts(){
      try{
        const products=await fetchProducts()
        setProducts(products)
      }catch(error){
        setStatus((prev)=>({...prev,error}))
      }finally{
        setStatus((prev)=>({...prev,isLoading:false}))
      }
    }
    loadProducts()
  },[])
  return(<productContext.Provider value={{products,status}} >
    {children}
  </productContext.Provider>)
}
export const useProduct=()=>useContext(productContext)