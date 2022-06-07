import React, { useState} from "react";
import Nav from "./Nav";
import TileList from "./TileList"
import DisplayForm from "./DisplayForm";

import hogs from "../porkers_data";

function App() {

	const [formText, setFormText] = useState("")

	function handleFormText(e){
		console.log(e.target.value)
		setFormText(e.target.value)
	}

	return (
		<div className="App">
			<Nav />
			<DisplayForm text={formText} textChange={handleFormText} />
			<TileList text={formText} hogList = {hogs} />
		</div>
	);
}

export default App;
