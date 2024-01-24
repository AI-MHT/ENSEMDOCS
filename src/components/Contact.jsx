const Contact = () => {
    return (
      <section className="banner_main">
        <div className="ContactFormWidget">
          <div className="form">
            <form action="https://formspree.io/f/xyyrkzeg" method="POST">
              <div className="formColum">
                <div className="FormControl">
                  <input id="ContactName" name="name" placeholder="Name" type="text" required />
                  <input id="ContactEmail" name="email" placeholder="Email" type="email" required />
                </div>
                <textarea
                  id="ContactMessage"
                  name="message"
                  placeholder="Please send us the link to the drive and ensure that it is publicly accessible."
                  rows="4"
                ></textarea>
                <div className="FormControlBtn">
                  <button className="button" id="ContactForm1_contact-form-submit" type="submit" value="Send Now">
                    Send Message{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-right-short"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  