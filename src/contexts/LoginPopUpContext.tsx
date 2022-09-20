import { createContext, ReactNode, useState, useEffect } from 'react';

interface ILoginProps {
  children: ReactNode;
}

interface ILoginContext {
  loginState: boolean;
  setLoginState: (value: boolean) => void;
}

export const LoginContext = createContext({} as ILoginContext);

export function LoginProvider({ children }: ILoginProps) {
  const [loginState, setLoginState] = useState(false);

  return (
    <LoginContext.Provider value={{ loginState, setLoginState }}>{children}</LoginContext.Provider>
  );
}
