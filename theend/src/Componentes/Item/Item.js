    import { useState  } from "react";
    import { Contador } from "../../Contador/Contador";
    import './Item.css';
   
   //import { arregloItems } from "../Data/Data";
   //import { Contador } from "../../Contador/Contador";

export const Item =  ({item})=> {
    //const {name , src , descripcion, categoria}= producto;
    const [likes, setLikes] = useState(0);

  const incrementar = ()=>{
       setLikes(likes + 1);
  }
    const agregar = (item) => {
        console.log("funcion agregar" , item)}
//la key se coloca para que no haya key repetidas.=>
    return (
        <div className='card'/* key={item.name}*/> 
            
            <img src={item.img} alt="" className='cardImg'/>
            <p className="Pe">{item.name}</p>
            <p>{item.price}</p>
            <h1 className="hacheuno">{item.descripcion}</h1>
            <p>Comprar {likes}</p>
            <Contador stock={10} agregarProducto={agregar}/>
        </div>
    ) 
}
//<button  className="click-prod" onClick={incrementar}>+</button>

 