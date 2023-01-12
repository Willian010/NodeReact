
import { ItemList } from "../ItemList/ItemList";
import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { arregloItems } from "../Data/Data";
import { Item } from "../Item/Item";

export const ItemListContainer = () => {
  const {tipoProducto} = useParams();

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
    
    
    
  <div>
            <p>item list container</p>
            <ItemList items={Prod}/>
        </div>
    
    </>
  )
}
/*<div>
        
        <h1>Productos </h1>
        <ItemList/>
    </div>*/