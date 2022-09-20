// import Link from 'next/link';
import React from 'react';

import * as S from './styled';

interface Iprops {
  image: string | undefined;
  name: string;
  location: string;
  interest: string;
}

function CardMembers({ image, name, location, interest }: Iprops) {
  return (
    <>
      <S.Container>
        <S.Imagem src={image} alt={name} />
        <S.Description>
          <a href="#">{name}</a>
          <p className="location">{location}</p>
          <p>{interest}</p>
        </S.Description>
      </S.Container>
    </>
  );
}

export default CardMembers;
