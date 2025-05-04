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

  const [firstname, setFirstname] = useState('John doe')

  const handleChange = (e) => {
    setFirstname(e.target.value)
  }

  const reset = () => {
    setFirstname('')
  }

  return <form>
    <input onChange={handleChange} type="text" name="firstname" value={firstname}/>
    {firstname}
    <button onClick={reset} type="button">Reset</button>
  </form>
}

export default App;
