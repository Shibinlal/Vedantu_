import {
	fetchReposStart, fetchReposSuccess, fetchReposFailure
} from './reposActions';

import {
	fetchBioStart, fetchBioSuccess, fetchBioFailure
} from './bioActions';

export const fetchRepos = () => async (dispatch) => {
	//fetch repos
	try {
		dispatch(fetchReposStart());
		const res = await fetch("https://api.github.com/users/supreetsingh247/repos",
			{
				method: 'GET',
				headers: {
					Accept: 'application/json',
				}
			});
		const repos = await res.json();
		dispatch(fetchReposSuccess(repos));
	} catch (e) {
		dispatch(fetchReposFailure());
	}
}

export const fetchBio = () => async (dispatch) => {
	//fetch bio

	try {
		dispatch(fetchBioStart());
		const res = await fetch("https://api.github.com/users/supreetsingh247");
		let bio = await res.json();
		dispatch(fetchBioSuccess(bio));
	} catch (e) {
		dispatch(fetchBioFailure());
	}
}