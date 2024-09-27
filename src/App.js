import { useState } from "react";
import './App.css';


function App() {

  

	const [search, setSearch] = useState("");
	const [todo, setTodo] = useState([]);
	const [name, setName] = useState("");



  return (
	<div className ="list">
	  
	  <form>
	  <input />
	  <button 
	  onClick={

	(event)=>{
	event.preventDefault();
	setTodo([...todo, event.target.previousElementSibling.value]);
	  
	}}>
	  <b>Dodaj</b>
	  </button>
	  </form>

	<label><b>Search</b>
	  <input
	onChange={
	(event)=> setSearch(event.target.value)
	}
	  /></label>
  	<div>
	  {
		todo
		  .filter((item) => item.toLowerCase().includes(search.toLowerCase()))
		  .map((item,index) =>( 
		<li key={index}className="note">
			  {item}({index})
			  <button className ="remove" onClick={()=>setTodo([...todo.filter((_,i)=>i !== index)])} ><b>X</b></button>
			  </li>
		))}
	  </div>

	</div>

  );
}

export default App;
