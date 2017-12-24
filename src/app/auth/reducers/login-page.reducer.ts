import * as authActions from '../actions/auth.actions';

export interface State {
  error: string | null;
  pending: boolean;
}

export const initialState: State = {
  error: null,
  pending: false
};

export function reducer(
  state = initialState,
  action: authActions.Actions
): State {
  switch (action.type) {
    case authActions.LOGIN: {
      return {
        ...state,
        error: null,
        pending: true
      };
    }

    case authActions.LOGIN_SUCCESS: {
      return {
        ...state,
        error: null,
        pending: false
      };
    }

    case authActions.LOGIN_FAILURE: {
      return {
        ...state,
        error: action.payload,
        pending: false
      };
    }

    default: {
      return state;
    }
  }
}

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
