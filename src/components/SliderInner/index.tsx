import * as S from './style';

interface Iprops {
  src: string;
  name: string;
  memberNumber: number;
}

function SliderInner({ src, name, memberNumber }: Iprops) {
  return (
    <>
      <S.Container>
        <S.MainImage src={src} />
        <span>{name}</span>
        <span>{memberNumber} membros</span>
      </S.Container>
    </>
  );
}

export default SliderInner;
