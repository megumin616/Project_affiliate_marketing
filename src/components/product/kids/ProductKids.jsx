import React, { useState } from 'react'

// images
import lazada from "../../../assets/images/LaSh/icons8-lazada.png";
import shopee from "../../../assets/images/LaSh/icons8-shopee.png";
import { popularDataKids } from '../../../database/pupolar/pupolarData';

export default function ProductKids() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const menBox1Data = popularDataKids;

  
    const handleMoveLeft = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
        const container = document.querySelector(".container-men-box");
        if (container) {
          container.style.transition = "transform 0.3s ease";
          container.style.transform = `translateX(-${
            (currentIndex - 1) * (33.333 + 20)
          }%)`;
        }
      }
    };
  
    const handleMoveRight = () => {
      if (currentIndex < menBox1Data.length - 3) {
        setCurrentIndex(currentIndex + 1);
        const container = document.querySelector(".container-men-box");
        if (container) {
          container.style.transition = "transform 0.3s ease";
          container.style.transform = `translateX(-${
            currentIndex * (33.333 + 20)
          }%)`;
        }
      }
    };
  return (
    <section className="section" id="kids">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <h2>Kid's Latest</h2>
              <span>
                Details to details is what makes Hexashop different from the
                other themes.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-men">
        <div className="container-men-box">
          {menBox1Data
            .slice(currentIndex, currentIndex + 3)
            .map((item, index) => (
              <div key={index} className="men-box1">
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
                      {/* <li>
                    <a href="single-product.html">
                      <i class="fa fa-star"></i>
                    </a>
                  </li> */}
                      <li>
                        <a href="single-product.html">
                          {/* <i class="fa fa-shopping-cart"></i> */}
                          <img src={shopee} />
                          <p>Shopee</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <img src={item.image} />
                </div>
                <div>
                  <div className="star-men">
                    <h3>{item.name}</h3>
                    {/* <i class="fa-regular fa-star"></i> */}
                  </div>
                </div>
                <p>{item.price}</p>
              </div>
            ))}
        </div>
        <div className="men-button">
          <button className="moveLeft" onClick={handleMoveLeft}>
            Left
          </button>
          <button className="moveRigth" onClick={handleMoveRight}>
            Right
          </button>
        </div>
      </div>
      {/* <hr style={{ borderBottom: '1px dotted black', borderTop: 'none', berder: 'none' }} /> */}
    </section>
  )
}
