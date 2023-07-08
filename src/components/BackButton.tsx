import { useNavigate  } from 'react-router-dom';
import { styled } from 'styled-components';

const Button = styled.button`
    width: 180px;
    
`

const BackButton = () => {
    const navigate = useNavigate ();

    const handleClick = () => {
        navigate(-1);
    };

    return (
        <Button onClick={handleClick}>
            {'< back to results'}
        </Button>
    );
}

export default BackButton;