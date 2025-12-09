import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js'

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password:'',
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  })

  const emailIsInvalid = 
    didEdit.email !== '' && 
    !isEmail(enteredValues.email) && 
    !isNotEmpty(enteredValues.email)
    
  const passwordIsInvalid = 
    didEdit.password && 
    !hasMinLength(enteredValues.password, 6);

  function handleSubmit(event) {
    event.preventDefault();

    if(emailIsInvalid){
      return;
    }
    
    console.log(enteredValues)
  }

  function handleEnteredValues(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value
    }));
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: false
    }))
  }
  
  function handleInputBlur(identifier){
    setDidEdit((prevValue) => ({
      ...prevValue,
      [identifier]: true
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        
        <Input 
          id='email'
          label="Email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur('email')}
          onChange={(event) => handleEnteredValues('email', event.target.value)}
          value={enteredValues.email}
          error={emailIsInvalid && 'Please enter a valid email'}
        />

        <Input 
          id='password'
          label='Password'
          type="password"
          name="password"
          onChange={(event) => handleEnteredValues('password', event.target.value)}
          onBlur={() => handleInputBlur('password')}
          value={enteredValues.password}
          error={passwordIsInvalid && 'Please enter a valid password'}
        />

      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
