// this file will be exported as a function that will help us to createStore in the ../main.js


import { createStore, applyMiddleware, compose } from 'redux';
	// enhancers
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
   //reducers
import makeRootReducer from './reducers';

const log = createLogger({diff: false, collapsed: true});

// a function that can create our store and auto-persist

export default (initialState = {}) => {

	//============================================
	// middleware configuration
	//============================================
	const middlewares = [thunk, log];

	//============================================
	//	Store enhancers
	//============================================
	const enhancers = [];

	//============================================
	// Store initiation
	//============================================

	const store = createStore(
		makeRootReducer(),
		initialState,
		compose(
			applyMiddleware(...middlewares),
			...enhancers
		)
	);

	return store;
}


