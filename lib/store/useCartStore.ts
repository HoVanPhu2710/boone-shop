import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: number, size: string) => void;
  updateQuantity: (id: number, size: string, quantity: number) => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      isOpen: false,
      addItem: (newItem) => set((state) => {
        const existingItemIndex = state.items.findIndex(
          (item) => item.id === newItem.id && item.size === newItem.size
        );

        if (existingItemIndex > -1) {
          const updatedItems = [...state.items];
          updatedItems[existingItemIndex].quantity += 1;
          return { items: updatedItems, isOpen: true }; // Open cart when item added
        }

        return { items: [...state.items, { ...newItem, quantity: 1 }], isOpen: true };
      }),
      removeItem: (id, size) => set((state) => ({
        items: state.items.filter((item) => !(item.id === id && item.size === size))
      })),
      updateQuantity: (id, size, quantity) => set((state) => ({
        items: state.items.map((item) => 
          item.id === id && item.size === size
            ? { ...item, quantity: Math.max(1, quantity) }
            : item
        )
      })),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
    }),
    {
      name: 'boone-cart-storage',
      // Ensure isOpen state is not persisted so cart is closed on reload
      partialize: (state) => ({ items: state.items }),
    }
  )
);
