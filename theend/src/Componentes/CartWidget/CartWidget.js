import { Link } from "react-router-dom";
import "../CartContainer/CartContainer.css" ;


 
export  const CartWidget =()=>{
    
    return(

     
     <div className="logo-carro">
         <Link  to="/cart" className="Cart-face"  >
           <button className="img-logo"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg></button>
            </Link>  
            
        </div>
        
    )
}
//https://cdn-icons-png.flaticon.com/512/2172/2172518.png

//<a href="#" ><img className="img-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgVU8muoMvcc_WYZBCScM6d0uE3e64danIg&usqp=CAU"/></a>