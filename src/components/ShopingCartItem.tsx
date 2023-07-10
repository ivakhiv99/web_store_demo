import { FC } from 'react';
import { IProduct } from '../types/Product';
import { styled } from 'styled-components';
import Image from './Image';
import AddToCartButton from './AddToCartButton';

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

// interface IProductCart extends Omit<IProduct, 'id'> {}

const ShopingCartItem:FC<IProduct> = ({ id, title, price, image}) => (
    <ProductCart>
      <Image src={image} alt={title} />
      <ProductDescription>
          <h3>{title}</h3>
          <p>{price}</p>
          <AddToCartButton productId={id}/>
      </ProductDescription>
      <ControlButtons>
        <ControlButton>
        +
        </ControlButton>
        <Count>
            3
        </Count>
        <ControlButton>
        -
        </ControlButton>
      </ControlButtons>
    </ProductCart>
);

export default ShopingCartItem;
