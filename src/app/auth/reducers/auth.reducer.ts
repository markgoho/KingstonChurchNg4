import * as authActions from '../actions/auth.actions';
import { User } from '../models/user.model';

export interface State {
  loggedIn: boolean;
  user: User | null;
}

export const initialState: State = {
  loggedIn: false,
  user: null
};

export function reducer(
  state = initialState,
  action: authActions.AuthActions
): State {
  switch (action.type) {
    case authActions.LOGIN_SUCCESS: {
      return {
        ...state,
        loggedIn: true,
        user: action.payload
      };
    }

    case authActions.LOGOUT: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export const getLoggedIn = (state: State) => state.loggedIn;
export const getUser = (state: State) => state.user;
