import {GET_TECHS, SET_LOADING, TECHS_ERROR} from './types';

//get techs
export const getTechs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('/techs');
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.statusText,
    });
  }
};

//set loading
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
