import styled from 'styled-components';
import { Link } from 'react-router-dom';
import image from '../../images/image1.jpg';

export const Header = styled.header`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  height: 45rem;
  place-items: center;
  width: 100%;
`;
export const Navigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 5rem;
`;

export const Navigate = styled(Link)`
  border-radius: 0.5rem;
  color: whitesmoke;
  font-size: 1rem;
  margin: 1rem 2.5rem;
  padding: 0.5rem 1rem;
  text-decoration: 0;
  text-transform: uppercase;
  :hover {
    background: inherit;
    transition: 0.5s;
    color: black;
  }
  @media screen and (max-width: 768px) {
    margin: 1rem 1rem;
  }
`;
