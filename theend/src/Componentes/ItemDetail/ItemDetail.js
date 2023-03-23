/*import { Contador } from "../Contador/Contador"
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
//import { UserContext } from "../../context/UserContext";
import { CartContext } from "../../context/CartContext";
import { getFetch } from "../Data/Data";
import { Link } from "react-router-dom";


//import { Link } from 'react-router-dom';

////////////////////VER itemdetal porque no reenderiza"""""""""""""""""

export const  ItemDetail =({item})=>{
 const {addProduct}= useContext(CartContext);
 const [quantity, setQuantity]= useState(0);
 

   const onAdd = (contador)=>{
      //VERRR   addProduct(item,contador);
     // VERRR setQuantity(contador);
      
      console.log("onAdd", contador)

      //creamos una lista adicional para la cantidad de prod que agregamos (contador).
      const newProduct = {...item, quantity:contador}
      console.log("newProduct", newProduct);
      addProduct(newProduct ) ;
   }
   const [data, setData] = useState({});
        const [loanding , setLoanding] = useState(true);
   
      
        useEffect(()=>{
             getFetch.then(response =>{
                setData(response.find(productos => productos.id === []))
                setLoanding(false)
              
            }
        )
        },[])
    
       console.log(data)
   //
   
    
     return(    
      <>
      <div>
        
       <h2 >Detalle  </h2>
      
       <div className='card'/*key={item.id} /> 
         
       //<img src={item.img} alt="" className='cardImg'/>
       //     <p className="Pe">{item.name}</p>
        //    <p>{item.price}</p>
        //    <h1>{item.descripcion}</h1>
            
        //   <Contador onAdd={onAdd} stock={10} initial={0} /> 
          
                
            
       // </div>
        
      // </>
     //)}
     
//-------------------------------
           const [data, setData] = useState({});
        const [loanding , setLoanding] = useState(true);
   
      
        useEffect(()=>{
             getFetch.then(response =>{
                setData(response.find(productos => productos.id === []))
                setLoanding(false)
              
            }
        )
        },[])
    
       console.log(data)*/
      import { Contador } from "../Contador/Contador"
      import { useContext, useState, useEffect } from "react";
      import { ThemeContext } from "../../context/ThemeContext";
      //import { UserContext } from "../../context/UserContext";
      import { CartContext } from "../../context/CartContext";
      import { getFetch } from "../Data/Data";
      import { Link } from "react-router-dom";
      import "../ItemDetail/ItemDetail.css"; 
       
       export const ItemDetail = ({item})=>{
           const {addProduct} = useContext(CartContext);
           const [quantity, setQuantity] = useState(0);
       
           const onAdd = (contador)=>{
               addProduct(item,contador);
               setQuantity(contador);
           }
        
           return(
               <div className='detail-container'>
                   <p style={{width: "100%"}}>item detail</p>
                   <div className='img-container'>
                       <img src={item.img} alt={item.name}/>
                   </div>
                   <div className='img-container'>
                       <h4>{item.title}</h4>
                       <h5> ${item.price}</h5>
                   </div>
                   <Contador initial={1} stock={10} onAdd={onAdd}/>
                   {
                       quantity>0 &&
                       <Link to="/cart">
                           <button>Ir al carrito</button>
                       </Link>
                   } 
               </div>
           )
       }
       