import {
  FICHES_LIST_REQUEST,
  FICHES_LIST_SUCCESS,
  FICHES_LIST_FAIL,

  FICHE_LIST_REQUEST,
  FICHE_LIST_SUCCESS,
  FICHE_LIST_FAIL,
} from "../constants/fichesConstants";

export const fichesListReducer = (state = { fiches: [] }, action) => {
  switch (action.type) {
    case FICHES_LIST_REQUEST:
      return { loading: true, fiches: [] };

    case FICHES_LIST_SUCCESS:
      return { loading: false, fiches: action.payload };

    case FICHES_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const ficheListReducer = (state = { fiche: [] }, action) => {
  switch (action.type) {
    case FICHE_LIST_REQUEST:
      return { loading: true, fiche: [] };

    case FICHE_LIST_SUCCESS:
      return { loading: false, fiche: action.payload };

    case FICHE_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};