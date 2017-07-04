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

   

	render() {
		
		
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
