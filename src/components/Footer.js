import React from 'react'

const Footer = () => {
  return (
    <div className="bg-cover">
      <div className="footer-top">
        <div className="container-fluid">
          <div className="row gy-5">
            <div className="col-lg-2">
              <img src="" className="img-fluid mt-3" alt="" />
            </div>
            <div className="col-lg-3 ms-3">
              <h6 className="mb-2 mt-3">CONTACT US</h6>
              <a className="foot" href="/">
                <p className="mb-0 social-media">
                  <i className="bi bi-geo-alt-fill"></i> 47, Crescent A,
                  Fynestone Estate, Gwarinpa. Abuja.
                </p>
              </a>
              <a className="foot" href="tel:08067083533">
                <p className="mb-1 social-media">
                  <i className="bi bi-telephone-fill"></i>Phone Number:
                  08067083533
                </p>
              </a>
              <a className="foot" href="mailto:tbestspices@gmail.com">
                <p className="mb-1 social-media">
                  <i className="bi bi-envelope-fill"></i> Email-address:
                  tbestspices@gmail.com
                </p>
              </a>
            </div>
            <div className="social-media col-lg-3">
              <h6 className="social-media col-lg-5 pt-3">SOCIAL MEDIA</h6>
              <a className="foot" href="/">
                <p className="mb-1">
                  <i className="bi bi-instagram"></i> Instagram
                </p>
              </a>
              <a className="foot" href="/">
                <p className="mb-1">
                  <i className="bi bi-facebook icon"></i> Facebook
                </p>
              </a>
              <a className="foot" href="/">
                <p className="mb-1">
                  <i className="bi bi-whatsapp"></i> WhatsApp
                </p>
              </a>
              <a className="foot" href="/">
                <p className="mb-1">
                  <i className="bi bi-envelope-fill"></i> Email-address
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row gy-3 justify-content-between">
            <div className="col-auto">
              <p className="mb-0 social-media">
                Copyrights all rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
