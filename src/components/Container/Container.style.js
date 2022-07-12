import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  padding-left: 4rem;
  color: white;
  @media screen and (max-width: 768px) {
    padding: 1.3rem;
  }
`;
export const Main = styled.p`
  font-size: 2rem;
`;
export const Subtext = styled.p`
  font-size: 1.3rem;
  line-height: 1.4;
  max-width: 30rem;
`;
export const Link = styled.a`
  font-size: 1.3rem;
  max-width: 30rem;
  text-decoration: none;
  color: black;
`;
