import React from 'react';
import {connect} from 'react-redux'
import {getCurrency} from '../actions/actions';

import SimpleBox from '../components/simplebox';



class Main extends React.Component{

	render() {

			return(

				 <div className="row">
	
						<SimpleBox />
	
				</div>
		)
	}
}
function mapStateToProps(state) {
    return {
        Contacter: state.activeBtn
    };
}
export default connect(mapStateToProps)(Main)