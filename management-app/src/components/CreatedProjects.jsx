export default function CreatedProjects({title}){
    return(
        <button className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">
            {title}
        </button>
    )
}