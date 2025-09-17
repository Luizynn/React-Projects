import { useState } from "react"
import InputArea from "./InputArea";
import { calculateInvestmentResults, formatter } from "../util/investment";

const nameLabel = ['Year', 'Investment Value', 'Interest (Year)', 'Total interest', 'Investment capital']

const fields = [
    {key:"intialInvestment", label: "Initial investment"},
    {key: "annualInvestment", label: "Annual investment"},
    {key: "expectedReturn", label: "Expected return"},
    {key: "duration", label: "Duration"}
]



export default function ResultArea(){
    const [value, setValue] = useState({
        initialInvestment: 1200,
        annualInvestment: 10,
        expectedReturn: 230,
        duration: 10,
    })
    const results = calculateInvestmentResults(value)
    
    function handleChange(input, newValue){
        if(input === 'duration' && newValue < 1){
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
        <>
        <section id="user-input">
            <div className="input-group"> 
                {fields.map(({key, label}) => 
                <InputArea 
                    key={key}
                    id={key}
                    value = {value[key]} 
                    fields = {fields} 
                    label = {label} 
                    handleChange={(e) => handleChange(key, e.target.value)}/>
                )
                    }
            </div>
        </section>
       
        <table id="result">
            <thead>
                <tr>
                    {nameLabel.map((label) => <th>{label}</th>)}
                </tr>
            </thead>
            <tbody>
                {results.map((yearData) =>{
                const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - value.initialInvestment;
                const totalAmountInvested = value.initialInvestment + yearData.annualInvestment * yearData.year;
                        
                return (
                    <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                    )
                }
                            )}
                        </tbody>

                    </table>
                
                    </>
       
    )
}


