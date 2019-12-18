import React, {Component} from 'react'
import Hooks from './../hooks'

const stateContext = React.createContext({name: "jiangbo"});

class DerivedState extends Component {
	static contextType = stateContext;

	state = {
		count: 1,
	}

	changeCount = () => {
		console.log("context==", this.context)

		this.setState({
			count: this.state.count+1
		})
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		// console.log(nextProps)
		console.log(prevState)

		return {
			count: prevState.count+1
		}
	}

	render() {
		return (
			<div>
				<p>{this.state.count}</p>
				<button onClick={this.changeCount}>click me</button>
				<Hooks />
			</div>
		)

	}

}

// DerivedState.contextType = stateContext;

export default DerivedState;
