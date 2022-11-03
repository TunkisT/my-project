import React from 'react';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';

const Projects = () => {
  return (
    <Header>
      <Container
        main='Product catalog'
        link='https://silumos-sprendimai.vercel.app/'
      >
        This is product catalog project created using NEXT.js framework. All data is
        fetching from CodeMash CMS. Used static page generation for good SEO results.
        <br />
      </Container>
      <Container
        main='Responsive front-end page'
        link='https://ratepunk-app.herokuapp.com/'
      >
        The page is created using NEXT.js To save last written email used JSON.bin.
        Page have responsive design for desktop and mobile.
        <br />
      </Container>
      <Container
        main='Simple router panel'
        link='https://router-panel.herokuapp.com/'
      >
        This is React project similar to router admin panel. Used for new user saving
        and category or sub-category creating.
        <br />
      </Container>
    </Header>
  );
};

export default Projects;
