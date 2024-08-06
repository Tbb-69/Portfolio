import React from "react";
import NavBar from "../components/Navbar";
import ContactMe from "../components/ContactMe";
import bottomImage from "../images/image copy 5.png";

export default function ContactPage() {
  return (
    <div className="projectPage">
      <NavBar />
      <div class="underlineContactPage"></div>

      <ContactMe />
      <img src={bottomImage} className="bottomImage" />
    </div>
  );
}
