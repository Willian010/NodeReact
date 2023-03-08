import { useHref } from "react-router-dom";
import { Link } from "react-router-dom";
import wsp from "../WSP/LOGOW.png";
import "./WhatsApp.css";

export function WhatsApp () {
    const whatsapp = () => {
         window.open('https://api.whatsapp.com/send?phone=0123456789', '_blank');
        };
        //Retorna una funcion de abrir otra ventana redirigiendote al whatsapp.
    return(
        <Link to="/ventana">
            <div onClick={whatsapp}><img className="wsp" src={wsp} alt="wsp"></img></div>

        </Link> 
    )
        
 
    
}
//const handleClick = () => {
  //  window.open('https://www.ejemplo.com', '_blank');
  //};
  //<button onClick={handleClick}>Ir a Ejemplo</button>

 
  //<a href="https://api.whatsapp.com/send?phone=0123456789" target="_blank" rel="noopener noreferrer"><img className="wsp" src={wsp} alt="wsp"></img></a>
