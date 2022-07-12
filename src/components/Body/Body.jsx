import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Body.style';

function Body({ children, image }) {
  return (
    <S.Body>
      <S.Image src={image} alt='logo' />
      {children}
    </S.Body>
  );
}

Body.propTypes = {
  children: PropTypes.node,
  image: PropTypes.node,
};

export default Body;
