import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Header.style';
import Container from '../Container/Container';

function Header({ children }) {
  return (
    <div>
      <S.Header>
        <S.Navigation>
          <S.Navigate to='/'>Home</S.Navigate>
          <S.Navigate to='/projects'>Projects</S.Navigate>
          <S.Navigate to='/technologies'>technologies</S.Navigate>
        </S.Navigation>
        {children}
      </S.Header>
    </div>
  );
}

Header.propTypes = {};

export default Header;
