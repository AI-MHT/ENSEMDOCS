import Header from "../components/Header"
import Contact from "../components/Contact";


const ContactUs=()=>{
    return(
      <div className="main-layout">
         <header>
            <div className="header">
               <div className="white_bg">
               <Header/>
               <Contact/>
               </div>
            </div>
         </header>
     </div>
    )
}

export default ContactUs;