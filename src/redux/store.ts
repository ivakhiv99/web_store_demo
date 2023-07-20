import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { localStorageMiddleware, rearrangeLocalStorageMiddleware } from './middlewares';



const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    middleware: [
        localStorageMiddleware,
        rearrangeLocalStorageMiddleware,
    ],
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;