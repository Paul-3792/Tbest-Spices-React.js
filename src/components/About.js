import React from 'react'

const About = () => {
  return (
    <div className="about bg-primary" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-3">
            <h1>About Us</h1>
            <p>
              Welcome to the world of spices, where flavors come alive and
              cultures intertwine in every bite. At Tbest Spices, we celebrate
              the rich tapestry of spices that have enchanted palates for
              centuries. From the vibrant hues of saffron to the fiery zest of
              chili peppers, each spice tells a story of it's origin, history,
              and culinary prowess.
            </p>
          </div>
          <div className="col-lg-6 col-sm-8">
            <div className="about_img">
              <img
                src="/img/Different-spices.jpg"
                className="img-fluid"
                alt="picture"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
