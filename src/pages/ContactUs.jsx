import Header from "../components/Header"
import Contact from "../components/Contact";
import Infocall from "../components/Infocall";

import '../assets/css/infocall.css';



const ContactUs=()=>{
    return(
      <div className="main-layout">
         <header>
            <div className="header">
               <div className="white_bg">
               <Header/>
               <Contact/>
               <Infocall/>
               </div>
            </div>
         </header>
     </div>
    )
}

export default ContactUs;