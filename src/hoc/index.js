import React, { Component } from 'react'

class NameList extends Component {


	render(){
		console.log(this.props)

		return (
			<ul>
				{
					this.props.data.map((item, key) => {
						return <li key={key}>{item}</li>
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

		changeState = () => {

		}

		render() {
			console.log(this.props);
			return <WrappedComponent onClick={this.changeState} data={this.state.data} {...this.props}/>
		}
	}
}

export default Hoc(NameList);
