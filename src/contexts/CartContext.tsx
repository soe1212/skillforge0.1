import React, { createContext, useContext, useState, useEffect } from 'react';
import { Course } from '../hooks/useSearch';

interface CartItem extends Course {
  addedAt: Date;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (course: Course) => void;
  removeFromCart: (courseId: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
  isInCart: (courseId: number) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    // Load cart from localStorage on app start
    const storedCart = localStorage.getItem('skillforge_cart');
    if (storedCart) {
      setItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem('skillforge_cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (course: Course) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === course.id);
      if (existingItem) {
        return prevItems; // Don't add duplicates
      }
      return [...prevItems, { ...course, addedAt: new Date() }];
    });
  };

  const removeFromCart = (courseId: number) => {
    setItems(prevItems => prevItems.filter(item => item.id !== courseId));
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  const getTotalItems = () => {
    return items.length;
  };

  const isInCart = (courseId: number) => {
    return items.some(item => item.id === courseId);
  };

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      clearCart,
      getTotalPrice,
      getTotalItems,
      isInCart
    }}>
      {children}
    </CartContext.Provider>
  );
};