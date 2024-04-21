import React from "react";
import man1 from "../../../assets/images/men-01.jpg";

//images
import lazada from "../../../assets/images/LaSh/icons8-lazada.png";
import shopee from "../../../assets/images/LaSh/icons8-shopee.png";

export default function ProductAll() {
  return (
    <>
      <section className="section" id="products">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>Our Latest Products</h2>
                <span>Check out all of our products.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="item">
                <div className="thumb">
                  <div className="hover-content">
                    <ul>
                      <li>
                        <a href="single-product.html">
                          {/* <i class="fa fa-eye"></i> */}
                          <img src={lazada} />
                          <p style={{color: "white"}}>Lazada</p>
                        </a>
                      </li>
                      <li>
                        <a href="single-product.html">
                          {/* <i class="fa fa-shopping-cart"></i> */}
                          <img src={shopee} />
                          <p style={{color: "white"}}>Shopee</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <img src={man1} alt="" />
                </div>
                <div className="down-content">
                  <h4>classNameic Spring</h4>
                  <span>$120.00</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item">
                <div className="thumb">
                  <div className="hover-content">
                    <ul>
                    <li>
                        <a href="single-product.html">
                          {/* <i class="fa fa-eye"></i> */}
                          <img src={lazada} />
                          <p>Lazada</p>
                        </a>
                      </li>
                      <li>
                        <a href="single-product.html">
                          {/* <i class="fa fa-shopping-cart"></i> */}
                          <img src={shopee} />
                          <p>Shopee</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <img src={man1} alt="" />
                </div>
                <div className="down-content">
                  <h4>Air Force 1 X</h4>
                  <span>$90.00</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="item">
                <div className="thumb">
                  <div className="hover-content">
                    <ul>
                    <li>
                        <a href="single-product.html">
                          {/* <i class="fa fa-eye"></i> */}
                          <img src={lazada} />
                          <p>Lazada</p>
                        </a>
                      </li>
                      <li>
                        <a href="single-product.html">
                          {/* <i class="fa fa-shopping-cart"></i> */}
                          <img src={shopee} />
                          <p>Shopee</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <img src={man1} alt="" />
                </div>
                <div className="down-content">
                  <h4>Love Nana ‘20</h4>
                  <span>$150.00</span>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="pagination">
                <ul>
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#"></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
