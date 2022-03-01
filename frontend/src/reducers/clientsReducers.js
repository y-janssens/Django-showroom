import {
  CLIENTS_LIST_REQUEST,
  CLIENTS_LIST_SUCCESS,
  CLIENTS_LIST_FAIL,
  CLIENT_LIST_REQUEST,
  CLIENT_LIST_SUCCESS,
  CLIENT_LIST_FAIL,
} from "../constants/clientsConstants";

export const clientsListReducer = (state = { clients: [] }, action) => {
  switch (action.type) {
    case CLIENTS_LIST_REQUEST:
      return { loading: true, clients: [] };

    case CLIENTS_LIST_SUCCESS:
      return { loading: false, clients: action.payload };

    case CLIENTS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const clientListReducer = (state = { client: [] }, action) => {
  switch (action.type) {
    case CLIENT_LIST_REQUEST:
      return { loading: true, client: [] };

    case CLIENT_LIST_SUCCESS:
      return { loading: false, client: action.payload };

    case CLIENT_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
