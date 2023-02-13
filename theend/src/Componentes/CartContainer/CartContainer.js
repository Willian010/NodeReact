import React, {  useContext } from "react";
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
            productCartList.lengh>0 ?
            <>
            {
                 productCartList.map(item=>(
                <CartItem key={item.id} item={item}/>
            
         
                ))
         
                 }
                <hr/>
                <button onClick={clearAll}  >vaciar carrito</button>
                    </>
                    :
                    <p>No has agregado ningun producto</p>
                    }
                </div>
            </div>
           
            
        
            
    )
}
                
          