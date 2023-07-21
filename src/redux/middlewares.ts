import { Middleware } from 'redux';
import { addProductToCart, syncCart } from './cartSlice';


interface LocalStorageCartItem {
  id: number;
  quantity: number;
}

const localStorageMiddleware:Middleware = store => next => action => {
    // console.log('localStorageMiddleware:', action);

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
    // console.log('New State after localStorageMiddleware:', store.getState());
    return result;
};

const condenseLocalStorageMiddleware:Middleware = store => next => action => {
    console.log('condenseLocalStorageMiddleware:', action);

    if(action.type == addProductToCart) {
        const uniqueIDs:number[] = [];
        const currentState:LocalStorageCartItem[] = [...store.getState().cart]; 
        const condensedState:LocalStorageCartItem[] = [];

        currentState.push(action.payload as LocalStorageCartItem);

        if(currentState.length > 1) {
            currentState.forEach((obj:LocalStorageCartItem) => {
                if(uniqueIDs.indexOf(obj.id) === -1) {
                    uniqueIDs.push(obj.id);
                };
            });


            uniqueIDs.forEach((uniqueId: number) => {
                const initialValue = 0;
                const quantityOfId = currentState.reduce(
                    (accumulator:number, currentValue:LocalStorageCartItem) => {
                      if(currentValue.id === uniqueId) {
                        return accumulator + currentValue.quantity;
                      } else return accumulator;
                    },
                    initialValue
                );
                condensedState.push({id: uniqueId, quantity: quantityOfId});
            });

            store.dispatch(syncCart(condensedState));
            localStorage.setItem('cart', JSON.stringify(condensedState))
        }
    }

    const result = next(action);
    console.log('New State after condenseLocalStorageMiddleware:', store.getState());
    return result;
}

export { localStorageMiddleware, condenseLocalStorageMiddleware };
