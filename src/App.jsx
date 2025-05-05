import { useState } from 'react';
import { Input } from "./components/forms/Input.jsx"
import { Checkbox } from "./components/forms/Checkbox.jsx"

function App() {

  const [showInput, setShowInput] = useState(true)

  return <div className='m-3'>
  <Checkbox
    checked={showInput}
    onChange={setShowInput}
    id="titleshow"
    label="Afficher le champ titre"
  />
  {showInput && <EditTitle/>}
  <div style={{height: '300vh'}}></div>
</div>
}

function EditTitle() {
  const [title, setTitle] = useState('')
  const [firstname, setFirstname] = useState('')

  return <div className='vstack gap-2'>
    <Input
      placeHolder="Modifier le titre"
      value={title}
      onChange={setTitle}
    />
    <Input
      placeHolder="Prénom"
      value={firstname
      }
      onChange={setFirstname}
    />
  </div>

}
export default App;
