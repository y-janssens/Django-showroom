import axios from "axios";
import {
  FICHES_LIST_REQUEST,
  FICHES_LIST_SUCCESS,
  FICHES_LIST_FAIL,
  
  FICHE_LIST_REQUEST,
  FICHE_LIST_SUCCESS,
  FICHE_LIST_FAIL,
} from "../constants/fichesConstants";

export const listFiches = () => async (dispatch) => {
  try {
    dispatch({ type: FICHES_LIST_REQUEST });

    const { data } = await axios.get("/api/fiches/");

    dispatch({
      type: FICHES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FICHES_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listFiche = (id) => async (dispatch) => {
  try {
    dispatch({ type: FICHE_LIST_REQUEST });

    const { data } = await axios.get(`/api/fiches/${id}`);

    dispatch({
      type: FICHE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FICHE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
