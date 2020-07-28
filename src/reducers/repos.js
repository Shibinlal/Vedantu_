import { FETCH_REPOS_STARTING, FETCH_REPOS_SUCCESS, FETCH_REPOS_FAILURE, SEARCH_FILTER_REPOS, TYPE_FILTER_REPOS, LANG_FILTER_REPOS } from '../actions/reposActions';

const initialState = {
	items: [],
	loading: false,
	error: false,
	searchText: 'all',
	inputSearchText: '',
}

const reposReducer = (state = initialState, action) => {
	const { payload, type } = action;
	const newState = { ...state };
	switch (type) {
		case FETCH_REPOS_STARTING:
			return {
				...state,
				loading: true
			};
		case FETCH_REPOS_SUCCESS:
			return {
				...state,
				loading: false,
				items: payload
			}
		case FETCH_REPOS_FAILURE:
			return {
				...state,
				error: true
			}
		case SEARCH_FILTER_REPOS:
			console.log("payload***********", payload)
			return {
				...state,
				inputSearchText: payload
			}
		case TYPE_FILTER_REPOS:
			console.log("payload***********", payload)
			return {
				...state,
				searchText: payload
			}
		case LANG_FILTER_REPOS:
			return {
				...state,
				searchText: payload
			}
		default:
			return state;
	}
}

export default reposReducer;