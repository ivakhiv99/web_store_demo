import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { useLocation } from 'react-router-dom';
import BackButton from './BackButton';

const Wrapper = styled.header`
  background-color: #221f1f;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 15px 30px;
  height: 72px;
  width: 100%;
`;

const Header = () => {
  const location = useLocation();
  return (
    <Wrapper>
      {
        location.pathname === '/cart'
        ? <BackButton label='<Back to shoping'/>
        : <Link to="/cart">Cart</Link>
      }
       
    </Wrapper>
  );
};

export default Header;