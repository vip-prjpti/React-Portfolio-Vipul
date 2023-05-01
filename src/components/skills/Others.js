import React from 'react'
import { HiOutlineBadgeCheck } from 'react-icons/hi';

const Others = () => {
    return (
      <div className="skills__content">
        <h3 className="skills__title"> Other Skills</h3>
  
        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <HiOutlineBadgeCheck className="check"/>
              <div>
                <h3 className="skills__name">GIT </h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
  
            <div className="skills__data">
              <HiOutlineBadgeCheck className="check"/>
              <div>
                <h3 className="skills__name"> Github</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
  
        
          </div>
  
          <div className="skills__group">
            <div className="skills__data">
              <HiOutlineBadgeCheck className="check"/>
              <div>
                <h3 className="skills__name"> VS Code </h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
  
            <div className="skills__data">
              <HiOutlineBadgeCheck className="check"/>
              <div>
                <h3 className="skills__name"> Postman </h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
            <div className="skills__data">
              <HiOutlineBadgeCheck className="check"/>
              <div>
                <h3 className="skills__name"> Netlify </h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    );
  };

export default Others