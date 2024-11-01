import { useContext } from "react";
import {  TasksDispatchContext } from "../../context/List";

export default function Input(){

    const dispatch = useContext(TasksDispatchContext);
    return(
        <>
           
            <input type="text" />
            <button onClick={(e) => {
                
                    const text = e.target.previousElementSibling.value;
                    e.preventDefault();  
                    
                    if(text.trim() !== ""){
                        dispatch({
                            type: "AddItem",
                            text,
                        });
                    
                    }

                }}
            >Add</button>
        </>
    );
}