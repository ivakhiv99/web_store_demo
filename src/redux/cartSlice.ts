import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ICartItem {
    id: number;
    quantity: number;
};

type CartState = ICartItem[];

const initialState: CartState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addProductToCart: (state, action: PayloadAction<ICartItem>) => [...state, action.payload],
        removeProductFromCart:  (state, action: PayloadAction<ICartItem>) => state.filter(item => item !== action.payload),
        clearCart: () => [],
        syncCart: (_, action) => action.payload,
    }
});

export const { addProductToCart, removeProductFromCart, clearCart, syncCart } = cartSlice.actions;
export default cartSlice.reducer;
