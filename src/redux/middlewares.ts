import { Middleware } from 'redux';
import { addProductToCart } from './cartSlice';


const localStorageMiddleware:Middleware = store => next => action => {
    console.log('localStorageMiddleware:', action);

    const storedCartData = localStorage.getItem('cart');
    const userCart = storedCartData ? JSON.parse(storedCartData) : [];
    if(action.type === 'cart/addProductToCart') {
        if(userCart) {
            localStorage.setItem('cart', JSON.stringify([...userCart, action.payload]))
        } else {
            localStorage.setItem('cart', JSON.stringify([action.payload]))
        }
    }
    
    const result = next(action);
    console.log('New State after localStorageMiddleware:', store.getState());
    return result;
};

const rearrangeLocalStorageMiddleware:Middleware = store => next => action => {
    console.log('rearrangeLocalStorageMiddleware:', action);

    if(action.type == addProductToCart) {
        console.log('rearrangeLocalStorageMiddleware: action = addProductToCart');


        // get all objects from store
        // sort objects into array of arrays by their's id
        // map through array and count quantity
        


    }

    const result = next(action);
    console.log('New State after rearrangeLocalStorageMiddleware:', store.getState());
    return result;
}

export { localStorageMiddleware, rearrangeLocalStorageMiddleware };
