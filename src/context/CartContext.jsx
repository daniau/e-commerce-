import { createContext, useContext, useEffect, useState } from "react";

const cartContext=createContext()
export default function CartProvider({children}){
  const [cart,setCart]=useState(()=>{
    const savedCart=localStorage.getItem("cart")
    return savedCart?JSON.parse(savedCart):[]
  })
  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart))

  },[cart])

  function addToCart(product){
    setCart((prev)=>{
      const exsist=prev.find((item)=>{return product.id===item.id})
      if(exsist){
        console.log(exsist)
       return prev.map((item)=>{
       if (item.id===product.id) return {...item,quantity :item.quantity +1}
       else return item
       })
      }
      else{
        return [...prev,{...product,quantity :1}]
      }
      

    })
    alert(`${product.title} added to cart!`)


  }
  function updateQuantity(id,newQuantity){
    if(Number(newQuantity)===0) return
    setCart((prev)=>{
      return prev.map((item)=>{
        return (item.id===id) ?  {...item,quantity:(Number(newQuantity))} :item
      })
    })
  }

  function deleteItem(id){
    setCart((prev)=>{
       return prev.filter((item)=> item.id!==id)

    })

    
  }
  function clearCart(){
    setCart([])
    localStorage.clear()

  }


  return(
    <cartContext.Provider value={{cart,addToCart,deleteItem,updateQuantity,clearCart}}>
      {children}

    </cartContext.Provider>

  )

}
export function useCart(){
  return useContext(cartContext)
}