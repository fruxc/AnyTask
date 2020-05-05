import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const setUserState = (user: any) => ({
  type: ActionTypes.SET_USER_STATE,
  payload: user,
});

export const fetchTasks = () => (dispatch: any) => {
  dispatch(tasksLoading());
  return fetch(baseUrl + "tasks")
    .then(
      (response: any) => {
        if (response.ok) {
          return response;
        } else {
          var error: any = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((tasks) => dispatch(addTasks(tasks)))
    .catch((error) => dispatch(tasksFailed(error.message)));
};

export const tasksLoading = () => ({
  type: ActionTypes.TASKS_LOADING,
});

export const tasksFailed = (errmess: any) => ({
  type: ActionTypes.TASKS_FAILED,
  payload: errmess,
});

export const addTasks = (tasks: any) => ({
  type: ActionTypes.ADD_TASK,
  payload: tasks,
});
