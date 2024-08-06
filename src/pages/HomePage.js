import React from "react";
import image from "../images/image.png";
import NavBar from "../components/Navbar";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import bottomImage from "../images/image copy 5.png";

export default function HomePage() {
  return (
    <div className="home-page">
      <NavBar />
      <div className="image-container">
        <img src={image} className="home-page-image" alt="background" />
      </div>
      <div className="content">
        <div>
          <p className="content-1">UI UX Designer</p>
          <p className="content-2">Hello, my name is Ayush Benedict Singh</p>
          <p className="content-3">
            Short text with details about you, what you do or your professional
            career. You can add more information on the about page.
            <div className="buttons">
              <button className="B1">Projects</button>
              <button className="B2">LinkedIn</button>
            </div>
          </p>
        </div>
      </div>
      <Projects />
      <div className="space"></div>
      <ContactMe />
      <img src={bottomImage} className="bottomImage" />
    </div>
  );
}
