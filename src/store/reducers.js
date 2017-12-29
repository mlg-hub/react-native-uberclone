import { combineReducers } from 'redux';
import { HomeReducer as home } from '../routes/home/modules/home';

const makeRootReducer = () => {
	return combineReducers({
		home
	})
};

export default makeRootReducer;