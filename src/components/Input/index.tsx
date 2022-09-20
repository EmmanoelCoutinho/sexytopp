import { Field } from 'formik';

import * as S from './styles';
// import InputMask from "react-input-mask";

interface IPropsImput {
  type: string;
  name: string;
  placeholder?: string;
  label?: string;
  messagePosition?: string;
  error?: string | undefined;
  errorMessage?: string;
}

function Input({
  type,
  name,
  placeholder,
  label,
  messagePosition,
  error,
  errorMessage
}: IPropsImput) {
  return (
    <>
      <S.Container className={`field-holder ${error ? 'field-holder-invalid' : ''}`}>
        {label && (
          <label htmlFor={name} className={error ? 'error-message' : ''}>
            {label}
          </label>
        )}
        <Field type={type} name={name} placeholder={placeholder} />
        {error && (
          <span className={`error-message ${messagePosition === 'bottom' ? 'message-bottom' : ''}`}>
            {errorMessage}
          </span>
        )}
      </S.Container>
    </>
  );
}

export default Input;
