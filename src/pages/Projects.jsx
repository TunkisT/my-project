import React from 'react';
import Container from '../components/Container/Container';
import Header from '../components/Header/Header';

const Projects = () => {
  return (
    <Header>
      <Container
        main='Manage employees app'
        link='https://employee-react-pp9qk.ondigitalocean.app'
      >
        This is simple React and Node.js fullstack project for administrators whose can
        save company employees contacts.<br/><br/>

      </Container>
    </Header>
  );
};

export default Projects;
