import { UserProvider } from '../contexts/UserContext';
import { LoginProvider } from '../contexts/LoginPopUpContext';

const composeProviders =
  (...providers: any[]) =>
  (props: any) =>
    providers.reduceRight(
      (children, Provider) => <Provider {...props}>{children}</Provider>,
      props.children
    );

export const AllProviders = composeProviders(UserProvider, LoginProvider);
