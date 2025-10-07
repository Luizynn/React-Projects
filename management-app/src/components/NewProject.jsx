
import { useState } from 'react'

const labels = [
    {
        label: "title",
        type: "text"
    },
    {
        label: "description",
        type: "text"
    },
    {
        label: "due data",
        type: "date"
    }

    ]
export default function NewProject(){


    return(
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <button className="text-stone-800 hover:text-stone-950">Cancel</button>
                <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
            </menu>
            <p className="flex flex-col gap-1 my-4">
                {labels.map((item) => {
                    return(
                        <>
                            <label
                                key={item.label} 
                                className="text-sm font-bold uppercase text-stone-500"
                                >
                                    {item.label}
                                </label>
                            <input
                                key={item.type} 
                                className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" 
                                type={item.type}/>
                        </>)
                    })}
            </p>
        </div>
    )
}