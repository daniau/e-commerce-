import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";

import HomePage from "./pages/home/HomePage";
import Login from "./pages/login/login";

const Cart = lazy(() => import("./pages/cart/Cart"));
const CheckOut = lazy(() => import("./pages/checkout/CheckOut"));
const ProductDetalis = lazy(() =>
  import("./pages/productDetalis/ProductDetalis")
);

function App() {
  
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/products/:id" element={<ProductDetalis />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  );
}

export default App;