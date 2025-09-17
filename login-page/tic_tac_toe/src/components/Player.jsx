import { useState } from "react"



export default function Player({name, symbol, isActive, onChangeName}){
    const [isEditing, setIsEditing] = useState(false);
    const [currentName, setCurrentName] = useState(name)
    
    let playerName = <span className="player-name">{currentName}</span>;

    // Quando depende do estado anterior
    function handlerClick(isEditing){

        setIsEditing((editing) => !editing)
        
        if(isEditing){
            onChangeName(symbol, currentName)
        }
    }

    function handleChange(event){
        setCurrentName(event.target.value)
    }
    
    if(isEditing){
        playerName = <input type="text" required value={currentName} onChange={handleChange}/>
    }
    

    return(
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
              {playerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => handlerClick(isEditing)}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}