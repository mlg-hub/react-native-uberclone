import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import MapView from 'react-native-maps';
import styles from './MapContainerStyle';

class MapContainer extends Component {
	constructor(props) {
		super(props);
		region = {
				latitude: -3.4189235971689125,
				longitude: 29.346902445032335,
				latitudeDelta: 0.0942,
				longitudeDelta: 0.0121,
			};
		this.state = {
			region:{}
		}
	}
	componentWillMount(){
		console.log(this.state.region);
		 this.currentLocation();
	}
	componentWillUpdate(){
		
	}
	 currentLocation(){
		 navigator.geolocation.getCurrentPosition(
			 (position)=>{
				 this.setState({ region: position.coords});
				 console.log(this.state.region);
			 },
			 (error)=> console.log(error.message),
			{enableHighAccuracy: true, timeout:20000, maximumAge: 2000} 
		 );
	}
	componentDidMount(){
		console.log(this.state.region);
	}

	renderMap() {
		if(this.state.region.latitude) {
			const { latitude, longitude } = this.state.region
			region = {
				latitude: latitude,
				longitude: longitude,
				latitudeDelta: 0.0302,
				longitudeDelta: 0.0121,
			};
			return (
				<MapView
					provider={MapView.PROVIDER_GOOGLE}
					style={styles.map}
					region={region}
				>
					<MapView.Marker coordinate={this.props.region} pinColor="green"/>
				</MapView>
			)
		}

		return (
			<ActivityIndicator size="large" color="#0000ff" />
		)
	}
	render() {
		return (
			<View style={styles.container} >
				{this.renderMap()}
			</View>
		)
		
}	
	
}

export default MapContainer;