import React from "react";
import { Link } from "react-router-dom";
import aboutHeroImage from "../assets/images/about-hero.jpg";

function About() {
  const aboutHeroStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${aboutHeroImage})`,
  };

  return (
    <div className="page-container">
      <div className="about-hero" style={aboutHeroStyle}>
        <h1>ABOUT US</h1>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Based in England, we specialize in developing innovative solutions
            for peripheral vascular treatments. Our goal is to leverage the
            latest technologies in endovascular therapies to enhance patients'
            quality of life and provide cutting-edge products to the healthcare
            sector.
          </p>
        </div>

        <div className="about-text">
          <h2>Our Expertise</h2>
          <p>
            Our expert team is committed to creating effective and safe
            treatment options, such as the{" "}
            <span className="highlight-text">
              Drug Transfer Balloon Catheter System (DTB)
            </span>
            . Through our R&D efforts, we not only develop products but also
            contribute to the advancement of patient-centered treatment methods.
          </p>
        </div>

        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            Our mission is to develop reliable and effective technologies in
            vascular treatments, offering healthcare professionals improved
            therapeutic options. By combining advanced technology with a
            patient-centric approach, we strive to meet the evolving needs of
            the healthcare sector.
          </p>
        </div>

        <div className="about-text">
          <h2>Our Vision</h2>
          <p>
            We are pioneering a new era in vascular treatments with our
            innovative solutions. With continuously evolving technology and
            patient needs, we aim to maintain our leading position in the
            industry and become a trusted brand on a global scale.
          </p>
          <Link to="/contact" className="contact-button">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
