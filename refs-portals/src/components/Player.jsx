import { useState, useRef } from "react";

export default function Player() {
  const enterName = useRef();
  const [name, setName] = useState(null);
 

  function handleClick(){
    setName(enterName.current.value)
    enterName.current.value = ''
  }


  return (
    <section id="player">
      <h2>Welcome { name ?? 'unknown entity'}</h2>
      <p>
        <input type="text" ref={enterName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
