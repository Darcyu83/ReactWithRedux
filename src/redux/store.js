import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middleware = [logger, thunk];
 //store 
 const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)) );


 export default store ;

