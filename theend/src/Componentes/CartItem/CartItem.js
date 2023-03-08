import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "../CartItem/CartItem.css";

export const CartItem = ({item}) =>{
const { deleteProduct} = useContext(CartContext);

return( 
    <div>
        <div className="cardImg">
         <img src={item.img} alt="Foto" className="imgCard"/> 
        </div>
         <p>{item.name}</p>
         <p>Precio unitario: ${item.price}</p>
         <p>Cantidad: {item.quantity}</p>
         <p>Precio total: ${item.totalPrice}</p>
         <button onClick={()=>deleteProduct(item.id)} >Eliminar este producto</button>
         
   
    </div>
    
)
}