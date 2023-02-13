import { createContext, useState } from "react";
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
            const productIndex = productCartList.findIndex(element=>element.id===product.id);
            //findIndex retorna la pocision donde se encuentra ese element
            //reutilizamos el mismo indx p/ actualizar la var qty dentro del emlement
            newLista[productIndex].quantity = newLista[productIndex].quantity + qty;
            ////console.log(newLista[productIndex]);
   
            setProductCartList(newLista)
        }else{
            
            const newProduct = {...product, quantity:qty}

            const newLista = [...productCartList];
            newLista.push(newProduct)
            //console.log("newProduct", newProduct);
            setProductCartList(newLista) ;
            
        } 
        // si no existe agregue al listado 
        //const newList = [...productCartList, product];
       // setProductCartList(newLista)
        
    }  
        


    const deleteProduct  = (idProduct) => {
            const copyArray = [...productCartList];
            const newArray = copyArray.filter(elm =>elm.id  !== idProduct);
            setProductCartList(newArray);
            
       }
    const clearAll = () => {
        setProductCartList([]);

    } 
 
    
       
    
     return(                         
        
        <CartContext.Provider value= {{productCartList, addProduct, deleteProduct, clearAll, isInCart}}>
    
            
            {children}
        </CartContext.Provider>

    )
     }