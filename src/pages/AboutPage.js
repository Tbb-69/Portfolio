import React from "react";
import NavBar from "../components/Navbar";
import image1 from "../images/image copy 6.png";
import bottomImage from "../images/image copy 5.png";
import ContactMe from "../components/ContactMe";

export default function AboutPage() {
  return (
    <div className="aboutPage">
      <NavBar />
      <div class="underlineAboutPage"></div>

      <div className="contents">
        <div className="texts">
          <p className="content-4">About Me</p>
          <p className="content-5">
            Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor
            neque auctor dis ipsum. Pretium cras amet odio amet eleifend id sed
            cras sed. Aliquet risus posuere aliquet imperdiet sit.
          </p>
          <button className="B1">Resume</button>
        </div>
        <img src={image1} />
      </div>
      <ContactMe />
      <img src={bottomImage} className="bottomImage" />
    </div>
  );
}
