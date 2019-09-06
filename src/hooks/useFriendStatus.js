import { useState, useEffect } from 'react';

function useFriendStatus(friendId) {
	const [ isOnline, setIsOnline ] = useState(null);

	function handleStatusChange(status) {
		setIsOnline(status.isOnline);
	}

	useEffect(()=> {
		// 异步请求
		window.subscribeToFriendStatus(friendId, handleStatusChange);

		return () => {
			window.unsubscribeFromFriendStatus(friendId, handleStatusChange);
		}
	});

	return isOnline;
}

export default useFriendStatus;
