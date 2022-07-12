import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Contacts.style';

function Contacts({ main, link }) {
  return (
    <S.Contacts>
      <S.Main>{main}</S.Main>
      <S.Link target='_blank' href={link}>
        {link}
      </S.Link>
    </S.Contacts>
  );
}

Contacts.propTypes = {
  main: PropTypes.node,
  link: PropTypes.node,
};

export default Contacts;
