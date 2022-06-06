import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Container.style';

function Container({ children, main, link }) {
  return (
    <S.Container>
      <S.Main>{main}</S.Main>
      <S.Subtext>{children}</S.Subtext>
      <S.Link target='_blank' href={link}>
        {link}
      </S.Link>
    </S.Container>
  );
}

Container.propTypes = {
  children: PropTypes.node,
  main: PropTypes.node,
};

export default Container;
