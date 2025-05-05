import { useEffect, useState } from 'react';
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
  const [y, setY] = useState(0);

  useEffect(() => {
    document.title = title 
  }, [title])

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      setY(window.scrollY)
    });
  }, [])

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
    <div>
      Scroll : {y}
    </div>
  </div>

}
export default App;
