import React from "react";
import "./section4.css";
import img1 from "../assets/images/image21.png";
import img2 from "../assets/images/image22.png";
import img3 from "../assets/images/image23.png";
const section4 = () => {
  return (
    <div className="sec4main">
      <div className="sec4txt">
        <p className="sec4maintxt">
          You are just one step away from your Dream Dress
        </p>
      </div>
      <div className="sec4cards">
        <ul className="seclist">
          <li>
            <a className="anchor" href="">
              <div className="sec4c1">
                <img className="imgcards" src={img1} alt="" />
                <p className="sec4txt1">Book a Session</p>
                <p className="sec4txt2">
                  Book a session and our stylist will have a Virtual Call with
                  you to discuss your dream dress!
                </p>
              </div>
            </a>
          </li>
          <li>
          <a className="anchor" href="">
              <div className="sec4c1">
                <img className="imgcards" src={img2} alt="" />
                <p className="sec4txt1">Design & Fabrics</p>
                <p className="sec4txt2">
                Our stylist will design the dress of your dreams and will help you select fabrics to breathe life in your dress
                </p>
              </div>
            </a>
          </li>
          <li>
          <a className="anchor" href="">
              <div className="sec4c1">
                <img className="imgcards" src={img3} alt="" />
                <p className="sec4txt1">Delivery</p>
                <p className="sec4txt2">
                Once the dress is done, we will personally deliver it to you so it can become gracefully yours!
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default section4;
