import React, { useState } from 'react'

// images 
import lazada from "../../../assets/images/LaSh/icons8-lazada.png";
import shopee from "../../../assets/images/LaSh/icons8-shopee.png";
import { popularDataWomen } from '../../../database/pupolar/pupolarData';

export default function ProductWomen() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const menBox1Data = popularDataWomen;

  
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
    <section className="section" id="women">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <h2>Women's Latest</h2>
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
                          <img src={lazada} />
                          <p>Lazada</p>
                        </a>
                      </li>
                      <li>
                        <a href="single-product.html">
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
    </section>
  )
}
