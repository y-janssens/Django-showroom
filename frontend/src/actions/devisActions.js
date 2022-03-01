import axios from "axios";
import {
  DEVIS_LIST_REQUEST,
  DEVIS_LIST_SUCCESS,
  DEVIS_LIST_FAIL,

  DEVI_LIST_REQUEST,
  DEVI_LIST_SUCCESS,
  DEVI_LIST_FAIL,
} from "../constants/devisConstants";

export const listDevis = () => async (dispatch) => {
  try {
    dispatch({ type: DEVIS_LIST_REQUEST });

    const { data } = await axios.get("/api/devis/");

    dispatch({
      type: DEVIS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DEVIS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listDevi = (id) => async (dispatch) => {
  try {
    dispatch({ type: DEVI_LIST_REQUEST });

    const { data } = await axios.get(`/api/devis/${id}`);

    dispatch({
      type: DEVI_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DEVI_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
