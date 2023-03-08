import './CarrilContainer.css';
//import { Slider } from '../slider/slider';
;


export const CarrilContainer = () => {
    
    
        const consulta = () => {
             window.open('https://api.whatsapp.com/send?phone=0123456789', '_blank');
            };
        
    return(
        <div>
        <h2>Nuestras obras de Steel Framing</h2>,
      
            <div>


      </div>
            <button onClick={consulta} className='button-asesoramiento' >Pedi tu presupuesto </button>
            
            
        </div>
    ) 
}