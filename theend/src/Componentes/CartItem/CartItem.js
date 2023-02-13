import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartItem = ({item}) =>{
const { deleteProduct} = useContext(CartContext);

return(
    <div>
        <div>
         <img src={item.img} alt="" className='cardImg'/>
         </div>
         <p>{item.name}</p>
         <p>{item.price}</p>
         <p>{item.quantity}</p>
         <button onClick={()=>deleteProduct(item.id)} >Eliminar este producto</button>
   
    </div>
    
)
}