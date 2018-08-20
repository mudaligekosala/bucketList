import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';

//import reducers
import Redusers from './Redusers';


const configStore = () => {
   return createStore(Redusers, applyMiddleware(promiseMiddleware(),logger,))
}

export default configStore;