
import { ItemList } from "../ItemList/ItemList";
import { useParams} from "react-router-dom"
import { useEffect, useState } from "react";
import { arregloItems } from "../Data/Data";
import { Item } from "../Item/Item";

export const ItemListContainer = () => {
  const {tipoProducto} = useParams();
  const [productos, setProductos] = useState([]);
  

  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arregloItems);
      
    }, 2000);
  })

  useEffect(()=>{
    promesa.then(resultado=>{
        if(!tipoProducto){
            setProductos(resultado)
        } else{
            const nuevaLista = resultado.filter(productos=>productos.categoria === tipoProducto);
            // console.log('nuevaLista',nuevaLista)
            setProductos(nuevaLista)
        }
    })
},[tipoProducto])

  return(
    <>
    
    
    
  <div>
            <p>item list container</p>
            <ItemList items={productos}/>
        </div>
    
    </>
  )
}
/*<div>
        
        <h1>Productos </h1>
        <ItemList/>
    </div>*/