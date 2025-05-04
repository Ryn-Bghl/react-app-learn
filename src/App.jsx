// const title = "Bonjour les gens";
// const style = {color: 'white', backgroundColor: 'black'};

import { useState } from "react";

// const showTitle = false;
// const todos = [
//   'Présenter react',
//   'Présenter le JSX', 
//   'Créer des composants'
// ];

function App() {

  const [person, setPerson] = useState({
    firstName: 'John',
    lastName: 'Doe',
    age: 18
  })

  const [count, setCount] = useState(0)
  
  const incrementAge = () => {
    setPerson({...person, age: person.age + 1})
  };

  const incrementCount = () => {
    setCount(count + 1)
  }

  return <>
    <p>Age de {person.firstName}: {person.age}</p>
    <button onClick={incrementAge}>Incrémentation</button>
    <button onClick={incrementCount}>count: {count}</button>
  </>
}

export default App;
