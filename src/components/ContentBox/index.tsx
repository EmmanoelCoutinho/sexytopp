import { BoxContainer } from './style';

interface Iprops {
  color: string;
  icon: any;
  title: string;
  text: string;
}

function ContentBox({ color, icon, title, text }: Iprops) {
  return (
    <BoxContainer>
      <div
        style={{
          background: `${color}`
        }}>
        {icon}
      </div>
      <span>{title}</span>
      <p>{text}</p>
    </BoxContainer>
  );
}

export default ContentBox;
