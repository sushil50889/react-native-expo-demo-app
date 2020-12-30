import allReducers from '../reducers';
import { createStore } from 'redux';

const configureStore = ()=> createStore(allReducers);

export default configureStore;