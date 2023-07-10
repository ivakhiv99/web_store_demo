import { useEffect, useState } from 'react';
import { useFetch } from '../hooks'
import { useParams } from 'react-router-dom';
import Image from '../Image';
import { IDetailedProduct } from '../../types/Product';
import { styled } from 'styled-components';
import BackButton from '../BackButton';
import AddToCartButton from '../AddToCartButton';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const DescriptionWrapper = styled.div`
    padding: 15px;
    border: solid 1px #C0C0C0;
    border-radius: 15px;
`;

const Price = styled.span`
    font-size: 24px;
`;

const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
`;

const ProductInfo = () => {
    const [productData, setProductData] = useState<IDetailedProduct | null>(null);
    
    const { productId } = useParams();
    const {data, isLoading, error} = useFetch(`/products/${productId}`);
    
    useEffect(()=> {
        if(data) {
            setProductData(data);
        }
    }, [data]);

    return (
        <Wrapper>
            <BackButton />
            {   productData && 
                <>
                    <h3>{productData.title}</h3>
                    <FlexRow>
                        <Image src={productData.image} alt={productData.title} />
                        <DescriptionWrapper>
                            <Price>{productData.price}</Price> 

                            <p>{productData.description}</p>
                            <AddToCartButton productId={productData.id}/>
                        </DescriptionWrapper>
                    </FlexRow>
                </>
            }
        </Wrapper>

    );
}

export default ProductInfo;

