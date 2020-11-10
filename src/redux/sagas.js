// @flow
import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import { getSpacexData } from "../services/api";
import { getSpacexActionFailed, getSpacexActionSuccess } from "./actions";
import { spacexActions } from "./constants";

function* getSpacexLaunch({ payload: filterData }) {
    const response = yield call(getSpacexData,filterData);
    if (response && Array.isArray(response)) {
      yield put(getSpacexActionSuccess(response));
    } else {
      yield put(getSpacexActionFailed("Error while fetching data"));
    }
}

export function* watchgetSpacexLaunch() {
  yield takeEvery(spacexActions.GET_SPACEX_DATA, getSpacexLaunch);
}

function* getSpacexLaunchSaga() {
  yield all([fork(watchgetSpacexLaunch)]);
}

export default getSpacexLaunchSaga;
