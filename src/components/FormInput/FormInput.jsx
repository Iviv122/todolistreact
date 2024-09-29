import './FormInput.css'

export default function FormInput({list, setList}){
    return(
            <form className='formInput'>

				<input className='noteInput'/>
				<button className='inputButton' 
					onClick={(event) => {
						event.preventDefault();
						let name =  event.target.previousElementSibling.value; 
						if(name.trim() !== ""){ // Zeby nie bylo pustych nodow
						setList([...list,name]);			
						}
					}}>
					OK
				</button>
			</form>

    );
}