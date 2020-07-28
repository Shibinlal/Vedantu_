export const FETCH_BIO_STARTING = "FETCH_BIO_STARTING";
export const FETCH_BIO_SUCCESS = "FETCH_BIO_SUCCESS";
export const FETCH_BIO_FAILURE = "FETCH_BIO_FAILURE";

export const fetchBioStart = () => ({
	type: FETCH_BIO_STARTING
})

export const fetchBioSuccess = bio => ({
	type: FETCH_BIO_SUCCESS,
	payload: bio
})

export const fetchBioFailure = () => ({
	type: FETCH_BIO_FAILURE,
})

