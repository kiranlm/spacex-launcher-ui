import { spacexActions } from "./constants";

const INIT_STATE = {
  loading: false,
  spacexData: {},
};

const spacexData = (state = INIT_STATE, action) => {
  switch (action.type) {
    case spacexActions.GET_SPACEX_DATA:
      return { ...state, loading: true };
    case spacexActions.GET_SPACEX_DATA_SUCCESS:
      return {
        ...state,
        spacexData: action.payload,
        loading: false,
        error: null,
      };
    case spacexActions.GET_SPACEX_DATA_FAILED:
      return { ...state, error: action.payload, loading: false };
    default:
      return { ...state };
  }
};

export default spacexData;
