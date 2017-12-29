import React, { Component } from 'react';
import Imported_createStore_file from './store/createStore';
import AppContainer from './AppContainer';

export default class Root extends Component {
	renderApp() {
		const initialState = window.__INITIAL__STATE;
		const store = Imported_createStore_file(initialState);

		return (
			<AppContainer store={store} />
		);
	}

	render() {
		return this.renderApp();
	}
}