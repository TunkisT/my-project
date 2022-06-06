import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Header.style';

function Header(props) {
  return (
    <div>
      <S.Header>
        <S.Navigation>
          <S.Link href='#'>Home</S.Link>
          <S.Link href='#'>Projects</S.Link>
          <S.Link href='#'>About</S.Link>
        </S.Navigation>
      </S.Header>
    </div>
  );
}

Header.propTypes = {};

export default Header;
