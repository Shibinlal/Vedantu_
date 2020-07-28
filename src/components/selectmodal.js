import React from 'react';
import { ReactComponent as Close } from '../img/close.svg'

const SelectModal = ({ onSelect, options, onClose }) => {

	return (
		<div className="selectmenu-modal">
			<div className="selectmenu">
				<div className="selectmenu__header">
					<span className="selectmenu__title">Select type</span>
					<Close />
				</div>
				<div className="selectmenu__list">
					{Object.values(options).map((val, ind) => (<label key={ind} onClick={(e) => onSelect(e)} className="selectmenu__item">
						<span className="selectmenu__text">{val}</span>
					</label>))}
				</div>
			</div>
		</div>)
}

export default SelectModal;