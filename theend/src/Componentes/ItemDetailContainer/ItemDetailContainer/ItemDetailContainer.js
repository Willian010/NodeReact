import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { arregloItems } from '../../Data/Data';
import { ItemDetail } from '../../ItemDetail/ItemDetail';


export const ItemDetailContainer = () => {

  const {productoId} = useParams ();
  //console.log("productoUnico", typeof  productoId);


  const [item, setItem] = useState({});

  const getItem = (id) => {
    return new Promise((resolve, reject) => {
   
      const product = arregloItems.find(item=>item.id === item.name);
      //const pro = arregloItems.find((item)=>item.unico === unico  );
      
      resolve(product);
      
    })
  }
   useEffect(()=>{
    const getProducto = async()=>{
      const producto = await getItem(productoId);
      //console.log("product",product)
      setItem(producto)
     
    }
    getProducto();
   },[productoId])
   
     console.log("item", item);
    return(

      
      
      <div>
          <h1>ItemDetail </h1>
          <ItemDetail item={item}/>
          
      </div>
      
     )
  } 
