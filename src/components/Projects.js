import React from "react";
import image1 from "../images/image copy.png";
import image2 from "../images/image copy 2.png";
import image3 from "../images/image copy 3.png";


export default function Projects() {
  return (
    <div>
      <div class="heading-container">
        <h1 class="heading">Projects</h1>
        <div class="underline"></div>
      </div>
      <div className="projects">
        <div>
          <p className="title">Project Name</p>
          <p className="desc">
            I created this personal project in order to show how to create an
            interface in Figma using a portfolio as an example.
          </p>
          <button>View Project</button>
        </div>
        <img src={image1} />
      </div>
      <div className="projects">
        <img src={image2} />
        <div>
          <p className="title">Project Name</p>
          <p className="desc">
            What was your role, your deliverables, if the project was personal,
            freelancing.
          </p>
          <button>View Project</button>
        </div>
      </div>
      <div className="projects">
        <div>
          <p className="title">Project Name</p>
          <p className="desc">
          You can also add in this description the type of the
          project, if it was for web, mobile, electron.
          </p>
          <button>View Project</button>
        </div>
        <img src={image3} />
      </div>
    </div>
  );
}
