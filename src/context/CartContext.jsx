import { createContext, useState, useContext } from 'react'
const CartContext = createContext()
export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const addToCart = (item, qty = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find((p) => p.id === item.id)
      if (existing) {
        return prevCart.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + qty } : p
        )
      }
      return [...prevCart, { ...item, qty }]
    })
  }

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  const clearCart = () => setCart([])

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
