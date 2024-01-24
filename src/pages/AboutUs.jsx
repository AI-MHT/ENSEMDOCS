import React from "react";
import Header from "../components/Header"
import About from "../components/About";
import Ourteam from "../components/Ourteam";


const AboutUs=()=>{
    return(
        <div className="main-layout">
        <header>
            <div className="header">
                <div className="white_bg">
                <Header/>
                <About
                    title="ABOUT US"
                    description="Our website is designed to connect students from ENSEM and beyond, enabling them to share their internship journey with fellow students, professionals, and potential employers. We understand the significance of internships in shaping a student's professional growth and the importance of access to valuable resources. Therefore, we have created this platform to make it easier for students to showcase their skills, projects, and accomplishments to a wider audience."
                />
                <Ourteam/>
                </div>
            </div>
        </header> 
        </div>
    )
}
export default AboutUs;