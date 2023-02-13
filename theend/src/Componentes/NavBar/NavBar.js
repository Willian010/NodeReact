import { CartWidget } from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";
import { Slider } from "../slider/slider";


 export function Login() {

//Enviar formulario
  
  const enviarformulario = (event) =>{
    event.preventDefault()
    console.log("Formulario")
    alert ("Estamos ready")
}

  //Captura de info del input

  const change = (event) => {
    console.log("event", event)
    console.log(event.target.value)
} 
    return (
      <nav>
      <div className="Nav">
              
      <header>
      <nav>
    <div className="container-fluid">
     
      
      <NavLink className="class-menu"
                 to="/">Inicio</NavLink>
                 <NavLink className="class-menu"
                 to="/productos">Productos</NavLink>
                <NavLink className="class-menu"
                 to="/productos/Masillas">Masillas</NavLink>
                <NavLink className="class-menu"
                 to="/productos/Perfiles">Perfiles</NavLink>
                <NavLink className="class-menu"
                 to="/productos/Placas">Placas</NavLink>
                <NavLink className="class-menu"
                 to="/Empleados">Empleados</NavLink>
                 <NavLink className="class-menu"
                 to="/Eventos">Eventos</NavLink>
                 
     
        
        
        <form className="d-flex" onSubmit={enviarformulario}>
          <input onChange={change} className="form-control me-2"  placeholder="Nombre" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit" >Buscar Producto</button>
          
          
        </form> 


        <div>
            
            <CartWidget/>

                    
        </div>
       <div>
       <Slider/>
       </div>

        
        <div >
        </div> 
      </div>
      
    
  </nav>
        </header>
        </div>
      
        </nav>
    );

  }
 
 