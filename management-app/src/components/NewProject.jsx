
const labels = [
    {
        label: "title",
        type: "text",
        refKey: 'title',

    },
    {
        label: "description",
        type: "text",
        refKey: 'description',

    },
    {
        label: "due data",
        type: "date",
        refKey: 'date',
        
    }

    ]
export default function NewProject({onHandleChange, onHandleSave, onHandleCancel}){


    return(
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <button className="text-stone-800 hover:text-stone-950" onClick={onHandleCancel}>Cancel</button>
                <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={onHandleSave}>Save</button>
            </menu>
            {labels.map((item) => {
                return(
                    <p className="flex flex-col gap-1 my-4" key={item.refKey}>
                        <label
                            className="text-sm font-bold uppercase text-stone-500"
                            >
                                {item.label}
                        </label>
                        {item.label !== 'description' ? <input
                            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" 
                            type={item.type}
                            onChange={(event) => onHandleChange(item.refKey, event.target.value)}
                            value={item.refKey.current}/> : 

                            <textarea 
                            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" 
                            type={item.type}
                            onChange={(event) => onHandleChange(item.refKey, event.target.value)}
                            value={item.refKey.current}/>
                            }
                    </p>)
                })}
        </div>
    )
}
