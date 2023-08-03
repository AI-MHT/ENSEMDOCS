import React from "react";

const StudentFeed = () => {
  const imageUrl = process.env.PUBLIC_URL + "/assets/images/test.png";

  return (
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="container">
          <div className="carousel-caption">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="test_box">
                  <i><img src={imageUrl} alt="STD-IMG" /></i>
                  <h3>name of student</h3><br />
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
                  <i><img src={imageUrl} alt="STD-IMG" /></i>
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
  );
};

export default StudentFeed;
