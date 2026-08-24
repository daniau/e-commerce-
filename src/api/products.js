export default async function fetchProducts(id) {
  const url = id
  ? `https://dummyjson.com/products/${id}`
  : `https://dummyjson.com/products?limit=0`;
  const response=await fetch(url)
  if(!response.ok) throw new Error("Failed to fetch products")
  const data=await response.json()
  return data


  
}
