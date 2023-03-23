import { createContext, useState } from "react";
import { arregloItems } from "../Componentes/Data/Data";
//import { arregloItems } from "../Componentes/Data/Data";




export const CartContext = createContext();//Contexto

//Componente  CartProvider con variable  prodlist 
 export const CartProvider = ({children}) =>{ //CartProvedier( proveedor)
    //const productCartList = arregloItems;
    const [productCartList, setProductCartList] = useState([]); 
    
    const isInCart = (id)=>{
        const elementExists = productCartList.some((elemento)=>elemento.id === id);
        return elementExists;
    }
    
   
    const addProduct = (product, qty)=>{   
        const newLista = [...productCartList];
        //Creamos una nueva lista usando el  spread operator.[...]para modificar el stado.
        
        //para agregar un producto que ya exista:verifico si el arreglo ya existe
        
        //si existe actualice la propiedad  quantity de ese prod
         if (isInCart(product.id)){
            
            //. findex estamos buscando el producto dentro del arreglo que cumpla esta condicion
            const productIndex = productCartList.findIndex(element=>element.id===product.id);
            //findIndex retorna la pocision donde se encuentra ese element
            //reutilizamos el mismo indx p/ actualizar la var qty dentro del emlement
            newLista[productIndex].quantity = newLista[productIndex].quantity + qty;
            newLista[productIndex].totalPrice = newLista[productIndex].quantity * newLista[productIndex].price;

            //console.log(newLista[productIndex]);
   
            setProductCartList(newLista)
        }else{
            
             //si no existe, agregue el producto al listado
            const newProduct = {...product, quantity:qty, totalPrice: qty*product.price}

            const newLista = [...productCartList];
            newLista.push(newProduct);   
            //console.log("newProduct", newProduct);
            setProductCartList(newLista) ;
            
        } 
        // si no existe agregue al listado 
        //const newList = [...productCartList, product];
       // setProductCartList(newLista)
        
    }  
        


    const deleteProduct  = (idProduct) => {
            const copyArray = [...productCartList];
            //.filter creamos nuevo array con todos los elementos que cumplan la condición implementada por la función dada
            const newArray = copyArray.filter(elm =>elm.id  !== idProduct);
            setProductCartList(newArray);
            
       }
    const clearAll = () => {
        setProductCartList([]);

    } 
 
    
        const getTotalProductos = ()=>{
            // .reduce reducir el array insertado a un solo valor.
            const totalProductos = productCartList.reduce((acc,item)=>acc + item.quantity,0);
           // console.log("getTotalProductos", getTotalProductos)
            return totalProductos;
        }
       
       /* const precioTotal  = () => {
                const finDelprecio = [...productCartList];
                const totalproducto = [...getTotalProductos]
                
                const selectedProducts = totalproducto.filter((fin) => fin.price);
                
                const totalPrice = selectedProducts.reduce((accumulator, fin) => accumulator + fin.price, 0);

                console.log(selectedProducts)*/

          ////  console.log(totalPrice);
           /* const finDeprecio = [...productCartList];
            const priceFinal = productCartList.reduce((totalPrecio, item)=>totalPrecio + item.price);

             finDeprecio[priceFinal].totalPrice = finDeprecio[priceFinal].totalPrice + item.price;


            console.log(finDeprecio);
        }*/


       /* function finalizarCompra(){
            const productosParaWsp = [...arregloItems];
           
            for (let i = 0; i < productosParaWsp.length; i++) {
                productosParaWsp.push(productosParaWsp[i].name);
            }
           console.log(JSON.stringify(productosParaWsp));
             window.open= ('https://api.whatsapp.com/send?phone=+541123257197&text=Me%20interesan%20los%20siguientes%20productos' + ' ' + JSON.stringify(productosParaWsp)) // Comento esta línea para no redirigir realmente en este ejemplo
        */function finalizarCompra() {
  const productosParaWsp = [];
  
  for (let i = 0; i < productosParaWsp.length; i++) {
    productosParaWsp.push(productosParaWsp[i].arregloItems);
  }
  
  console.log(JSON.stringify(productosParaWsp));
  
  const whatsappURL = 'https://api.whatsapp.com/send?phone=+541123257197&text=Me%20interesan%20los%20siguientes%20productos' + ' ' + JSON.stringify(productosParaWsp);
  
  const whatsappWindow = window.open(whatsappURL, '_blank');
  
  if (whatsappWindow) {
    // La ventana se abrió correctamente
    // Puedes agregar aquí cualquier otra lógica que necesites
  } else {
    // La ventana no se abrió correctamente, muestra un mensaje de error
    console.error('No se pudo abrir la ventana de WhatsApp');
  }
}

          //console.log(finalizarCompra)
          ////

          //window.open('https://api.whatsapp.com/send?phone=0123456789', '_blank') + ' ' + JSON.stringify(productosParaWsp);
          //finalizarCompra();
        
    
     return(                          
        
        <CartContext.Provider value= {{productCartList, addProduct, deleteProduct, clearAll,
         isInCart, getTotalProductos, finalizarCompra}}>
    
            
            {children}
        </CartContext.Provider>

    )
        }