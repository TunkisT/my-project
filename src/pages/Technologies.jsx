import React from 'react';
import Body from '../components/Body/Body';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';

const Technologies = () => {
  return (
    <Header>
      <Container main='Mostly used technologies in my projects'>
        <Body image='https://logos-download.com/wp-content/uploads/2016/09/Node_logo_NodeJS-700x428.png' />
        <Body image='https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png' />
        <Body image='https://miro.medium.com/max/318/1*p1TndLk3UsGPBsM7qHPZIw.png' />
        <Body image='https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' />
        <Body image='https://jimstrother.com/img/skills/bCrypt.jpg' />
      </Container>
    </Header>
  );
};

export default Technologies;
