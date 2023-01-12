import { useState , useEffect} from "react";
import getFetch from "../Data/Data";

//import { Link } from 'react-router-dom';



export const  ItemDetail =({item})=>{

     /*   const [data, setData] = useState({});
        const [loanding , setLoanding] = useState(true);
   
      
        useEffect(()=>{
             getFetch.then(response =>{
                setData(response.find(productos => productos.id === 2))
                setLoanding(false)
              
            }
        )
        },[])
    
       console.log(data)*/
        
    
     return(
       <h2>Detalle</h2>,
        <div>
        {
            
           // loanding ? <p>Cargando...</p>
           // :

        
        <div>
        <img src={item.img}/>
        <h2>{item.price}</h2>
        <h3>{item.descripcion}</h3>
        
        </div>
        

        }</div>
    )}