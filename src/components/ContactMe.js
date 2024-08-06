import React from "react";
import image from "../images/image copy 4.png";

export default function ContactMe() {
  return (
    <div>
      <div class="heading-container">
        <h1 class="heading">Contact Me</h1>
        <div class="underlineContact"></div>
      </div>
      <div className="input">
        <div className="name">
          <p>Name</p>
          <input></input>
        </div>

        <div className="email">
          <p>Email</p>
          <input></input>
        </div>

        <div className="message">
          <p>Message</p>
          <textarea></textarea>
        </div>
        <button>Send</button>
      </div>
      <img src={image} className="socialMediaImages" />
      <p className="name">Ayush Benedict Singh 2024</p>
    </div>
  );
}
