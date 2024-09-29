import { FaSearch } from "react-icons/fa";
import './SearchInput.css'

export default function SearchInput({searchFunc}){
    
    return(
			<label className="searchLabel"><FaSearch className="searchIcon" />
			<input className='searchInput'
				onChange={(event) => searchFunc(event.target.value)}
			/>
			</label>

    );
}