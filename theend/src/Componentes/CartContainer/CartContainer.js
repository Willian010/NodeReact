import React, {  useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "../CartItem/CartItem";


export const CartContainer =()=>{
    const {productCartList, clearAll } = useContext(CartContext)//agregamos el contexto no el proveedor.
    //console.log('productCartList', productCartList)

    return(

        <div className="CartCon">
            <p>CartContainer</p>
        <div>
        
         {
           
            <>
            {
                
                 productCartList.map(item=>(

                <CartItem key={item.id} item={item}/>

                
         
                ))
         
                 }
                <hr/>
                <button onClick={clearAll}  >vaciar carrito</button>
                    </>
                    
                }
                </div>
            </div>
           
            
        
            
    )
}
                
          