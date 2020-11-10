import { spacexActions } from "./constants";

export const getSpacexAction = (filterData) => ({
  type: spacexActions.GET_SPACEX_DATA,
  payload: filterData,
});

export const getSpacexActionSuccess = (responseData) => ({
  type: spacexActions.GET_SPACEX_DATA_SUCCESS,
  payload: responseData,
});

export const getSpacexActionFailed = (error) => ({
  type: spacexActions.GET_SPACEX_DATA_FAILED,
  payload: error,
});
