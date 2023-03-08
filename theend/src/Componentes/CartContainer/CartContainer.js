import React, {  useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "../CartItem/CartItem";


export const CartContainer =()=>{
    const {productCartList, clearAll , precioTotal} = useContext(CartContext)//agregamos el contexto no el proveedor.
    //console.log('productCartList', productCartList)

   /*function finalizarCompra(carreto){
        const wsp =  window.open("https://api.whatsapp.com/send?phone=0123456789")
        let productosParaWsp = [];
        for (let i = 0; i , carreto.length; i++) {
            productosParaWsp.push(carreto[i].Nombre);
        }
        return(
            <a href={wsp} target="_blanck"/>
        )
        //console.log(JSON.stringify(productosParaWsp));
         //window.location.href = 'https://api.whatsapp.com/send?phone=333333333&text=Me%20interesan%20los%20siguientes%20productos' + ' ' + JSON.stringify(productosParaWsp) // Comento esta línea para no redirigir realmente en este ejemplo
      }
      
      finalizarCompra();
*/
    return(

        <div className="CartCon">
            <p>CartContainer</p>
        <div>
        
         {
           productCartList.length>0 ?
            <>
            {
                
                productCartList.map(item=>(

                <CartItem key={item.id} item={item} />

                
         
                )) 
         
                 }
                 <hr/>
                                   <p onClick={precioTotal}>$</p>                                
                                  <button onClick={clearAll}>vaciar carrito</button>
                    </>
                    :
                    <p>No hay productos.</p>
                    
                }
                </div>
            </div>
           
            
        
            
    )
}
                
          