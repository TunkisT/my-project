import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Header.style';

function Header({ children }) {
  return (
    <div>
      <S.Header>
        <S.Navigation>
          <S.Navigate to='/'>About</S.Navigate>
          <S.Navigate to='/projects'>Projects</S.Navigate>
          <S.Navigate to='/technologies'>technologies</S.Navigate>
        </S.Navigation>
        {children}
      </S.Header>
    </div>
  );
}

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
