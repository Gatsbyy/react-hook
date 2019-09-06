import React from 'react'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import App from './../App'
import DerivedState from './../newLifeCircle'
import Hooks from './../hooks'
import {default as HocInstance} from './../hoc'

export default function() {
	return (
		<BrowserRouter>
			<Route path='/' exact component={App} />
			<Route path='/hooks' component={Hooks} />
			<Route path='/derivedState' component={DerivedState} />
			<Route path='/hoc' component={HocInstance} />
		</BrowserRouter>
	)
}
