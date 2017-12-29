import { connect } from 'react-redux';
import Home from '../components/Home';
import { 
	getCurrentLocation
	} from "../modules/home";

 const mapStateToProps = (state) => ({
	current_position: state.home.current_position
})

const mapActionCreators = {
	getCurrentLocation
};

export default connect(mapStateToProps, mapActionCreators)(Home);