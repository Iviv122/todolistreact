import { useState } from "react";
import './App.css';


function App() {

  const [name, setName] = useState("");
  const [notes, setNotes] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if(name.trim() !== ""){
      setNotes([...notes,name]);
      setName("");
    }
    
  }

  return (
    <div className="App">

      <form onSubmit={handleSubmit}>
 	      <label>Write Note</label><br/>
        
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
        
        <br/>
        <br/>
        <input type='submit' value="Submit"></input>
      </form>
      <div className="list">

        {notes.map((note, index) => (
          <div key={index} className="note" onClick={()=>setNotes(notes.filter((_, i) => i !== index))}>
            {note}
          </div>
        ))}

      </div>
    </div>
  );
}

export default App;
