import React from 'react';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';

const Home = () => {
  return (
    <div>
      <Header>
        <Container main='Hello, I am Tautvydas Tunkis'>
          I am junior fullstack javascript developer working with web application
          creating in both sides. Using REACT in client side, and NODE in server
          side.
        </Container>
      </Header>
    </div>
  );
};

export default Home;
