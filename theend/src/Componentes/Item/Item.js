    import { useState  } from "react";
    import { Contador } from "../../Contador/Contador";
    import './Item.css';
   
   //import { arregloItems } from "../Data/Data";
   //import { Contador } from "../../Contador/Contador";

export const Item =  ({productos})=> {
    //const {name , src , descripcion, categoria}= producto;
    const [likes, setLikes] = useState(0);

   const incrementar = ()=>{
        setLikes(likes + 1);
  }
    const agregar = (productos) => {
        console.log("funcion agregar" , productos)}
//la key se coloca para que no haya key repetidas.=>
    return (
        <div className='card' key={productos.name}> 
            
            <img src={productos.img} alt="" className='cardImg'/>
            <p className="Pe">{productos.name}</p>
            <p>{productos.price}</p>
            <h1 className="hacheuno">{productos.descripcion}</h1>
            <p>Comprar {likes}</p>
            <Contador stock={10} agregarProducto={agregar}/>
        </div>
    ) 
}
//<button  className="click-prod" onClick={incrementar}>+</button>

 