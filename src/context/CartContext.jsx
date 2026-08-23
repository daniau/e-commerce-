import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import{addItemsToCart,updateCartQuantity,deleteCartItem} from "../api/cart"
const cartContext=createContext()
export default function CartProvider({children}){
  const [cart,setCart]=useState(()=>{
    const savedCart=localStorage.getItem("cart")
    return savedCart?JSON.parse(savedCart):[]
  })
  useEffect(()=>
    localStorage.setItem("cart",JSON.stringify(cart))
    ,[cart])



   async function addToCart(product,quantity=1){
    setCart((prev)=>{
      const exsist=prev.find((item)=>{return product.id===item.id})
      if(exsist){
       return prev.map((item)=>{
       if (item.id===product.id) {return {...item,quantity :item.quantity+Number(quantity)}}

       else return item
       })
      }
      else{
          return [...prev,{...product,quantity :Number(quantity)}]
      }
      

    })
    toast.success(`${product.title} added to cart!`)
    try {
      await addItemsToCart(1,[{id:product.id,quantity:product.quantity}])
      
    } catch (error) {
      console.error(`API sync failed:, ${error.message}`)
      
    }


  }
 async function updateQuantity(id,newQuantity){
    if(Number(newQuantity)<=0) return
    setCart((prev)=>{
      return prev.map((item)=>{
        return (item.id===id) ?  {...item,quantity:(Number(newQuantity))} :item
      })
    })
    toast.success(`Quantity updated for ${cart.find((item)=> item.id===id)?.title}`)

    try {
      await updateCartQuantity(2,[{id:id, quantity:newQuantity}])
      
    } catch (error) {
      console.error(`API sync failed:, ${error.message}`)
      
    }
  }
 


 async function deleteItem(id){
    setCart((prev)=>{
       return prev.filter((item)=> item.id!==id)

    })
    try {
      await deleteCartItem(2)
      
    } catch (error) {
      console.error(`API sync failed:, ${error.message}`)
      
    }
    

    
  }
 async function clearCart(){
    setCart([])
    try {
      await clearCart(1)
      
    } catch (error) {
      console.error(`API sync failed:, ${error.message}`)
      
    }

  }
  const total=cart.reduce((sum,item)=>item.quantity*item.price+sum,0)
  const itemsCount=cart.reduce((sum,item)=>item.quantity+sum,0)


  return(
    <cartContext.Provider value={{cart,addToCart,deleteItem,updateQuantity,clearCart,itemsCount,total}}>
      {children}

    </cartContext.Provider>

  )

}
export function useCart(){
  return useContext(cartContext)
}