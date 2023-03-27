import React from "react";
import "./home.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <div name="home" className="w-full h-[95vh] bg-[#0a192f] " >
      
        <div className="max-w-[1000px] mx-auto px-[60px] flex flex-col justify-center h-full ">
          <p className="text-[#ccd6f6]">Hi, My name is </p>
          <h1 className="text-7xl md:text-7xl font-bold text-[#ccd6f6]">
            Vipul Prajapati
          </h1>
          <h3 className="text-5xl md:text-4xl font-bold text-[#8892b0]">
            Web Developer
          </h3>
          <p className="text-[#8892b0] py-4 max-w-[800px]">
            I'm a front-end developer and able to build web presence from scratch specializing in building (and occasionally
            designing) web applications using current best practices. 
          </p>
          <div>
            <Link to="project"  smooth={true} duration={100}>
          
            <button className="group text-white border-2 px-6 py-2 my-2 flex items-center hover:bg-[#8892b0] hover:border-[#8892b0]">
              View Work
              <span className="group-hover:rotate-45 duration-300">
                <HiArrowNarrowRight className="ml-2" />
              </span>
            </button>
              </Link>
          </div>
          {/* Social icons */}
          <div className="flex ml-[-16px] mt-[20px] ">
            <ul className="flex ">
              <li className=" h-[40px] px-4 ">
                <a className="  text-gray-300" href="https://www.linkedin.com/in/thatvipulprajapati">
                  <FaLinkedin size={30} />
                </a>
              </li>
              <li className="h-[40px] px-4">
                <a className=" text-gray-300" href="https://github.com/vip-prjpti">
                  <FaGithub size={30} />
                </a>
              </li>
              <li className=" h-[40px] px-4 ">
                <a className=" text-gray-300" href="mailto:prajapativipul0408@gmail.com">
                  <FiMail size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0a192f" fillOpacity="1" d="M0,288L60,245.3C120,203,240,117,360,69.3C480,21,600,11,720,5.3C840,0,960,0,1080,37.3C1200,75,1320,149,1380,186.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        
      </div>
    </>
  );
};

export default Home;
