import React, { useState } from "react";
import { menData } from "../../../database/products/men/menData";

//images
import lazada from "../../../assets/images/LaSh/icons8-lazada.png";
import shopee from "../../../assets/images/LaSh/icons8-shopee.png";


export default function ProductAll() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // จำนวนรายการต่อหน้า

  const products = menData;

  // คำนวณหน้าทั้งหมด
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // รายการสินค้าที่ต้องแสดงบนหน้าปัจจุบัน
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, products.length);
  const currentProducts = products.slice(startIndex, endIndex);

  // เปลี่ยนหน้า
  const changePage = (page) => {
    setCurrentPage(page);
  };

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
            {currentProducts.map((product, index) => (
              <div className="col-lg-4" key={index}>
                <div className="item">
                  <div className="thumb">
                    <div className="hover-content">
                      <ul>
                        <li>
                          <a target="_blank" href="#">
                            <img src={lazada} />
                            <p style={{ color: "white" }}>Lazada</p>
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="single-product.html">
                            <img src={shopee} />
                            <p style={{ color: "white" }}>Shopee</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img src={product.image} alt="" />
                  </div>
                  <div className="down-content">
                    <h4>{product.name}</h4>
                    <span>{product.price}</span>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-lg-12">
              <div className="pagination">
                <ul>
                  {[...Array(totalPages)].map((_, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        onClick={() => changePage(index + 1)}
                        className={currentPage === index + 1 ? "active" : ""}
                      >
                        {index + 1}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="#"
                      onClick={() => changePage(currentPage === totalPages ? 1 : currentPage + 1)}
                    >
                      &gt;
                    </a>
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
