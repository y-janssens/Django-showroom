import axios from "axios";
import {
    CLIENTS_LIST_REQUEST,
    CLIENTS_LIST_SUCCESS,
    CLIENTS_LIST_FAIL,
    CLIENT_LIST_REQUEST,
    CLIENT_LIST_SUCCESS,
    CLIENT_LIST_FAIL,
  } from "../constants/clientsConstants";

  export const listClients = () => async (dispatch) => {
    try {
      dispatch({ type: CLIENTS_LIST_REQUEST });
  
      const { data } = await axios.get("/api/clients/");
  
      dispatch({
        type: CLIENTS_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CLIENTS_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const listClient = (id) => async (dispatch) => {
    try {
      dispatch({ type: CLIENT_LIST_REQUEST });
  
      const { data } = await axios.get(`/api/clients/${id}`);
  
      dispatch({
        type: CLIENT_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CLIENT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  