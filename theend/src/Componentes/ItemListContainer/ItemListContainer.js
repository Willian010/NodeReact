
import { ItemList } from "../ItemList/ItemList";
import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { arregloItems } from "../Data/Data";
import { Slider } from "../slider/slider";
import { CarrilContainer } from "../CarrilContainer/CarrilContainer";
//import { Item } from "../Item/Item";

export const ItemListContainer = () => {
  const {tipoProducto} = useParams();
  console.log("tipoProducto" , typeof tipoProducto)

  const [Prod, setProd] = useState([]);
  console.log(Prod);
  

  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arregloItems);
      
    }, 2000); 
  })
 
  useEffect(()=>{
    promesa.then(resultado=>{
        if(!tipoProducto){
            setProd(resultado)
        } else{
            const nuevaLista = resultado.filter(item=>item.categoria === tipoProducto);
            //console.log('nuevaLista',nuevaLista)
            setProd(nuevaLista)
        }
    })
},[tipoProducto])

console.log( "Prod" , Prod);
  return(
    <>
    
    
    
  <div className="ItemListContainer">
            <p>item list container</p>
            <ItemList items={Prod}/>
            
        </div>
        <div>  
       <CarrilContainer/>
       </div>
    </>
  )
}
/*<div>
        
        <h1>Productos </h1>
        <ItemList/>
    </div>*/