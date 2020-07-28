import React from 'react';
import data from '../constants/elementText';

const Repolist = ({ repos }) => {

	const { items, searchText, inputSearchText } = repos;
	const inputFilter = inputSearchText === "" ? items : items.filter(el => el["name"].includes(inputSearchText))
	const filteredItems = searchText === "all" ? inputFilter : inputFilter.filter(el => el[searchText])
	return (<div className="repository-list">
		{filteredItems.length === 0 && <div>{data.repoEmpty}</div>}
		{filteredItems.length > 0 &&
			<ul className="repository-list__wrapper">

				{filteredItems.map(repo => (<li key={repo.id} className="repo-item border-bottom">
					<div className="repo-item__left">
						<div className="item-level1">
							<h3 className="item-level1__head">
								<a>{repo.name}</a>
							</h3>
						</div>
						<div className="item-level2">
							<span class="item-level2__color" style={{ backgroundColor: '#e34c26' }}></span>
							<span className="item-level2__tech mr">{repo.language}</span>
							<a className="mr"></a>{data.updatedDate}
							<span>{repo.created_at}</span>
						</div>

					</div>
					<div className="repo-item__right">

					</div>
				</li>))}

			</ul>
		}
	</div>)
}

export default Repolist;