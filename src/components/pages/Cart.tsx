import { useFetchMultiple } from '../hooks'
import { useEffect, useState , useMemo} from "react";
import { clearCart } from '../../redux/cartSlice'; 
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { IProduct } from '../../types/Product';
import ShopingCartItem from '../ShopingCartItem';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RouteNames } from '../../App';

const BuyButton = styled.button`
    background-color: #63ffc7;
`;

const ClearCart = styled.button`
    background-color: #63ffc7;
`;

const TotalPriceBox = styled.div`
    flex-direction: row;
    width: auto;
    margin-left: auto;
    padding: 24px;
    font-size: 36px;
`;

interface IProductInCart extends IProduct {
    quantity: number; 
}

const Cart = () => {
    const [cartItems, setCartItems] = useState<IProductInCart[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    const dispatch = useAppDispatch();
    const cartDataFromStore = useAppSelector(state => state.cart);
    const urls = useMemo(() => cartDataFromStore.map((productId) => `/products/${productId}`), [cartDataFromStore]);
    const { responses, isLoading, error } = useFetchMultiple(urls);
    
    useEffect(() => {
        if(responses) {
            const modifiedResponses = responses.map((responce) => {
                responce.quantity = 1;
                return responce;
            })
            setCartItems(modifiedResponses as IProductInCart[]);
        }
    }, [responses]);

    useEffect(() => {
        const newTotalPrice = cartItems.reduce((acc, item) => acc + item.price*item.quantity, 0);
        setTotalPrice(newTotalPrice);
    }, [cartItems]);

    const handleClearCart = () => dispatch(clearCart());

    const updateQuantity = (id: number, count: number) => {
        const updatedCart = cartItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: count };
          }
          return item; 
        });
        setCartItems(updatedCart);
    };

    return (
        <div>
            <ClearCart onClick={handleClearCart}>
                Clear cart
            </ClearCart>
            {cartItems.map((product) => (
                <ShopingCartItem
                    updateQuantity={updateQuantity}
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                />
            ))}
            <TotalPriceBox>
                {totalPrice.toFixed(2)}
                <Link to={RouteNames.checkout}>
                    <BuyButton>
                        Buy now!
                    </BuyButton>
                </Link>
            </TotalPriceBox>

        </div>

    );
}

export default Cart;
