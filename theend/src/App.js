
import './App.css';
import {Login} from './Componentes/NavBar';
import {Contador} from './Contador/Contador';

function App() {
  const agregar = (productos) => {
    console.log("funcion agregar" , productos)
  }
  return (
    <div className="App">
      <Login/>
      <Contador stock={10} agregarProducto={agregar} />


    </div>
  );
}

export default App;
