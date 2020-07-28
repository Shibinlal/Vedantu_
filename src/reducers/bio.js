import { FETCH_BIO_STARTING, FETCH_BIO_SUCCESS, FETCH_BIO_FAILURE } from '../actions/bioActions';

const initialState = {
	items: [],
	loading: false,
	error: false,
}

const bioReducer = (state = initialState, action) => {
	const { payload, type } = action;
	switch (type) {
		case FETCH_BIO_STARTING:
			return {
				...state,
				loading: true
			};
		case FETCH_BIO_SUCCESS:
			return {
				...state,
				loading: false,
				items: payload
			}
		case FETCH_BIO_FAILURE:
			return {
				...state,
				error: true
			}
		default:
			return state;
	}
}

export default bioReducer;