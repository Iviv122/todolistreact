import './DisplayList.css';
import { FaTrash } from "react-icons/fa";

export default function DisplayList({list, setList, searchVar}){


    return(
            <div className='list'> 
				{
                    list
						.filter((item) => item.toLowerCase().includes(searchVar.toLowerCase()))
						.map((item, index) => (
							<li key={index} className='item'> 
								<p className='itemContent'>{item}</p> 
								<button  className='removeButton' onClick={() => setList([...list.filter((_, i) => i !== index)])}>
									<FaTrash className='removeIcon'/>	
								</button>
							</li>
						))
				}
			</div>

    );

}