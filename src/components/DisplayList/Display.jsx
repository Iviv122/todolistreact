import { useContext } from "react";
import { TasksContext, TasksDispatchContext } from "../../context/List";

export default function Display(){

    const list = useContext(TasksContext).list;
    const dispatch = useContext(TasksDispatchContext);

    return (
        <>
               {
                list.map((item, index) => (
                    <h1 key={index} >
                        {item} {"index: "} {index}
                        <button onClick={
                            () => dispatch({
                             type: "RemoveItem",
                             index   
                            })
                        }/>
                    </h1>
                ))
               } 
        </>
    );

}