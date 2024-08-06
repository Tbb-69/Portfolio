import React from "react";
import NavBar from "../components/Navbar";
import Projects from "../components/Projects";
import bottomImage from "../images/image copy 5.png";

export default function ProjectPage() {
  return (
    <div className="projectPage">
      <NavBar />
      <div class="underlineProjectPage"></div>

      <Projects />
      <img src={bottomImage} className="bottomImage" />
      <div className="space"></div>
    </div>
  );
}
