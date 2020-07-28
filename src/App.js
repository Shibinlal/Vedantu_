import React from "react";
import "./App.css";

import LeftPanel from "./components/left-panel"
import RightPanel from "./components/right-panel"


function App() {
	return (
		<div className="App">
			{/* <Left-panel />
			<Right-panel /> */}
			<div className="container">
				<div className="container__wrapper">
					<div className="left-panel">
						<LeftPanel />
					</div>
					<div className="right-panel">
						<RightPanel />
					</div>
				</div>

			</div>

		</div>
	);
}

export default App;
