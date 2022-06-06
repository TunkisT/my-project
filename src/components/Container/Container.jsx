import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Container.style';

function Container({ children, main }) {
  return (
    <S.Container>
      <S.Main>{main}</S.Main>
      <S.Subtext>{children}</S.Subtext>
    </S.Container>
  );
}

Container.propTypes = {
  children: PropTypes.node,
  main: PropTypes.node,
};

export default Container;
