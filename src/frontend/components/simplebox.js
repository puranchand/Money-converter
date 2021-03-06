import React from 'react';

import { getCurrency ,selectCurrency, convertRates} from '../actions/actions';
import {connect} from 'react-redux';

class SimpleBox extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			amount:1,
			base:'',
			target:'',
			base_amount: 1,
      		target_amount: 1
		}
	}

    updateCurrency(e){
		this.setState({amount:e.target.value })
	}
		
	componentWillMount() {
		this.props.dispatch(selectCurrency())
	}
	
  	onSelect = (e) => {
  		this.setState({base : e.target.value})
  	}

  	onSetValue = (e) => {
  		this.setState({target: e.target.value})
  	}

  	componentDidUpdate(prevProps, prevState) {
  		if(prevState.base != this.state.base || prevState.target != this.state.target){
  			this.props.dispatch(convertRates(this.state.base, this.state.target))
  		}
  	}

  	componentWillReceiveProps(nextProps) {
  		if(nextProps.Conecter.select_c.length !== this.props.Conecter.select_c.length) {
  			this.setState({
  				base: nextProps.Conecter.select_c[0].name,
  				target: nextProps.Conecter.select_c[1].name,
  			})
  		}
  	}

	render() {
		const {currency} = this.props.Conecter
		const {select_c} = this.props.Conecter

		console.log(this.state.target)
		let i = 0;
		
		return(
			<div>
				<form>
					<span className="header"><h2>Currency Converter</h2></span>
					<div>
						<div className="row">
							<div className="one-half column">
								From
								<select value={this.state.base} onChange={this.onSelect} name='base'>
								{ select_c && select_c.length && select_c.map((data,index) =>	
									<option key={index}>{data.name}</option>		
								   )}
								 </select>   	
							</div>
							<div className="one-half column" >
								To
								<select value={this.state.target} onChange={this.onSetValue} name = 'target'>
								{ select_c && select_c.length && select_c.map((data,index) =>
									<option value={data.name} key={index}>
										{data.name}
									</option>	
								   )}
								 </select>   
							</div>
						</div >
						<div className="row">
							Amount
		    				<input type = "number" min={1} value = {this.state.amount} onChange = {(e) => this.updateCurrency(e)}/>
						</div>
						<div>
							<h5 className="target-amount u-text-center">
							{this.state.amount}&nbsp;{this.state.base} &nbsp; &emsp;=
							{this.state.amount * this.props.Conecter.fetching_value}
							{this.state.target}
							</h5>
						</div>
						<p>
							<h6 className="target-amount u-text-center">
							Currency Converter Made by 
							<a href ='http://puranchand.com/'> Puran Chand </a>
							 and  
							<a href='https://github.com/puranchand/Money-converter'> Github Source.</a>
							</h6>
						</p>
            		</div>
				</form>
			</div>		
		)
	}
}
 
function mapStateToProps(state) {
    return {
        Conecter: state.activeBtn
    };
}

export default connect(mapStateToProps)(SimpleBox);


