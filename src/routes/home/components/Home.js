import React, { Component } from 'react';
import { View, Text } from 'react-native';

import MapContainer from './mapContainer';

class Home extends Component {
	componentWillMount(){
		//  this.props.getCurrentLocation();
	}
	
	renderMap() {
			const region = {
				latitude: -3.4189235971689125,
				longitude: 29.346902445032335,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0121,
			};
			return <MapContainer region={region} />	
	}
	render() {
		
		return (
			<View style={{ flex: 1 }}>
				{this.renderMap()}
			</View>
		);
		
	}
}

export default Home;