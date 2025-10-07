
import { createSlice } from '@reduxjs/toolkit';

const cart = 'cart';


const save = (items) => {
  try { localStorage.setItem(cart, JSON.stringify(items)); }
  catch (e) { }
};

const initialState = {
  items: JSON.parse(localStorage.getItem(cart)) || []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const prod = action.payload;
      const existing = state.items.find(i => i.id === prod.id);
      if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
      } else {
        state.items.push({ ...prod, quantity: 1 });
      }
      save(state.items);
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const existing = state.items.find(i => i.id === id);
      if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
        save(state.items);
      }
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const existing = state.items.find(i => i.id === id);
      if (existing) {
        existing.quantity = (existing.quantity || 1) - 1;
        if (existing.quantity <= 0) {
          state.items = state.items.filter(i => i.id !== id);
        }
        save(state.items);
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(i => i.id !== id);
      save(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      save(state.items);
    },
    setCart: (state, action) => {
      state.items = action.payload || [];
      save(state.items);
    }
  }
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
  setCart
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) =>
  state.cart.items.reduce((sum, it) => sum + (it.quantity || 1), 0);
export const selectCartTotal = (state) =>
  state.cart.items.reduce((sum, it) => sum + (it.price || 0) * (it.quantity || 1), 0);

export default cartSlice.reducer;
