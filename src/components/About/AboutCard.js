import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ajayakumara T S </span>
            from small village <span className="purple">  Jagatagere, Karnataka, India.</span>
            <br />
            I am Looking for FullStack developer Role.
            <br />
            I have completed Bachelors of Enfineering in Information Science at BIT,
            Bengalure.
            <br />
            I worked as software Engineer at NTT DATA FA INSURENCE SYSTEM PVT LTD. 
            <br />
            <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Farming
            </li>
            <li className="about-activity">
              <ImPointRight /> Coocking
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimmimg
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ajay</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
