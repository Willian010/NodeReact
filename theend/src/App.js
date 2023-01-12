//import { Link } from 'react-router-dom';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css';
import { ItemDetailContainer } from './Componentes/ItemDetailContainer/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './Componentes/ItemListContainer/ItemListContainer';
import {Login} from './Componentes/NavBar';
import {Empleados} from './Componentes/Empleados/Empleados';
import {PaginaEventos} from './Componentes/PaginaEventos/PaginaEventos';

function App(){
return (
    <BrowserRouter>
      <div className="App">
            <Login/>
      
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path="/productos" element={<ItemListContainer />}/>
            <Route path='/productos/:tipoProducto' element={<ItemListContainer/>}/>
            <Route path='/Empleados' element={<Empleados/>}/>
            <Route path='/Eventos' element={<PaginaEventos/>}/>
            
            
            
            <Route path='/item' element={ <ItemDetailContainer/>}/>
        
          
            </Routes> 

      </div>
      </BrowserRouter>
  );

  }
export default App;
/*function App() {
  const agregar = (productos) => {
    console.log("funcion agregar" , productos)
  }*/