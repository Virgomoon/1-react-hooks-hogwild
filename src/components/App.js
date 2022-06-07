import React, { useState} from "react";
import Nav from "./Nav";
import TileList from "./TileList"
import DisplayForm from "./DisplayForm";

import hogs from "../porkers_data";

function App() {

	const [formText, setFormText] = useState("")

	function handleFormText(input){
		// console.log(e.target.value)
		setFormText(input)
		
	}

	return (
		<div className="App">
			<Nav />
			<DisplayForm formText={formText} textChange={handleFormText} />
			<TileList text={formText} hogList = {hogs} />
		</div>
	);
}

export default App;
