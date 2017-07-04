import * as actionTypes from '../actions/actionTypes'; 

const initialState = {
	
	amount:0,
	fetching:false,
	currency:{},
	select_c:[],
	fetching_value:'',
	target:[0],
	base:[1]	
}

export default function (state = initialState,action){
	switch(action.type){
		
		case actionTypes.GET_CURRENCY:
			return {...state,fetching:true, currency: {...action.currency}}
		case actionTypes.SELECT_CURRENCY:
			return {...state,fetching:true, select_c: [...action.select_c]}
		case actionTypes.CONVERT_RATES:
			return {...state,fetching:true, fetching_value: action.payload}
		default : 
			return state 

	}
}

