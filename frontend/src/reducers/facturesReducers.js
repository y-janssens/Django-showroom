import {
    FACTURES_LIST_REQUEST,
    FACTURES_LIST_SUCCESS,
    FACTURES_LIST_FAIL,
  
    FACTURE_LIST_REQUEST,
    FACTURE_LIST_SUCCESS,
    FACTURE_LIST_FAIL,
  } from "../constants/facturesConstants";

  export const facturesListReducer = (state = { factures: [] }, action) => {
    switch (action.type) {
      case FACTURES_LIST_REQUEST:
        return { loading: true, factures: [] };
  
      case FACTURES_LIST_SUCCESS:
        return { loading: false, factures: action.payload };
  
      case FACTURES_LIST_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
  export const factureListReducer = (state = { facture: [] }, action) => {
    switch (action.type) {
      case FACTURE_LIST_REQUEST:
        return { loading: true, facture: [] };
  
      case FACTURE_LIST_SUCCESS:
        return { loading: false, facture: action.payload };
  
      case FACTURE_LIST_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };