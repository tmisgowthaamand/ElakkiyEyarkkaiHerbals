import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  slug: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
  variant?: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeItem: (id: string, variant?: string) => void;
  updateQuantity: (id: string, quantity: number, variant?: string) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (item) => {
        const itemKey = item.variant ? `${item.id}-${item.variant}` : item.id;
        const existingItem = get().items.find(
          (i) => (i.variant ? `${i.id}-${i.variant}` : i.id) === itemKey
        );

        if (existingItem) {
          set({
            items: get().items.map((i) =>
              (i.variant ? `${i.id}-${i.variant}` : i.id) === itemKey
                ? { ...i, quantity: i.quantity + (item.quantity || 1) }
                : i
            ),
          });
        } else {
          set({ items: [...get().items, { ...item, quantity: item.quantity || 1 }] });
        }
      },

      removeItem: (id, variant) => {
        const itemKey = variant ? `${id}-${variant}` : id;
        set({
          items: get().items.filter(
            (i) => (i.variant ? `${i.id}-${i.variant}` : i.id) !== itemKey
          ),
        });
      },

      updateQuantity: (id, quantity, variant) => {
        const itemKey = variant ? `${id}-${variant}` : id;
        if (quantity <= 0) {
          get().removeItem(id, variant);
        } else {
          set({
            items: get().items.map((i) =>
              (i.variant ? `${i.id}-${i.variant}` : i.id) === itemKey
                ? { ...i, quantity }
                : i
            ),
          });
        }
      },

      clearCart: () => set({ items: [] }),

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    }),
    {
      name: 'elakkiya-cart-storage',
    }
  )
);
