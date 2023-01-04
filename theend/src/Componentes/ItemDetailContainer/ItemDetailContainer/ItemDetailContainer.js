import React, { useEffect, useState } from 'react';
import { arregloItems } from '../../Data/Data';
import { ItemDetail } from '../../ItemDetail/ItemDetail';


export const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  const getItem = () => {
    return new Promise((resolve, reject) => {
      resolve(arregloItems[0])
    })
  }
   useEffect(()=>{
    const getProducto = async()=>{
      const producto = await getItem();
      console.log("producto",producto)
      setItem(producto)
    }
    getProducto();
   },[])
   
   console.log("item", item)
    return(

      <>
      
      <div>
          <h1>ItemDetail </h1>
          <ItemDetail item={item}/>
          
      </div>
      </>
    )
  }