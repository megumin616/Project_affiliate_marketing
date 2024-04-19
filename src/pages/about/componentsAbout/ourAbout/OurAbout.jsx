import React from "react";

//images
import team1 from "../../../../assets/images/team-member-01.jpg";
import team2 from "../../../../assets/images/team-member-02.jpg";
import team3 from "../../../../assets/images/team-member-03.jpg";

export default function OurAbout() {
  return (
    <section className="our-team">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h2>Our Amazing Team</h2>
              <span>
                Details to details is what makes Hexashop different from the
                other themes.
              </span>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-item">
              <div className="thumb">
                <div className="hover-effect">
                  <div className="inner-content">
                    <ul>
                      <li>
                        <a href="#">
                          <i class="fa-brands fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa-brands fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <img src={team1} />
              </div>
              <div className="down-content">
                <h4>Ragnar Lodbrok</h4>
                <span>Product Caretaker</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-item">
              <div className="thumb">
                <div className="hover-effect">
                  <div className="inner-content">
                    <ul>
                      <li>
                        <a href="#">
                          <i class="fa-brands fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa-brands fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <img src={team2} />
              </div>
              <div className="down-content">
                <h4>Ragnar Lodbrok</h4>
                <span>Product Caretaker</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-item">
              <div className="thumb">
                <div className="hover-effect">
                  <div className="inner-content">
                    <ul>
                      <li>
                        <a href="#">
                          <i class="fa-brands fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa-brands fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <img src={team3} />
              </div>
              <div className="down-content">
                <h4>Ragnar Lodbrok</h4>
                <span>Product Caretaker</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
