import React from "react";
import "./sales.css";
import MyTimer from "../timer/time";
import { FaFacebook, FaYoutube, FaTwitter, FaGoogle } from "react-icons/fa";
const Sales = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 86450);
  return (
    <div className="saleMain">
      <h1>
        SALES <span>NOW ON</span>
      </h1>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam
        beatae temporibus, iste tempore culpa. Nesciunt tempore vero quo in
        illum, sequi est, impedit non et, veritatis unde? Officiis, accusamus?
      </p>

      <MyTimer expiryTimestamp={time} />
      <div className="mediaDiv">
        <a className="icon" href="">
          <FaFacebook />
        </a>
        <a className="icon" href="">
          <FaYoutube />
        </a>
        <a className="icon" href="">
          <FaTwitter />
        </a>
        <a className="icon" href="">
          <FaGoogle />
        </a>
      </div>
    </div>
  );
};

export default Sales;
