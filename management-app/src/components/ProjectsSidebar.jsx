import DefaultScreen from "./DefaultScreen";
import NewProject from "./NewProject";
import { useState } from "react";

export default function ProjectsSidebar(){

    const [computedValues, setComputedValues] = useState({
        title: undefined,
        description: undefined,
        date: undefined,
    })

    const [projectState, setProjectState] = useState({
        selectedScreen: 'default',
        projects: [],
    })

    function changePages(page){
        setProjectState((prevState) => ({
            ...prevState,
            selectedScreen: page
        }))
    }

    function handleChange(identifier, value){
        setComputedValues((prevValues) => ({
            ...prevValues,
            [identifier]: value
        }))
        
    }

    function handleSave(){
        if(computedValues.title !== undefined){
            projectState.projects.push(computedValues)
            changePages('default')
            console.log(projectState.projects)}
    }

    function handleCancel(){
        changePages('default')
        setComputedValues((prevValues) => ({
            ...prevValues,
            title: undefined
        }))
    }

    

    function handleAddProject(){
        setProjectState((prevState) => ({
            ...prevState,
            selectedScreen: 'adding'

        }))
    }

    
    return(
        <>
            <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
                <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
                <div className="w-[35rem] mt-16">
                    <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" onClick={handleAddProject}> + Add project</button>
                </div>
                <ul className="mt-8">

                </ul>
            </aside>
            {projectState.selectedScreen == 'default' && <DefaultScreen handleClick={handleAddProject}/>}
            {projectState.selectedScreen == 'adding' && <NewProject onHandleChange={handleChange} onHandleCancel={handleCancel} onHandleSave={handleSave}/>}
        </>
    )
}