//import { Link } from 'react-router-dom';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css';
import { ItemDetailContainer } from './Componentes/ItemDetailContainer/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './Componentes/ItemListContainer/ItemListContainer';
import { Login } from './Componentes/NavBar/NavBar';
import {Empleados} from './Componentes/Empleados/Empleados';
import {PaginaEventos} from './Componentes/PaginaEventos/PaginaEventos';
import { CartContainer } from './Componentes/CartContainer/CartContainer';
import { CartProvider } from './context/CartContext';
 



function App(){
return (
// ya no pasamos el .Provider porque dentro del componente cartprovider ya retorna el provedor y
// los valores, todo lo encerrado se pasa como una propiedad children que recibimos en
//children de CartProvider en cartcontext
  <CartProvider>
    <BrowserRouter>,
      <div className="App">
           <Login/>

      
          <Routes>

            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/productos" element={<ItemListContainer />}/>
            <Route path='/productos/:tipoProducto' element={<ItemListContainer/>}/>
            <Route path='/Empleados' element={<Empleados/>}/>
            <Route path='/item/:productoId' element={<ItemDetailContainer/>}/>
            <Route path='/Eventos' element={<PaginaEventos/>}/>
            <Route path='/Cart' element={<CartContainer/>}/>
            
            </Routes> 

      </div>
      </BrowserRouter>
      </CartProvider>
  );

  }
export default App;
/*function App() {
  const agregar = (productos) => {
    console.log("funcion agregar" , productos)
  }*/