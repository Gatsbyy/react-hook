import React, { useContext, useReducer } from 'react'

// reducer
function reducer(state, action) {
	switch (action.type) {
		case "increment":
			return {count: state.count + 1};
		case "decrement":
			return {count: state.count - 1};
		default:
			throw new Error();
	}
}

// createStore
function createStore(reducer, initState) {
	const BaseContext = React.createContext();
	let dispatch = () => {};

	/**
	 * @param children 子组件
	 * @param initValue 初始值
	 * @returns {*}
	 * @constructor
	 */
	function Provider({children, initValue}) {
		let [_state, _dispatch] = useReducer(reducer, initValue || initState);
		dispatch = _dispatch;

		return <BaseContext.Provider value={_state}>
			{children}
		</BaseContext.Provider>
	}

	// 通过useStore将store中保存的state以及dispatch方法传递下去
	function useStore() {
		// 消费context中的值
		const contextState = useContext(BaseContext);

		return {
			state: contextState,
			dispatch
		}
	}

	return {
		Provider,
		useStore
	}
}

const initState = {count: 0};

const { Provider, useStore } = createStore(reducer, initState);

function HookRedux() {
	return (
		<Provider>
			<Child />
		</Provider>
	)
}

function Child() {
	const { state, dispatch } = useStore();

	return (
		<div>
			<p>state: {state.count}</p>
			<button onClick={() => dispatch({type: 'increment'})}>increment</button>
			<button onClick={() => dispatch({type: 'decrement'})}>decrement</button>
		</div>
	)
}

export default HookRedux;
