import * as ActionTypes from "./ActionTypes";

export const Task = (
  state = {
    isLoading: true,
    errmess: null,
    tasks: [],
  },
  action: any
) => {
  switch (action.type) {
    case ActionTypes.ADD_TASK:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        tasks: action.payload,
      };

    case ActionTypes.TASKS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: null,
        tasks: [],
      };

    case ActionTypes.TASKS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
      };
    default:
      return state;
  }
};
