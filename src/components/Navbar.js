import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  const gotoHome = () => navigate("/");
  const gotoProjects = () => navigate("/projects");
  const gotoContacts = () => navigate("/contactme");
  const gotoAbout = () => navigate("/about");

  return (
    <nav>
      <p onClick={gotoHome} style={{ cursor: "pointer" }}>Ayush Benedict Singh</p>
      <div>
        <p onClick={gotoAbout} style={{ cursor: "pointer" }}>About</p>
        <p onClick={gotoProjects} style={{ cursor: "pointer" }}>Projects</p>
        <p onClick={gotoContacts} style={{ cursor: "pointer" }}>Contacts</p>
      </div>
    </nav>
  );
}
