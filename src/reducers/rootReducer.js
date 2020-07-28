import bioReducer from './bio';
import reposReducer from './repos';
import { combineReducers } from 'redux';

const reducers = {
	bioReducer,
	reposReducer
}
const rootReducer = combineReducers(reducers);

export default rootReducer;