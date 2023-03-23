//import { Link } from 'react-router-dom';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css';
import { ItemDetailContainer } from './Componentes/ItemDetailContainer/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './Componentes/ItemListContainer/ItemListContainer';
import { Login } from './Componentes/NavBar/NavBar';
import {Steelframe} from './Componentes/SteelFrame/Steelframe';
import {PaginaEventos} from './Componentes/PaginaEventos/PaginaEventos';
import { CartContainer } from './Componentes/CartContainer/CartContainer';
import { CartProvider } from './context/CartContext';
//import {NavBar}  from './Componentes/NavBar/NavBar';
import {Footer} from './Componentes/Footer/Footer';
import Galeria from './Componentes/Galeria/Galeria';
import { PaginaFirebase } from './Componentes/PaginaFirebase/PaginaFirebase';

 



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

            <Route path="/" element={<Galeria />}/>
            <Route path="/productos" element={<ItemListContainer />}/>
            <Route path='/productos/:tipoProducto' element={<ItemListContainer/>}/>
            <Route path='/steelframe' element={<Steelframe/>}/>
            <Route path='/item/:productoId' element={<ItemDetailContainer/>}/>
            <Route path='/Eventos' element={<PaginaEventos/>}/>
            <Route path='/Cart' element={<CartContainer/>}/>
            <Route path='/ventana' element={<Login/>}/>
            <Route path='/firebase' element={<PaginaFirebase/>}/>
            
             
            </Routes> 

          
    
        <Footer/>
      

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