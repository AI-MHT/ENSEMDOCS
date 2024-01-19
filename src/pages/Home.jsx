import React from "react";
import '../assets/css/bootstrap.min.css';
import '../assets/css/header.css';
import '../assets/css/style.css';
import '../assets/css/stylec.css';
import '../assets/css/footer.css';
import '../assets/css/testimonial.css';



// import {Link} from "react-router-dom"
import Header from "../components/Header"
import Event from "../components/Event"
import StudentFeed from "../components/StudentFeed";
import Abouthome from "../components/Abouthome";

//import images
import ban_img from "../assets/images/ban_img.jpg"
import aboutus from "../assets/images/about.png"
import joe2024 from "../assets/images/joe2024.jpg"
const Home=()=>{
    return(
      <div className="main-layout">

         <header>
           <div className="header">
              <div className="white_bg">
              <Header/>
              <section className="banner_main">
                  <div id="banner1" className="carousel slide" data-ride="carousel">
                  
                  <div className="carousel-inner">
                     <Event
                        active={true}
                        imageUrl={joe2024}
                        altText="BAN"
                        title="ENSEMSPORT"
                        subtitle="La 23ème édition des Jeux Olympiques ENSEM 2024"
                        description="Dans le cadre de ses événements annuels, le comité ENSEM SPORT annonce fièrement la 23ème édition des Jeux Olympiques ENSEM 2024, marquant un historique prestigieux de plus de 20 ans. Finalement, cette édition internationale promet un défi passionnant, avec une conférence sous le thème “Sport et santé mentale” le 02 février. Le comité vous donne rendez-vous du 2 au 4 février 2024 à Ensem Casablanca pour célébrer les JOE23 ."
                     />
                     <Event
                        active={false}
                        imageUrl={ban_img}
                        altText="BAN"
                        title="Progress & Success"
                        subtitle="c u r r e n c y"
                        description="At ENSEM, we believe in the power of knowledge sharing and collaboration. Our website serves as a bridge between students, helping them showcase their achievements and experiences during their internships. By providing a space to share internship reports and CVs, we strive to create a supportive community where students can inspire one another, learn from each other's successes, and support their career successes, and support their career"
                     />
                  </div>
                  <a className="carousel-control-prev" href="#banner1" role="button" data-slide="prev">
                     <i className="fa fa-chevron-left" aria-hidden="true"></i>
                  </a>
                  <a className="carousel-control-next" href="#banner1" role="button" data-slide="next">
                     <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </a>
                  </div>
               </section>
              </div>
           </div>
        </header>
        <Abouthome
          imageUrl={aboutus}
          altText="ABOUT"
          title="ABOUT US"
          description="Our website is designed to connect students from ENSEM and beyond, enabling them to share their internship journey with fellow students, professionals, and potential employers. We understand the significance of internships in shaping a student's professional growth and the importance of access to valuable resources. Therefore, we have created this platform to make it easier for students to showcase their skills, projects, and accomplishments to a wider audience."
        />
  
        <div className="subscribe">
           <div className="container">
              <div className="row">
                 <div className="col-md-8 offset-md-2">
                    <div className="subscribe_main">
                    
                    </div>
                 </div>
              </div>
           </div>
        </div>
     
        
         <StudentFeed/>
             
              
        
       
     </div>
    )
}

export default Home;