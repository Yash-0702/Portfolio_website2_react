import React from "react";
import Typical from "react-typical";
import profile from "../../assets/profile.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <h1>Hy! Am </h1>
        <h2 className="fullname">Lama</h2>
        <h2>
          I'm a{" "}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              "Full Stack Developer 💜",
              1000,
              "MERN Stack Developer ✅",
              1000,
              "Frontend Developer 👑",
              1000,
              "Backend Developer 🪙",
              1000,
            ]}
          />
        </h2>
        <p>
          I'm a full stack developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        {/* {payment link} */}
        <div className="header-payment-container">
          <button>Hire Me</button>

          <i className="fab fa-cc-paypal"></i>
          <i className="fab fa-cc-visa"></i>
          <i className="fab fa-cc-mastercard"></i>
          <i className="fab fa-cc-amex"></i>
        </div>
      </div>
      {/* Image container */}
      <div className="profile-img-container">
        <img src={profile} alt="profile" />
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
    </div>
  );
};

export default Header;
