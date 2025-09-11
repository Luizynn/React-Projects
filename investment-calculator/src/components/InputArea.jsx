import { useState } from "react"
const label = [
    {id:"II", label: "Initial investiment"},
    {id: "AI", label: "Annual investiment"},
    {id: "ER", label: "Expected return"},
    {id: "D", label: "Duration"}
]


export default function InputArea(){
    const [value, setValue] = useState({
        II: 0,
        AI: 0,
        ER: 0,
        D: 0,
    })

    function handleChange(input, newValue){
        if(newValue < 0){
            return;
        }
        setValue((prevValue) => {
            return{
                ...prevValue,
                [input]: +newValue
            }
        })
    }

    return(
    <section id="user-input">
        <div className="input-group">
         {label.map((fields) => {
            return(
                <p key={fields.id}> 
                <label>{fields.label}</label>
                <input type="number" required value={value[fields.id]} onChange={() => handleChange(fields.id, event.target.value)}/>
                </p> 
            )   
         })} 
        </div>  
    </section>
       
    )
}