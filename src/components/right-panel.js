import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import './right-panel.css'

import { fetchRepos } from '../actions/thunk';
import Repoform from './repoform';
import Repolist from './repolist';
import data from '../constants/elementText';




const RightPanel = ({ getRepos, repos, isLoading }) => {
	useEffect(() => {
		getRepos()
	}, [getRepos]);
	const Loading = <div>{data.loading}</div>;
	const Content = (<Fragment>
		<Repoform />
		<Repolist repos={repos} /></Fragment>);
	return isLoading ? Loading : Content
}

const mapDispatchToProps = (disptch) => ({
	getRepos: () => disptch(fetchRepos()),
})

const mapStateToProps = (state) => ({
	repos: state.reposReducer,
	isLoading: state.reposReducer.loading
})

export default connect(mapStateToProps, mapDispatchToProps)(RightPanel);