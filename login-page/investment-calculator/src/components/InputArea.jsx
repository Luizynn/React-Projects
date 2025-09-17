export default function InputArea({id, label, handleChange, value}){
    return( 
        <p key={id}> 
            <label>{label}</label>
            <input type="number" required value={value} onChange={handleChange}/>
        </p>  
    )
}