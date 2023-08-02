const TestimonialItem = ({ imageSrc, studentName, comment }) => {
    return (
      <div className="carousel-item">
        <div className="container">
          <div className="carousel-caption">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="test_box">
                  <i>
                    <img src={imageSrc} alt="STD-IMG" />
                  </i>
                  <h3>{studentName}</h3>
                  <p>{comment}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TestimonialItem;
  