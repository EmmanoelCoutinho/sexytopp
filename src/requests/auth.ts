export const TOKEN_KEY = '@Token';

export const isAuthenticated = () => {
  return localStorage.getItem(TOKEN_KEY) !== null;
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const login = (token: string) => {
  return localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
  return localStorage.removeItem(TOKEN_KEY);
};
