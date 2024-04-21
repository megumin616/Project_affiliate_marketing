import React, { useState } from "react";

// images
import man1 from "../../../assets/images/men-01.jpg";
import man2 from "../../../assets/images/men-02.jpg";
import man3 from "../../../assets/images/men-03.jpg";
import lazada from "../../../assets/images/LaSh/icons8-lazada.png";
import shopee from "../../../assets/images/LaSh/icons8-shopee.png";

export default function ProductMen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const menBox1Data = [
    {
      id: 1,
      name: "Product 1",
      image: man1,
      price: "$20.00",
      // ข้อมูลอื่น ๆ ที่เกี่ยวข้องกับ Product 1
    },
    {
      id: 2,
      name: "Product 2",
      image: man2,
      price: "$25.00",
      // ข้อมูลอื่น ๆ ที่เกี่ยวข้องกับ Product 2
    },
    {
      id: 3,
      name: "Product 3",
      image: man3,
      price: "$30.00",
      // ข้อมูลอื่น ๆ ที่เกี่ยวข้องกับ Product 3
    },
    {
      id: 3,
      name: "Product 3",
      image: man3,
      price: "$30.00",
      // ข้อมูลอื่น ๆ ที่เกี่ยวข้องกับ Product 3
    },
    // เพิ่มข้อมูลสินค้าเพิ่มเติมตามต้องการ
  ];

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
    <section className="section men" id="men">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <h2>Men's Latest</h2>
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
                <div class="thumb">
                  <div class="hover-content">
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
  );
}
