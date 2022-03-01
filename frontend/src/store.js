import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { fichesListReducer, ficheListReducer } from './reducers/fichesReducers'
import { devisListReducer, deviListReducer } from './reducers/devisReducers'
import { facturesListReducer, factureListReducer } from './reducers/facturesReducers'
import { clientsListReducer, clientListReducer } from './reducers/clientsReducers'

const reducer = combineReducers({
    fichesList: fichesListReducer,
    ficheList : ficheListReducer,
    devisList: devisListReducer,
    deviList: deviListReducer,
    facturesList: facturesListReducer,
    factureList: factureListReducer,
    clientsList: clientsListReducer,
    clientList: clientListReducer,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(reducer, initialState,
     composeWithDevTools(applyMiddleware(...middleware)));

/* const store = createStore(reducer, initialState, applyMiddleware(...middleware)); */

export default store