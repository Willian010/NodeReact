import placas from '../assets/placas.jpg';
import masilla32 from '../assets/masilla32.jpg';
import solera from '../assets/solera.jpg';
import montante from '../assets/montante.jpg';
 
 
 export const arregloItems = [
    
    
    {
        id:1,
        name : "Placa 9.5mm",
        img:[placas],
        price: ["$", 2200],
        categoria: "Placas",
        descripcion: "Placas de yeso de 9.5mm"
        
    },
    {
        id:2,
        name : "Placa 12.5mm",
        img:[placas],
        price : ["$", 2300],
        categoria : "Placas",
        descripcion: "Placa de yeso de 12.5mm"
    },
    {
        id:3,
        name : "Solera 0.35mm",
        img:[solera],
        price : ["$", 789],
        categoria : "Perfiles",
        descripcion: "Perfil de 0.35mm"
    }, {
        id:4,
        name : "Mont 0.35mm",
        img:[montante],
        price : ["$", 880],
        categoria : "Perfiles",
        descripcion: "Perfil de 0.35mm"
    },  {
        id:5,
        name : "Masilla 18k",
        img:[masilla32],
        price : ["$", 3500],
        categoria : "Masillas",
        descripcion: "Masilla de 18k"
    }, { 
        id:6,
        name : "Masilla 32kg",
        img:[masilla32],
        price : ["$",6600] ,
        categoria : "Masillas",
        descripcion: "Masilla 32k"
        
    },
]

const getFetch = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(arregloItems)
        reject(err => console.log(err))
    }, 3000);

})
export default getFetch;