import { FC, useEffect, useState } from 'react';
import { IProduct } from '../types/Product';
import { styled } from 'styled-components';
import Image from './Image';
import AddToCartButton from './AddToCartButton';
import ItemCounter from './ItemCounter';

const ProductCart = styled.div`
    width: 100%;
    height: 350px;
    background-color: aliceblue;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: solid 1px #C0C0C0;
    border-radius: 15px;
    margin-bottom: 20px;
`;

const ProductDescription = styled.div`
    text-align: left;
    /* width: 350px; */
`;

const ControlButtons = styled.div`

`;

const ControlButton = styled.button`
    color: #63ffc7;
    border-radius: 50%;
    border: #63ffc7 5px solid;
    /* padding: 15px; */
    height: 25px;
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Count = styled.div``;

interface IProductCart extends IProduct {
    updateQuantity: (id: number, count: number) => void;
}


const ShopingCartItem:FC<IProductCart> = ({updateQuantity, id, title, price, image}) => {
    const [count, setCount] = useState<number>(1);

    useEffect(()=>updateQuantity(id, count), [count]);
    
    const updateCount = (num: number) => setCount(num);

    return (
        <ProductCart>
          <Image src={image} alt={title} />
          <ProductDescription>
              <h3>{title}</h3>
              <p>{price*count}</p>
              <AddToCartButton productId={id}/>
          </ProductDescription>
          <ItemCounter updateCount={updateCount}/>
        </ProductCart>
    );
}


export default ShopingCartItem;
