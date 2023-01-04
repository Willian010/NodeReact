//import { Link } from 'react-router-dom';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css';
import { ItemDetailContainer } from './Componentes/ItemDetailContainer/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './Componentes/ItemListContainer/ItemListContainer';
import {Login} from './Componentes/NavBar';
import {Empleados} from './Componentes/Empleados/Empleados';


function App() {
  const agregar = (productos) => {
    console.log("funcion agregar" , productos)
  }
  return (
    <BrowserRouter>
      <div className="App">
            <Login/>
      
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/productos/:tipoProducto' element={<ItemListContainer/>}/>
            <Route path='/empleados' element={<Empleados/>}/>
            <Route path='/' element={<ItemListContainer/>}/>
            
            
            <Route path='/item' element={ <ItemDetailContainer/>}/>
        
          
            </Routes> 

      </div>
      </BrowserRouter>
  );
}

export default App;
