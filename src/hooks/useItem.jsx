import { useEffect, useMemo, useState } from "react"
import fetchProducts from "../api/products"
import { useProduct } from "./useProduct"

export const useItem = (id ) => {
  const [item, setItem] = useState(null)
  const [itemStatus, setItemStatus] = useState({ isLoading: true, error: null })
  const{products,status}=useProduct()

  useEffect(() => {
    let ignore = false
    async function loadItem() {
      try {
        const item = await fetchProducts(id)
        if (!ignore)
          setItem(item)
      } catch (error) {
        setItemStatus((prev) => ({ ...prev, error }))
      } finally {
        setItemStatus((prev) => ({ ...prev, isLoading: false }))
      }
    }
    loadItem()
    return () => ignore = true
  }, [id])
  const relatedItems = useMemo(() => {
        if (itemStatus.isLoading||itemStatus.error||!item||status.isLoading||status.error) return []

    const releated=(products?.filter((product) => (product?.category == item?.category) && (product.id !== item?.id)))
    console.log(releated)
    return releated
  }, [item, products ,itemStatus, status])

  return { item, relatedItems, itemStatus,products }
}
