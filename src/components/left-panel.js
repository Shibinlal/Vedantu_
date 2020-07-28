import React, { useEffect } from 'react';
import './left-panel.css'
import { connect } from 'react-redux';

import { fetchBio } from '../actions/thunk';
import data from '../constants/elementText';

const LeftPanel = ({ bio, getBio, isLoading }) => {
	useEffect(() => {
		getBio();
	}, [getBio]);
	return (<div className="left-panel__container">
		<div className="image">
			<div>
				<a>
					<img width="260" height="260" className="profile-pic" src={bio.avatar_url} alt="profile pic"></img>
				</a>
			</div>
			<div className="title">
				<h1>
					<span className="title__main">{bio.name}</span>
					<span className="title__sub">{bio.login}</span>
				</h1>
			</div>


		</div>
		<div className="user-bio">
			<div className="user-bio__text">{bio.bio}</div>
		</div>
		<div className="bio-desc">
			<div className="follow-form">
				<button className="follow-form__btn btn btn-block">{data.follow}</button>
				<span className="follow-form__dropdown">...</span>
			</div>
			<div className="bio">
				<div className="bio__count">
					<div>
						<a className="link-grey followers">{bio.followers} {data.follower}</a>
						<a className="link-grey following">{bio.following} {data.following}</a>
						<a className="link-grey star">7</a>
					</div>
				</div>
				<div className="bio__address">
					<ul>
						<li className="bio__address__item">
							{bio.company}
						</li>
					</ul>
				</div>
			</div>
		</div>

	</div>)
}

const mapDispatchToProps = (dispatch) => ({
	getBio: () => dispatch(fetchBio())
})

const mapStateToProps = (state) => ({
	bio: state.bioReducer.items,
	isLoading: state.bioReducer.loading
})

export default connect(mapStateToProps, mapDispatchToProps)(LeftPanel);