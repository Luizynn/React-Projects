import { useState } from "react"

export default function Tasks(){
    const [task, setTask] = useState('')

    function handleChange( value){
        setTask(() => value)
        
    }

    return(
        <div>  
                <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
                <div className="flex items-center gap-4">
                    <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
                    <button className="text-stone-600 hover:text-stone-950">Add task</button>
                </div>

                
                <ul className="p-4 mt-8 rounded-md bg-stone-100">
                    <li className="flex justify-between my-4">
                        <p className="text-stone-800 my-4"> Luiz</p>
                        <button className="text-stone-700 hover:text-red-500">Clear</button>
                    </li>

                </ul>
            </div> 
    )
}