import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';

import SelectModal from './selectmodal';
import constants from '../constants/constants'
import { typefilterRepos, langfilterRepos, searchfilterRepos } from '../actions/reposActions';
import data from '../constants/elementText';



const Repoform = ({ onTypeSelect, onLangSelect, onInputChange }) => {
	const { type, language } = constants;
	const [typeSelected, setType] = useState('');
	const [langSelected, setLang] = useState('');

	useEffect(() => {
		setType(Object.values(type)[0]);
		setLang(Object.values(language)[0]);
	}, [language, type])
	const setTypeOption = (e) => {
		setType(e.target.firstChild.innerText);
		onTypeSelect(e.target.firstChild.innerText);

	}
	const setLangOption = (e) => {
		setLang(e.target.firstChild.innerText);
		onLangSelect(e.target.firstChild.innerText);
	}
	// const execFunction = (fn, d) => {
	// 	let timer;
	// 	return function () {
	// 		let context = this;
	// 		console.log("deb", context, arguments)
	// 		let args = arguments
	// 		clearTimeout(timer);
	// 		timer = setTimeout(() => {
	// 			fn.apply(context, args)
	// 		}, d)
	// 	}
	// }

	const setInput = (e) => {
		// execFunction(onInputChange(e.target.value), 1000);
		onInputChange(e.target.value)
	}


	return (<form className="form border-bottom">
		<div className="form__left">
			<input className="form__control" onChange={(e) => setInput(e)} placeholder="Find a repository" />
		</div>
		<div className="form__right">
			<details className="details" id="type-options">
				<summary className="btn" aria-haspopup="menu" role="button"  >
					{data.type}
					<span data-menu-button="">
						{typeSelected}
					</span>
					<span className="dropdown-caret"></span>
				</summary>
				<SelectModal onSelect={setTypeOption} options={type} />

			</details>
			<details class="details" id="type-options">
				<summary class="btn" aria-haspopup="menu" role="button">
					{data.language}
					<span data-menu-button="">
						{langSelected}
					</span>
					<span class="dropdown-caret"></span>
				</summary>
				<SelectModal onSelect={setLangOption} options={language} />

			</details>
		</div>
	</form >)
}

const mapDispatchToProps = (dispatch) => ({
	onTypeSelect: (text) => dispatch(typefilterRepos(text)),
	onLangSelect: (text) => dispatch(langfilterRepos(text)),
	onInputChange: (text) => dispatch(searchfilterRepos(text))
})

export default connect(null, mapDispatchToProps)(Repoform);