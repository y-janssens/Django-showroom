import {
    DEVIS_LIST_REQUEST,
    DEVIS_LIST_SUCCESS,
    DEVIS_LIST_FAIL,
  
    DEVI_LIST_REQUEST,
    DEVI_LIST_SUCCESS,
    DEVI_LIST_FAIL,
  } from "../constants/devisConstants";
  
  export const devisListReducer = (state = { devis: [] }, action) => {
    switch (action.type) {
      case DEVIS_LIST_REQUEST:
        return { loading: true, devis: [] };
  
      case DEVIS_LIST_SUCCESS:
        return { loading: false, devis: action.payload };
  
      case DEVIS_LIST_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
  export const deviListReducer = (state = { devi: [] }, action) => {
    switch (action.type) {
      case DEVI_LIST_REQUEST:
        return { loading: true, devi: [] };
  
      case DEVI_LIST_SUCCESS:
        return { loading: false, devi: action.payload };
  
      case DEVI_LIST_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };