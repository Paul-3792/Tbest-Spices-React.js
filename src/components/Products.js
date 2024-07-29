import React from 'react'
import Tumeric from './img/Tumeric.png'
import Ginger from "./img/ginger-powder.jpg";
import Garlic from "./img/Garlic-powder.jpg";
import GingerandGarlic from "./img/Ginger and Garlic.jpg";
import GingerandTumeric from "./img/Ginger and Tumeric.jpg";

const Products = () => {
  return (
    <div>
      <div className="bg-img" id="spices">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 intro-text pt-5">
              <h1>Spices</h1>
            </div>
          </div>
        </div>

        <div className="container">
          <div>
            <div>
              <div className="row gy-4">
                <div className="col-lg-3 col-sm-6">
                  <div className="menu-item bg-white shadow-on-hover">
                    <img src={Tumeric} className="img-fluid" alt="/" />
                    <div className="menu-item-content p-4">
                      <h5 className="mt-1 mb-2">
                        <a href="Checkout.html" className="spice">
                          Tumeric powder
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6">
                  <div className="menu-item bg-white shadow-on-hover">
                    <img src={Ginger} className="img-fluid" alt="" />
                    <div className="menu-item-content p-4">
                      <h5 className="mt-1 mb-2">
                        <a href="/" className="spice">
                          Ginger powder
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="menu-item bg-white shadow-on-hover">
                    <img src={Garlic} className="img-fluid" alt="" />
                    <div className="menu-item-content p-4">
                      <h5 className="mt-1 mb-2">
                        <a href="/" className="spice">
                          Garlic powder
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6">
                  <div className="menu-item bg-white shadow-on-hover">
                    <img src={GingerandGarlic} className="img-fluid" alt="" />
                    <div className="menu-item-content p-4">
                      <h5 className="mt-1 mb-2">
                        <a href="/" className="spice">
                          Mixed powder: Ginger and Garlic
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 mb-5">
                  <div className="menu-item bg-white shadow-on-hover">
                    <img src={GingerandTumeric} className="img-fluid" alt="" />
                    <div className="menu-item-content p-4">
                      <h5 className="mt-1 mb-2">
                        <a href="/" className="spice">
                          Mixed powder: Ginger and Tumeric
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products
