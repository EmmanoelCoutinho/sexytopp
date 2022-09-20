import { AnyAction } from 'redux';

import { SET_USER_INFO } from '../../actions/actionTypes';

const initialState = {
  name: '',
  email: ''
};

export const UserReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        name: action.name,
        email: action.email,
        key_id: action.key_id,
        last_sign_at: action.last_sign_at
      };
    default:
      return state;
  }
};
