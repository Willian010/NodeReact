import { CartWidget } from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";
import { Slider } from "../slider/slider";
import { WhatsApp } from "../WSP/WhatsApp";
 
export function Login() {
  


  //Enviar formulario
//enviar formulario
 /////const enviarformulario = (event) =>{
    /////event.preventDefault()
    /////console.log("Formulario")
    /////alert ("Estamos ready")
/////}

  //Captura de info del input

/////const change = (event) => {
    /////console.log("event", event)
    /////console.log(event.target.value)
/////} 
    return (
      <nav className="navi">
      <div className="Nav-nav">
              
      <header>
      
      
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
                 to="/steelframe">Steel Framing</NavLink>
                 
                
        


         
                 
                 
  
     
        <div className="CartNav">
            
            <CartWidget />

                    
        </div>
        <div >
        </div> 
      </div>
    
        
      <WhatsApp/>
  
        </header>
        </div>
        
        
        </nav>
    );

  }
 
 /*  <div className="form">
        
        <form className="d-flex" onSubmit={enviarformulario}>
          <input onChange={change} className="formulario-imput"  placeholder="Producto" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit"  >Buscar Producto</button>
        </form> 
        
      
        </div>  
        
        
           <div>  
       <Slider/>
       </div>
        
        
        
        */