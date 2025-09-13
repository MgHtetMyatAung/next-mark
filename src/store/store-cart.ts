import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface CartState {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (itemId: string) => void;
  increaseQuantity: (itemId: string) => void;
  decreaseQuantity: (itemId: string) => void;
  clearCart: () => void;
}

// Create the Zustand store with devtools and persist middleware
export const useCartStore = create<CartState>()(
  // The 'persist' middleware is wrapped around the 'devtools' middleware
  // This ensures the state is saved to storage after every change
  persist(
    devtools(
      (set) => ({
        // Initial state
        items: [],

        // Action to add a new item or increase quantity of an existing one
        addItem: (newItem) =>
          set(
            (state) => {
              const existingItem = state.items.find(
                (item) => item.id === newItem.id
              );
              if (existingItem) {
                // If the item exists, increase its quantity
                return {
                  items: state.items.map((item) =>
                    item.id === newItem.id
                      ? { ...item, quantity: item.quantity + 1 }
                      : item
                  ),
                };
              } else {
                // If it's a new item, add it to the cart with a quantity of 1
                return {
                  items: [...state.items, { ...newItem, quantity: 1 }],
                };
              }
            },
            false,
            "cart/addItem"
          ),

        // Action to remove an item from the cart
        removeItem: (itemId) =>
          set(
            (state) => ({
              items: state.items.filter((item) => item.id !== itemId),
            }),
            false,
            "cart/removeItem"
          ),

        // Action to increase an item's quantity
        increaseQuantity: (itemId) =>
          set(
            (state) => ({
              items: state.items.map((item) =>
                item.id === itemId
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            }),
            false,
            "cart/increaseQuantity"
          ),

        // Action to decrease an item's quantity, removing it if quantity becomes zero
        decreaseQuantity: (itemId) =>
          set(
            (state) => ({
              items: state.items
                .map((item) =>
                  item.id === itemId
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
                )
                .filter((item) => item.quantity > 0), // Remove items with quantity of 0
            }),
            false,
            "cart/decreaseQuantity"
          ),

        // Action to clear the entire cart
        clearCart: () =>
          set(
            () => ({
              items: [],
            }),
            false,
            "cart/clearCart"
          ),
      }),
      {
        // Devtools configuration
        name: "cart-store",
      }
    ),
    {
      // Persist configuration
      name: "cart-storage", // A unique name for the storage key
    }
  )
);
