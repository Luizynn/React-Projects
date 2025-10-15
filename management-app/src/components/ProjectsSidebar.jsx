import CreatedProjects from "./CreatedProjects";
import DefaultScreen from "./DefaultScreen";
import Modal from "./Modal";
import NewProject from "./NewProject";
import ProjectScreen from "./ProjectScreen"
import { useState, useRef } from "react";

export default function ProjectsSidebar(){

    const modal = useRef();

    const [currentScreenData, setCurrentScreenData] = useState({
        title: '',
        description: '',
        date: '',
    })
    
    const [computedValues, setComputedValues] = useState({
        title: '',
        description: '',
        date: '',
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

    function handleDelete(){
        setProjectState()
    }

    function handleChange(identifier, value){
        setComputedValues((prevValues) => ({
            ...prevValues,
            [identifier]: value
        }))
        
    }

    function handleSave(){
        if(computedValues.title && computedValues.title.trim() !== '' && computedValues.description.trim() !== '' && computedValues.date.trim() !== ''){


            setProjectState(prevState => ({
                ...prevState,
                projects: [...prevState.projects, computedValues]
            }))
            changePages('default')
            setComputedValues({
                title: '',
                description: '',
                date: ''
            })
            console.log(projectState.projects)}
        else{
            modal.current.open();
        }
    }

    function handleCancel(){
        changePages('default')
        setComputedValues({
            title: '',
            description: '',
            date: '',
        })
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
                    {projectState.projects && projectState.projects.map((project) => {
                        return(
                        
                            <CreatedProjects title={project.title} handleClick={() => {
                                changePages('screen')
                                setCurrentScreenData(() => ({
                                    title: project.title,
                                    description: project.description,
                                    date: project.date,
                                }))
                              }}/>
                        
                )})}
                </ul> 
            </aside>
            <Modal ref={modal} buttonCaption="Close"> 
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4" >Oops... looks like you forgot to enter a value </p>
            </Modal>
            {projectState.selectedScreen == 'default' && <DefaultScreen handleClick={handleAddProject}/>}
            {projectState.selectedScreen == 'adding' && <NewProject onHandleChange={handleChange} onHandleCancel={handleCancel} onHandleSave={handleSave}/>}
            {projectState.selectedScreen == 'screen' && <ProjectScreen title={currentScreenData.title} formattedDate={currentScreenData.date} description={currentScreenData.description}/>}
        </>
    )
}