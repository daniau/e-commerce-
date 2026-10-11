# Exclusive – E-Commerce Frontend

A responsive e-commerce storefront built with **React 19** and **Vite**, covering the full shopping flow: browsing products, viewing details, managing a cart, and checking out. Product data comes from the public [DummyJSON](https://dummyjson.com) API.

**Live demo:** [https://e-commerce-kohl-seven-69.vercel.app](https://e-commerce-kohl-seven-69.vercel.app/)

## Features

- **Home page**: hero banner with category sidebar, Flash Sales with a countdown timer and carousel, Browse Categories, Best Selling, Our Products, New Arrivals, and Our Services sections.
- **Product details**: product fetched by ID from the URL, star rating, price, description, quantity selector, and a Related Items list based on the same category.
- **Shopping cart**: add, remove, and update quantities, with automatic subtotal/total and a live item counter in the header. The cart is persisted in `localStorage` and synced with the DummyJSON cart API.
- **Checkout**: billing details form, order summary with totals, and payment method options.
- **Login**: client-side validation (email format, minimum password length) with accessible error messages.
- **Performance and UX**: route-level and section-level lazy loading (`lazy` + `Suspense`), skeleton loaders, toast notifications, and a mobile-friendly layout with a collapsible menu.

## Tech Stack

| Area | Tools |
| --- | --- |
| UI | React 19, Vite 7 |
| Routing | React Router 7 |
| Styling | Tailwind CSS 4, tailwind-scrollbar-hide |
| Icons | Lucide React, Font Awesome |
| Notifications | React Toastify |
| Data | DummyJSON REST API |
| Tooling | ESLint 9 |

## React Concepts & Hooks Used

| Hook / API | Where and why |
| --- | --- |
| `useState` | Local UI state: mobile menu, carousel index, quantity selector, login form values and errors. Also used with a lazy initializer to load the cart from `localStorage`. |
| `useEffect` | Fetching products from the API, saving the cart to `localStorage`, and the flash-sale countdown timer. A cleanup flag in `useItem` prevents state updates after the product ID changes. |
| `useContext` + `createContext` | `CartContext` shares the cart state and actions (add, update, delete, clear) across the app without prop drilling. |
| `useMemo` | Computes related products (same category) only when the product or product list changes. |
| `memo` | Prevents unnecessary re-renders of the cart summary component. |
| `lazy` + `Suspense` | Code-splitting for routes and heavy home page sections, with loading fallbacks. |
| `useParams` (React Router) | Reads the product ID from the URL on the product details page. |

**Custom hooks**

- `useProduct`: fetches all products and exposes `products` with a loading/error `status`.
- `useItem`: fetches a single product by ID and derives `relatedItems`.
- `useCart`: a small wrapper around `useContext` for accessing the cart.

## Project Structure

```
src/
├── api/          # products and cart API calls
├── component/    # shared components (header, footer, cards, skeletons)
├── context/      # CartContext (global cart state)
├── hooks/        # useProduct, useItem
├── pages/        # home, productDetalis, cart, checkout, login
└── utils/        # static data
```

## Getting Started

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build
npm run preview   # preview the production build
npm run lint      # run ESLint
```

## Roadmap

- Connect the login form to a real authentication API.
- Make the billing form controlled and create real orders on "Place Order".
- Implement coupons, search, wishlist, and color/size selection.
- Add screenshots.
