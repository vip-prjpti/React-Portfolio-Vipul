import React from "react";
import CV from "../../assets/Vipul-Resume.pdf";
import { BiDownload } from "react-icons/bi";
import "./about.css";
import Img from "../../assets/pics-1.jpg";

const About = () => {
  return (
    <>
      <section name='about' className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
        <img src={Img} alt="" className="about__image "/>
        <div className="about--right-container">
              <p className="about__description">
              A frontend developer and a graduate in Bachelor of Computer Science from Punjab, India and currently working as a Programmer Analyst Trainee at "Cognizant". <br /><br /> I love exploring and learning new languages, keeping up with the latest technology, and increasing my productivity and creativity to add more value to my work. Always had a craze for designing websites and I am passionate about building amazing web pages with great UI interfaces for clients ranging from individuals to small-businesses. 
              <br /><br />
              My main strength is to never give up and to take ownership of my work and I've learned through my experience that consistency is the key to everything.
                
              </p>

              <a download="" href={CV} className="button--download">
                 Resume <BiDownload className="ml-4 text-2xl"/>
              </a>
            </div>
        </div>
      </section>

 
    </>
  );
};

export default About;
