import { useEffect, useState } from "react";
import { useFetch } from '../hooks'
import { IProduct } from '../../types/Product';
import ItemCard from '../ItemCard';
import { styled } from 'styled-components';

const ProductCards = styled.div`
    width: 100%;
    display: flex;
    
`;


const Products = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const {data, isLoading, error} = useFetch('/products/category/jewelery');

    useEffect(() => {
        console.log({data});
        if(data) {
            setProducts(data);
        }
    }, [data]);
  
    return (
      <div>
        <h1>Products</h1>
        <ProductCards>
            {products.map((product) => (
                <ItemCard
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                />
            ))}
        </ProductCards>

      </div>
    );
}

export default Products;

