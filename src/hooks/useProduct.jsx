import { useEffect,useState } from "react"
import fetchProducts from "../api/products"

export const useProduct=(id="")=>{
  const [products,setProducts]=useState([])
  const[item,setItem]=useState([])
  const[status,setStatus]=useState({isLoading:true,error:null})
  useEffect(()=>{
    async function loadProducts(){
      try{
        const products=await fetchProducts()
        setProducts(products.products)
      }catch(error){
        setStatus((prev)=>({...prev,error}))
      }finally{
        setStatus((prev)=>({...prev,isLoading:false}))
      }
    }
    loadProducts()
  },[])
  useEffect(()=>{
    let ignore=false
    async function loadProducts(){
      try{
        const product=await fetchProducts(id)
        if(!ignore)
        setItem(product)
      }catch(error){
        setStatus((prev)=>({...prev,error}))
      }finally{
        setStatus((prev)=>({...prev,isLoading:false}))
      }
    }
    loadProducts()
    return ()=> ignore=true
  },[id])
 return{item,products,status}
}
