import React from "react";
import Backend from "./Backend";
import Frontend from "./Frontend";
import Others from "./Others";
import "./skills.css";
import "../../App.css";

// import HTML from '../assets/html.png';
// import CSS from '../assets/css.png';
// import JavaScript from '../assets/javascript.png';
// import ReactImg from '../assets/react.png';
// import Node from '../assets/node.png';
// import FireBase from '../assets/firebase.png';
// import GitHub from '../assets/github.png';
// import Tailwind from '../assets/tailwind.png';
// import Mongo from '../assets/mongo.png';

const Skills = () => {
  return (
    <div name="skills">
      <div className="skills">
        <div className="section">
          <h1 className="section__title">Skills</h1>
          <p className="section__subtitle">My technical level</p>
        </div>
        <div className="skills__container container grid">
          <Frontend />
          <Backend />
          <Others />
        </div>
      </div>
    </div>
  );
};

export default Skills;
