import Link from 'next/link';
import React from 'react';

import * as S from './styled';

interface Iprops {
  route: string;
  content: any;
  size?: string;
  weight?: number;
  onClick?: () => void;
}

function LinkAnchor({ route, content, size, weight }: Iprops) {
  return (
    <>
      <Link href={route}>
        <S.LinkAnchor
          style={{
            fontSize: `${size}`,
            fontWeight: weight
          }}>
          {content}
        </S.LinkAnchor>
      </Link>
    </>
  );
}

export default LinkAnchor;
