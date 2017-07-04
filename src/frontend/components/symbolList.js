import React from 'react';
import { getCurrency ,selectCurrency} from '../actions/actions';
import {connect} from 'react-redux';




class SymbolList extends React.Component{

		constructor(props){
		super(props)
		this.state = {
			amount:0,


		}
	}

    updateCurrency(e){
		this.setState({amount:e.target.value.toUpperCase() })
	}


    HitApi = () => {
    	console.log(this.props.data)
    	
    	this.props.dispatch(getCurrency(this.state.amount))
    }

    select = () =>{
    	
    	this.props.dispatch(selectCurrency(this.state.amount))
    }
  

	render() {
		const {currency} = this.props.Conecter
		const {select_c} = this.props.Conecter
	
		let i = 0;
		
			return(
				<div>
					
					
				
				</div>		
	
			
		)
	}
}

function mapStateToProps(state) {
    return {
        Conecter: state.activeBtn
    };
}

export default connect(mapStateToProps)(SymbolList);
