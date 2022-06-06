import styled from 'styled-components';
import image from '../../images/code2.jpg';

export const Section = styled.div`
  width: 100%;
  height: 25rem;
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  backdrop-filter: blur(10px) saturate(70%);
`;
