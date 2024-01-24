import React from "react";

const StudentFeed = () => {
  // const imageUrl = process.env.PUBLIC_URL + "/assets/images/test.png";

  return (
    <section className="testimonial text-center">
      <div className="container">
        <div className="heading white-heading">
          Feedback
        </div>
        <div id="testimonial4" className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div className="testimonial4_slide">
                <img src="https://ai-mht.github.io/Portfolio/assets/images/my-avatar.PNG" className="img-circle img-responsive" alt="Client 1" />
                <h4>Aiman MOUHAT</h4>
                <p>Text Text Text Text Text Text text...Text Text Text Text Text Text text...Text Text Text Text Text Text text...Text Text Text Text Text Text text...Text Text Text Text Text Text text...</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial4_slide">
                <img src="https://ai-mht.github.io/Portfolio/assets/images/my-avatar.PNG" className="img-circle img-responsive" alt="Client 2" />
                <p>Text Text Text Text Text text...</p>
                <h4>Student 2</h4>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial4_slide">
                <img src="https://ai-mht.github.io/Portfolio/assets/images/my-avatar.PNG" className="img-circle img-responsive" alt="Client 3" />
                <p>test etest text...</p>
                <h4>Student 3</h4>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#testimonial4" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#testimonial4" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default StudentFeed;
