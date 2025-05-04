// const title = "Bonjour les gens";
// const style = {color: 'white', backgroundColor: 'black'};

// const showTitle = false;
// const todos = [
//   'Présenter react',
//   'Présenter le JSX', 
//   'Créer des composants'
// ];

function App() {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(new FormData(e.target));
  }

  return <form onSubmit={handleSubmit}>
    <input  type="text" name="firstname" />
    <button>Envoyer</button>
  </form>
}

export default App;
