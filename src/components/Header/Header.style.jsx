import styled from 'styled-components';
import image from '../../images/image1.jpg';

export const Header = styled.header`
  width: 100%;
  height: 25rem;
  opacity: 0.8;
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
`;
export const Navigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 5rem;
`;

export const Link = styled.a`
  margin: 1rem 3rem;
  text-decoration: 0;
  color: whitesmoke;
  text-transform: uppercase;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  :hover {
    background: inherit;
    transition: 0.5s;
    color: white;
  }
`;
