import { useActionState, use } from "react";
import { isNameCorrect, isOpinionCorrect, isTitleCorrect } from "../util/validation";
import { OpinionsContext } from "../store/opinions-context";


export function NewOpinion() {

  const { addOpinion } = use(OpinionsContext)

  async function signupAction(prevFormState, formData){
    const userName = formData.get("userName");
    const title = formData.get("title")
    const yourOpinion = formData.get("body")
    
    let errors = [];
  
  
    if(!isNameCorrect(userName)){
      errors.push("Invalid user name, try again")
    }
  
    if(!isOpinionCorrect(title)){
      errors.push("The title must have at least 10 carac and less than 40")
    }
  
    if(!isTitleCorrect(yourOpinion)){
      errors.push("The opinion must have 10 carac and less than 255")
    }
  
    if(errors.length > 0){
    
      return {
        errors,
        enteredValues: {
          userName,
          title,
          yourOpinion,
        }
      }
    }
  
    await addOpinion({title, body, userName})
    return { errors: null }
  }

  const [formsState, formsAction] = useActionState(signupAction, {
    errors: null,
  })
  
  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formsAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input 
              type="text" 
              id="userName" 
              name="userName" 
              defaultValue={formsState.enteredValues?.userName}
              />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input 
              type="text" 
              id="title" 
              name="title" 
              defaultValue={formsState.enteredValues?.title}
              />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5} defaultValue={formsState.enteredValues?.yourOpinion}></textarea>
        </p>
        
        {formsState.errors && 
          <ul>
            {formsState.errors.map((error) => {
              return(
                <li key={error}>{error}</li>
            )
            }
            )}
          </ul>}

        <p className="actions">
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}
