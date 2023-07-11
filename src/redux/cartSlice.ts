import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: number[] = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addProductToCart: (state, action: PayloadAction<number>) => [...state, action.payload],
        removeProductFromCart:  (state, action: PayloadAction<number>) => state.filter(item => item !== action.payload),
        clearCart: () => [],
        syncCart: (_, action) => action.payload,
    }
});

export const { addProductToCart, removeProductFromCart, clearCart, syncCart } = cartSlice.actions;
export default cartSlice.reducer;
