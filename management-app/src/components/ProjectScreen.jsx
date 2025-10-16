import Tasks from "./Tasks"
import { useState } from "react"

export default function ProjectScreen({title, formattedDate, description, onDelete}){

    const [task, setTask] = useState('')
    const [tasksArr, setTasksArr] = useState([])

    function handleChange(value){
        setTask(value)
    }
    function handleAddTask(){
        if(task.trim() !== ''){
            
            setTasksArr((prevTask) => [...prevTask, {project: title, task: task}])
            setTask('')
        }

    }

    const projectTasks = tasksArr.filter(t => t.project === title)

    function handleClear(taskIndex){
        setTasksArr(prev => {
            const filtered = prev.filter(t => !(t.project === title && prev.indexOf(t) === taskIndex))
            return filtered    
        })
    }

    return(
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">
                        {title}
                    </h1>
                    <button className="text-stone-600 hover:text-stone-950" onClick={onDelete}> 
                        Delete
                    </button>
                </div>
                <p className="mb-4 text-stone-400">
                    {formattedDate}
                </p>
                <p className="text-stone-600 whitespace-pre-wrap">
                    {description}
                </p>
            </header>
            <Tasks
                arr={projectTasks} 
                onHandleChange={handleChange}
                onHandleClick={handleAddTask}
                onHandleClear={handleClear}
                />
                
        </div>

    )
}