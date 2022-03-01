import axios from "axios";
import {
    FACTURES_LIST_REQUEST,
    FACTURES_LIST_SUCCESS,
    FACTURES_LIST_FAIL,
  
    FACTURE_LIST_REQUEST,
    FACTURE_LIST_SUCCESS,
    FACTURE_LIST_FAIL,
  } from "../constants/facturesConstants";

  export const listFactures = () => async (dispatch) => {
    try {
      dispatch({ type: FACTURES_LIST_REQUEST });
  
      const { data } = await axios.get("/api/factures/");
  
      dispatch({
        type: FACTURES_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FACTURES_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const listFacture = (id) => async (dispatch) => {
    try {
      dispatch({ type: FACTURE_LIST_REQUEST });
  
      const { data } = await axios.get(`/api/factures/${id}`);
  
      dispatch({
        type: FACTURE_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FACTURE_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  