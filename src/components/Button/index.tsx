import { MouseEventHandler } from 'react';
import * as S from './styles';

interface IButtonProps {
  children: any;
  onClick?: any;
  disabled?: boolean;
  white?: boolean;
  green?: boolean;
  loading?: boolean;
  fontBold?: boolean;
  outlined?: boolean;
  uppercase?: boolean;
  type?: any;
  full?: boolean;
  small?: boolean;
  flex?: boolean;
}

function Button({
  children,
  onClick,
  disabled,
  type,
  white,
  green,
  loading,
  fontBold,
  outlined,
  uppercase,
  full,
  small,
  flex,
  ...props
}: IButtonProps) {
  return (
    <S.Container
      type={type}
      onClick={onClick}
      {...props}
      disabled={disabled}
      className={`
    ${fontBold ? 'fontBold' : ''} 
    ${white ? 'white' : ''}
    ${green ? 'green' : ''}
    ${outlined ? 'outlined' : ''} 
    ${disabled ? 'disabled' : ''}
    ${uppercase ? 'uppercase' : ''}
    ${loading ? 'loading' : ''}
    ${full ? 'full' : ''}
    ${small ? 'small' : ''}
    ${flex ? 'flex' : ''}
    `}>
      {loading && (
        <div className="loading-wrapper">
          <img src="/assets/images/utils/loading.gif" alt="Carregando..." />
        </div>
      )}
      {children}
    </S.Container>
  );
}

export default Button;
