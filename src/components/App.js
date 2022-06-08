import React, { useState} from "react";
import Nav from "./Nav";
import TileList from "./TileList"
import DisplayForm from "./DisplayForm";

import hogs from "../porkers_data";

function App() {

	const [formText, setFormText] = useState("")
	const [listOfHogs, setListOfHogs] = useState(hogs)
	const [filterGreased, setFilterGreased] = useState("No")

	function handleFormText(input){
		// console.log(e.target.value)
		setFormText(input)
		
	}

	function handleGrease(e) {
		setFilterGreased(e.target.value)
	}

	const filteredSwine = 
		filterGreased === "Yes" ? 
			hogs.filter((hog) => hog.greased) : listOfHogs
		
	// function handleFormSubmit(e){
	// 	e.preventDefault()
	// 	formText
	// }

	return (
		<div className="App">
			<Nav />
			<DisplayForm 
			formText={formText} 
			greased={filterGreased}
			toggleGreased={handleGrease}
			textChange={handleFormText} />
			<TileList text={formText} hogList = {filteredSwine} />
		</div>
	);
}

export default App;
