import "./AllTasks.css"
import data from "../data"
import { useState } from "react"


const AllTasks = ()=> {
    
    const [myTask, setMyTask] = useState(data)   
    
    const tasksHandler = (keyId) =>{
        const filteredTasks = myTask.filter( (oneTask)=>{
            return oneTask.id !== keyId
             })

            setMyTask(filteredTasks) 
    }


    const deleteAll =()=>{
        setMyTask([])
    }

    return <div>
        {
            myTask.map((oneTask)=>{
                const {id, name} = oneTask
                return <div className="oneTask" key={id}>
                    <h4>{name}</h4>
                    <button type="button" onClick={ ()=> tasksHandler(id)}>Delete</button>
                </div>
            })
        }
        <button type="button" className="main-button" onClick={deleteAll}>Delete all</button>

    </div>
    
}

export default AllTasks