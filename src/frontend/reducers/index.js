
import {combineReducers} from 'redux';
import ActiveBtnReducer from './reducers';

const allReducers = combineReducers({
	
	activeBtn: ActiveBtnReducer

});


export default allReducers;


