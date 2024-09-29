import { useState } from "react";
import './App.css';
import './components/DisplayList/DisplayList'
import DisplayList from "./components/DisplayList/DisplayList";
import SearchInput from "./components/SearchInput/SearchInput";
import FormInput from "./components/FormInput/FormInput";

function App() {
	const [search, setSearch] = useState("");
	const [todo, setTodo] = useState([]);

	return (
		<div className="App">

			<FormInput list={todo} setList={setTodo} />

			<SearchInput searchFunc={setSearch} />
			
			<DisplayList list={todo} setList={setTodo} searchVar={search} />
		
		</div>
	);
}

export default App;

