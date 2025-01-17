export function manageFriends(state, action) {
	switch (action.type) {

		case "ADD_FRIEND":
			return {
				friends: [
					...state.friends,
					action.friend
				]
			}

		case "REMOVE_FRIEND":
			let removeIndex = state.friends.findIndex(friend => friend.id === action.id)
			return {
				friends: [
					...state.friends.slice(0, removeIndex),
					...state.friends.slice(removeIndex + 1)
				]
			}

		default:
			return { ...state }

	}
}
