import { createContext, ReactNode, useState } from 'react';

interface IMenuProps {
  children: ReactNode;
}

interface ILoginContext {
  menuState: boolean;
  setMenuState: any;
}

export const MenuContext = createContext({} as ILoginContext);

export function LoginProvider({ children }: IMenuProps) {
  const [menuState, setMenuState] = useState(false);

  return (
    <MenuContext.Provider value={{ menuState, setMenuState }}>{children}</MenuContext.Provider>
  );
}
