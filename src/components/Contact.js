import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className="pt-5 contact section-padding">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="text-dark section-header text-center pb-2">
              <h2>Contact Us</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 pb-4">
            <form action="" method="post" className="container">
              <div className="row">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Full Name....."
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Your Email Address...."
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <textarea
                        rows="3"
                        name="message"
                        className="form-control"
                        placeholder="Enter your message here"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="button">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact
