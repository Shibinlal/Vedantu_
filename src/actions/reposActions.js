export const FETCH_REPOS_STARTING = "FETCH_REPOS_STARTING";
export const FETCH_REPOS_SUCCESS = "FETCH_REPOS_SUCCESS";
export const FETCH_REPOS_FAILURE = "FETCH_REPOS_FAILURE";
export const SEARCH_FILTER_REPOS = "SEARCH_FILTER_REPOS";
export const TYPE_FILTER_REPOS = "TYPE_FILTER_REPOS";
export const LANG_FILTER_REPOS = "LANG_FILTER_REPOS";

export const fetchReposStart = () => ({
	type: FETCH_REPOS_STARTING
})

export const fetchReposSuccess = bio => ({
	type: FETCH_REPOS_SUCCESS,
	payload: bio
})

export const fetchReposFailure = () => ({
	type: FETCH_REPOS_FAILURE,
})

export const searchfilterRepos = text => ({
	type: SEARCH_FILTER_REPOS,
	payload: text
})

export const typefilterRepos = text => ({
	type: TYPE_FILTER_REPOS,
	payload: text
})
export const langfilterRepos = text => ({
	type: LANG_FILTER_REPOS,
	payload: text
})



