import React, { useState, useEffect, useRef, useLayoutEffect, useContext, useReducer, useCallback, useMemo } from 'react';



const BgContext = React.createContext();

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

function Hooks() {
	const [value, setValue] = useState("#CCC");

	return (
		<BgContext.Provider value={value}>
			<button onClick={() => setValue("red")}>change context</button>
			<Content />
		</BgContext.Provider>
	)
}

function Content() {
	let [ count, setCount ] = useState(0);
	const value = useContext(BgContext);
	const [state, dispatch] = useReducer(reducer, {count: 10});

	// eslint-disable-next-line
	const memorizedCallback = useCallback(
		() => {
			alert(state.count)
		},
		[state]
	);

	// memorizedCallback(); // 渲染之前调用，可用于性能优化

	useEffect(()=> {
		// const id = setInterval(() => {
		// 	setCount(c => c+1)
		// }, 1000);
		const log = `You clicked ${count} times`;
		alert(log)

		// return () => clearInterval(id);
		// eslint-disable-next-line
	}, []);

	const prevCountRef = useRef();

	useLayoutEffect(() => {
		// alert("121212")
		return () => {

		}
	});

	useEffect(() => {
		prevCountRef.current = count;
	});

	const prevCount = prevCountRef.current;
	// 可用于性能优化，只有依赖的数组项变化时再去比较，isEqual的结果会被记录下来
	const isEqual = useMemo(() => count === prevCount, [count, prevCount]);

	console.log(prevCount)
	console.log(isEqual)


	return (
		<div>
			<p style={{backgroundColor: value}}>You Clicked {count} times</p>
			<button onClick={() => setCount(count+1)}>
				Click me
			</button>
			<h1>Now: {count}, before: {prevCount}</h1>

			<p>state count: {state.count}</p>
			<button onClick={() => dispatch({type: "increment"})}>increment</button>
			<button onClick={() => dispatch({type: "decrement"})}>decrement</button>
		</div>
	)
}


export default Hooks;
