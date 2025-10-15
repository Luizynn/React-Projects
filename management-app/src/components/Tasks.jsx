import { useState, useRef } from "react"
import Modal from './Modal'

export default function Tasks(){

    const dialog = useRef();
    const input = useRef();

    const [task, setTask] = useState('')
    const [tasksArr, setTasksArr] = useState([])

    function handleChange(value){
        setTask(value)
    }
    function handleAddTask(){
        if(task.trim() !== ''){
            setTasksArr((prevTask) => [...prevTask, task])
            setTask('')
            input.current.value = ''
            
            
        }
        else{
            dialog.current.open()
        }
    }

    function handleClear(taskIndex){
        setTasksArr(tasksArr.filter((_, i) => i !== taskIndex))
    }

    return(
        
        <div>
                <Modal ref={dialog} buttonCaption="Close"> 
                    <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                    <p className="text-stone-600 mb-4" >Oops... looks like you forgot to enter a value </p>
                </Modal>  
                <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
                <div className="flex items-center gap-4">
                    <input ref={input} type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={(e) => handleChange(e.target.value)}/>
                    <button className="text-stone-600 hover:text-stone-950" onClick={handleAddTask}>Add task</button>
                </div>

                
                <ul className="p-4 mt-8 rounded-md bg-stone-100">
                    {tasksArr.map((task, index) => {
                        return(
                            <li className="flex justify-between my-4">
                                <p className="text-stone-800 my-4">{task}</p>
                                <button className="text-stone-700 hover:text-red-500" onClick={() => handleClear(index)}>Clear</button>
                            </li>
                            )}
                    )}

                </ul>
            </div> 
    )
}