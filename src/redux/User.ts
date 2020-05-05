import * as ActionTypes from "./ActionTypes";

const defaultState = {
  user: {},
};

export const User = (state = defaultState, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_USER_STATE:
      return {
        ...state,
        user: {
          username: action.payload,
        },
      };
    default:
      return state;
  }
};
