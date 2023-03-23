import React, { useEffect } from "react";
import {db} from '../../utils/firebase'; 
import {collection, getDocs} from 'firebase/firestore';

export const PaginaFirebase = () => { 

    useEffect(()=>{
        const getData = async() => {
            //crear consulta o referencia a la base de datos
            const query = collection(db,"Items");
            const response = await getDocs(query);
            const docs  = response.docs;
           // console.log("doc inf" , docs[0].data());
           // console.log("doc id" , docs[0].id);
           const data = docs.map(doc=>{return{...doc.data(), id: doc.id}})
           console.log("data", data)

        }
        getData()
    },[])



    return(
        <div>Firebase</div>
    )
} 