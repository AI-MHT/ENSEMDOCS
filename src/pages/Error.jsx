import React from "react";
import '../assets/css/bootstrap.min.css';
import '../assets/css/header.css';
import '../assets/css/error.css';
import '../assets/css/footer.css';
// import '../assets/css/stylec.css';


import Header from "../components/Header"
import Error404 from "../components/Error404"


const Error=()=>{
    return(
      <div className="main-layout">
         <header>
            <div className="header">
               <div className="white_bg">
               <Header/>
               <Error404/>
               </div>
            </div>
         </header>
     </div>
    )
}
export default Error;