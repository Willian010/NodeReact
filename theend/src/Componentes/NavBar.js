import { CartWidget } from "./CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

 export function Login() {
    return (
      <div className="App">
        
    <header>
      <nav>
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/productos">Inicio</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/productos/Masillas">Masillas</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/productos/Perfiles">Perfiles</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/productos/Placas">Placas</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/nosotros">Nosotros</NavLink>
          
        
       
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit" >Buscar Cliente</button>
          
        </form>
    
        <div>
            
            <CartWidget/>
                    
        </div>
        <ul>
  <li><Link to="/productos/Masillas">Masillas</Link>
   </li>
   <li><Link to="/productos/Perfiles">Perfiles</Link>
   </li>
   <li><Link to="/productos/Placas">Placas</Link>
   </li>
  </ul>
        
        <div >
        </div> 
      </div>
    
  </nav>
        </header>
        </div>
      
      
    );

  }
 
 