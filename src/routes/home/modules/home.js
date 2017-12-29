import update from 'react-addons-update';
import types from './actionTypes';
import { Dimensions } from 'react-native';

const {
	GET_CURRENT_LOC
} = types;

const { width, height } = Dimensions.get('window');

const Aspect_Ratio = width/height;

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = Aspect_Ratio * LATITUDE_DELTA;

//==========================
// ACTION CREATOR
//==========================

export function getCurrentLocation() {
	
	return  (dispatch) => {
		 navigator.geolocation.getCurrentPosition(
			position =>{
				dispatch({
					type: GET_CURRENT_LOC,
					payload: position
				});
			},//dispatch ends here
			(error)=> console.log(error.message),
			{enableHighAccuracy: true, timeout:5000, maximumAge: 2000}
		);
	}
}

//======================
//	ACTION HANDLER A.K.A REDUCERS
//======================

function handle_getCurrentLocation(state, action) {
	return update(state, {
			current_position:{
				latitute: { $set: action.payload.coords.latitude},
				longitude: { $set: action.payload.coords.longitude},
				latitudeDelta: { $set: LATITUDE_DELTA},
				longitudeDelta: { $set: LONGITUDE_DELTA}
				} 
	})
}

const ACTION_HANDLER = {
	GET_CURRENT_LOC: handle_getCurrentLocation
}

const initialState= {
	current_position: {}
};

export function HomeReducer ( state=initialState, action) {
	const handler = ACTION_HANDLER[action.type];

	return handler ? handler(state, action) : state;
}
