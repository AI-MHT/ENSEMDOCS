const Event=()=>{
    return(
        <section className="banner_main">
                    <div id="banner1" className="carousel slide" data-ride="carousel">
                       <ol className="carousel-indicators">
                          <li data-target="#banner1" data-slide-to="0" className="active"></li>
                          <li data-target="#banner1" data-slide-to="1"></li>
                       </ol>
                       <div className="carousel-inner">
                          <div className="carousel-item active">
                             <div className="container-fluid">
                                <div className="carousel-caption">
                                   <div className="row">
                                      <div className="col-md-12 col-lg-7">
                                         <div className="text-bg">
                                            <span>word from the founder of </span>
                                            <h1>ENSEMDOCS</h1>
                                            <p>At ENSEM, we believe in the power of knowledge sharing and collaboration. Our website serves as a bridge between students, helping them showcase their achievements and experiences during their internships. By providing a space to share internship reports and CVs, we strive to create a supportive community where students can inspire one another, learn from each other's successes, and support their career  successes, and support their career development.</p>
                                         </div>
                                      </div>
                                      <div className="col-md-12 col-lg-5">
                                         <div className="text_img">
                                            <figure><img src="assets/images/ban_img.jpg" alt="BAN"/></figure>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                          <div className="carousel-item">
                             <div className="container-fluid">
                                <div className="carousel-caption">
                                   <div className="row">
                                      <div className="col-md-12 col-lg-7">
                                         <div className="text-bg">
                                            <span>Progress & Success</span>
                                            <h1>c u r r e n c y</h1>
                                            <p>It is a long established fact that a reader will be distracted by the readable It is a long established fact that a reader will be distracted by the readable </p>
                                        {/* <a className="read_more" href="#"> Discover Now</a>*/}
                                         </div>
                                      </div>
                                      <div className="col-md-12 col-lg-5">
                                         <div className="text_img">
                                            <figure><img src="assets/images/ban_img.jpg" alt="BAN"/></figure>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                       <a className="carousel-control-prev" href="#banner1" role="button" data-slide="prev">
                       <i className="fa fa-chevron-left" aria-hidden="true"></i>
                       </a>
                       <a className="carousel-control-next" href="#banner1" role="button" data-slide="next">
                       <i className="fa fa-chevron-right" aria-hidden="true"></i>
                       </a>
                    </div>
                 </section>
    )
}
export default Event;