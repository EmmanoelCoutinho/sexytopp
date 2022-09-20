import { SET_USER_INFO } from './actionTypes';

interface UserProps {
  name: string;
  email: string;
  key_id: string;
  last_sign_at: string;
}

export const SetInfoUser = ({ name, email, key_id, last_sign_at }: UserProps) => ({
  type: SET_USER_INFO,
  name: name,
  email: email,
  key_id: key_id,
  last_sign_at: last_sign_at
});
