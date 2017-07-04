import * as types from './actionTypes';
import axios from 'axios'
import qs from 'qs'
import SymbolList from '../components/symbolList';

const Url = `http://api.fixer.io/latest`;


export function getCurrency(params){
	return dispatch => {
		const url = `http://api.fixer.io/latest`;
		console.log(url);
		axios.get(url)
			.then(res => {
				console.log(res.data)
				dispatch({
					type: types.GET_CURRENCY,
					currency : res.data
				})
			})
		.catch(err => console.log(err))	
	}
}

export function selectCurrency(base){
	return dispatch => {
		const url = `http://api.fixer.io/latest`;

		console.log(url);
		axios.get(url,{
			params:{
				base:base
			}
		})
			.then(res => {
				const {data} = res;
				var select_c=[];

				select_c.push({
					name:data.base,
					value:1
				});

				for(var rate in data.rates){
					select_c.push({
			        name: rate,
			        value: data.rates[rate]
			      });
				}
				console.log(select_c,"array")
				return dispatch({
					type: types.SELECT_CURRENCY,
					select_c: select_c
				})
			})
		
	}
}

export function convertRates (base, target) {
  return dispatch => {
	  return axios.get(Url, {
	    params: {
	      base: base,
	      symbols: target
	    }
	  })
	  .then(res => {
	    const {data} = res;

	    return dispatch({
	    	type:types.CONVERT_RATES,
	    	payload:data.rates[target]
	    })
	  })
  }
}
