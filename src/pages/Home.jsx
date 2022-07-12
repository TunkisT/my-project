import React from 'react';
import Contacts from '../components/Contacts/Contacts';
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
        <Container main='Contacts'>
          <Contacts main='Email: ttunkis@gmail.com' />
          <Contacts main='Github:' link='https://github.com/TunkisT' />
          <Contacts
            main='LinkedIn:'
            link='https://linkedin.com/in/tautvydas-tunkis'
          />
        </Container>
      </Header>
    </div>
  );
};

export default Home;
