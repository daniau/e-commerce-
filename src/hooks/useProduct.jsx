import { useEffect, useMemo, useState } from "react"
import fetchProducts from "../api/products"

export const useProduct = (id = "") => {
  const [products, setProducts] = useState([])
  const [item, setItem] = useState(null)
  const [status, setStatus] = useState({ isLoading: true, error: null })
  const [itemStatus, setItemStatus] = useState({ isLoading: true, error: null })
  useEffect(() => {
    async function loadProducts() {
      try {
        const products = await fetchProducts()
        setProducts(products.products)
      } catch (error) {
        setStatus((prev) => ({ ...prev, error }))
      } finally {
        setStatus((prev) => ({ ...prev, isLoading: false }))
      }
    }
    loadProducts()

  }, [])
 

  return { products, status }
}
