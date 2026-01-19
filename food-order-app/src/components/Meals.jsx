import { useEffect, useState } from "react"

export default function Meals(){
    const [loadedMeals, setLoadedMeals] = useState([])

    useEffect(() => {
        async function fetchMeals(){
            const response = await fetch('http://localhost:3000/meals');
    
            if(!response.ok) {
                console.error('Deu erro')
            }
    
            const meals = await response.json();
            setLoadedMeals(meals) 
        }
        fetchMeals();
    }, [])

    

    return (
        <ul>
            {loadedMeals.map((meal) => <li key={meal.id}>{meal.name}</li>)}
        </ul>
    )
}