import React from "react";
import {Link} from "react-router-dom"
import Header from "../components/Header"
import Event from "../components/Event"


const Home=()=>{
    return(
      <div className="main-layout">

         <header>
           <div className="header">
              <div className="white_bg">
              <Header/>
              <Event/>
              </div>
           </div>
        </header>
        <div className="about">
           <div className="container">
              <div className="row d_flex">
                 <div className="col-md-12 col-lg-5">
                    <div className="about_img">
                       <figure><img src="assets/images/about.png" alt="ABOUT"/></figure>
                    </div>
                 </div>
                 <div className="col-md-12 col-lg-7">
                    <div className="titlepage">
                       <h2> <span className="yellow">ABOUT US</span><br/>Welcome TO ENSEMDOCS</h2>
                       <p>Our website is designed to connect students from ENSEM and beyond, enabling them to share their internship journey with fellow students, professionals, and potential employers. We understand the significance of internships in shaping a student's professional growth and the importance of access to valuable resources. Therefore, we have created this platform to make it easier for students to showcase their skills, projects, and accomplishments to a wider audience. </p>
                       <Link className="read_more" to="#">Read More</Link>
                    </div>
                 </div>
              </div>
           </div>
        </div>
  
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
     
        <div  className="testimonial">
           <div className="container">
              <div className="row">
                 <div className="col-md-12 ">
                    <div className="titlepage">
                       <h2> Student Feedback </h2>
                    </div>
                 </div>
              </div>
           </div>
           <div id="testimoni" className="carousel slide testimonial_Carousel " data-ride="carousel">
              <ol className="carousel-indicators">
                 <li data-target="#testimoni" data-slide-to="0" className="active"></li>
                 <li data-target="#testimoni" data-slide-to="1"></li>
              </ol>
              <div className="carousel-inner">
                 <div className="carousel-item active">
                    <div className="container">
                       <div className="carousel-caption ">
                          <div className="row">
                             <div className="col-md-10 offset-md-1">
                                <div className="test_box">
                                   <i><img src="assets/images/test.png"  alt="STD-IMG"/></i>
                                   <h3>name of student</h3><br/>
                                   <p>comment. comment cvkjdnve
                                    fvjeiuf
                                    ciwfhw wejrewuff
                                    ewfbuweof 
                                    pijdo2d
                                    ommentcommentcomment comment comment </p>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="carousel-item">
                    <div className="container">
                       <div className="carousel-caption">
                          <div className="row">
                             <div className="col-md-10 offset-md-1">
                                <div className="test_box">
                                   <i><img src="assets/images/test.png"  alt="STD-IMG"/></i>
                                   <h3>name of student</h3>
                                   <p>FeedbackFeedbackF 
                                    regedbackFeedbackF  eedbackFeedbac kFeedbac kFeedb ackFee dbackFee dbackFeedb ackFeedb ackFeedba ckFeedb ackFeedba ckFeed backFeedback  </p>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <Link className="carousel-control-prev" to="#testimoni" role="button" data-slide="prev">
              <i className="fa fa-chevron-left" aria-hidden="true"></i>
              </Link>
              <Link className="carousel-control-next" to="#testimoni" role="button" data-slide="next">
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </Link>
           </div>
        </div>
       
     </div>
    )
}

export default Home;