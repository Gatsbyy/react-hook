import React, { Component } from 'react'
import propTypes from 'prop-types'

class NameList extends Component {

	render(){
		console.log(this.props)

		return (
			<ul>
				{
					this.props.data.map((item) => {
						return <li key={item}>{item}</li>
					})
				}
			</ul>
		)
	}
}

function Hoc(WrappedComponent) {

	return class Hoc extends Component{
		// constructor(props) {
		// 	super(props);
		// }
		//
		state = {
			data: ["a", "b", "c"]
		}

		changeState = (val) => {
			console.log("11111")
		}

		render() {
			console.log(this.props);
			return <WrappedComponent onClick={this.changeState} data={this.state.data} {...this.props}/>
		}
	}
}

NameList.propTypes = {
	requireVar: propTypes.string && propTypes.string.isRequired,
	requireFunc: propTypes.func.isRequired,
};

NameList.defaultProps = {
	requireVar: "var",
	requireFunc: ()=>{}
};

export default Hoc(NameList);
