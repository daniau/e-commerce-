export async function fetchUserCart(userId=1) {
  const response=await fetch(`https://dummyjson.com/carts/user/${userId}`)
  if(!response.ok) throw new Error("Failed to fetch cart")
  const data=await response.json()
  return data.carts
}

export async function addItemsToCart(
  userId,products) {
  const response=await fetch(`https://dummyjson.com/carts/add`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({userId,products})
  })
  if(!response.ok) throw new Error("Failed to add to cart")
  return response.json()
}

export async function updateCartQuantity(cartId,products,merge=true) {
  const response=await fetch(`https://dummyjson.com/carts/${cartId}`,{
    method:"PUT",
    body:JSON.stringify({products,merge}),
    headers:{
      "Content-Type":"application/json"
    },
  })
  if(!response.ok) throw new Error("Failed to update cart",response.text)
  return response.json()
}

export async function deleteCartItem(cartId) {
  const response=await fetch(`https://dummyjson.com/carts/${cartId}`,{
    method:"DELETE"
  })
  if(!response.ok) throw new Error("Failed to delete cart item")
  return response.json()
}

export async function clearCart(userId=1) {
  const response=await fetch(`https://dummyjson.com/carts/user/${userId}`,{
    method:"DELETE"
  })
  if(!response.ok) throw new Error("Failed to clear cart")
  return response.json()
}