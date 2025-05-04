const title = "Bonjour les gens";
const style = {color: 'white', backgroundColor: 'black'};
const showTitle = false;
const todos = [
  'Présenter react',
  'Présenter le JSX', 
  'Créer des composants'
];

function App() {
/*   const handleClick = () => {
    alert("J'ai cliquer sur le titre !!!")
  } */

  return <>
    {showTitle && <h1 /* onClick={handleClick} */ id="title" className="title" style={style}>{title}</h1>}
    <input type="text" />
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, ad possimus assumenda animi repudiandae velit aspernatur sint, dolores ab quisquam accusamus voluptate molestiae nesciunt beatae natus cum. Veritatis, qui ab.
    </p>
    <ul>
      {todos.map(todo => {
        return <li key={todo}>{todo}</li>
      })}
    </ul>
  </>
}

export default App;
