import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserDataContext } from '../../App';

function AboutTextContent() {
  const value = useContext(UserDataContext);
  const { spec, role } = value;

  const [resumeHoverStyle, setResumeHoverStyle] = useState({
    backgroundColor: '#07CAF2',
    color: 'white',
  });

  const [contactHoverStyle, setContactHoverStyle] = useState({
    backgroundColor: '#035AA6',
    color: 'white',
  });

  const [projectsHoverStyle, setProjectsHoverStyle] = useState({
    backgroundColor: '#07CAF2',
    color: 'white',
  });

  const handleResumeMouseEnter = () => {
    setResumeHoverStyle({
      backgroundColor: 'white',
      color: 'black',
    });
  };

  const handleResumeMouseLeave = () => {
    setResumeHoverStyle({
      backgroundColor: '#12DBC7',
      color: 'white',
    });
  };

  const handleContactMouseEnter = () => {
    setContactHoverStyle({
      backgroundColor: 'white',
      color: 'black',
    });
  };

  const handleContactMouseLeave = () => {
    setContactHoverStyle({
      backgroundColor: '#07CAF2',
      color: 'white',
    });
  };

  const handleProjectsMouseEnter = () => {
    setProjectsHoverStyle({
      backgroundColor: 'white',
      color: 'black',
    });
  };

  const handleProjectsMouseLeave = () => {
    setProjectsHoverStyle({
      backgroundColor: '#04DBC6',
      color: 'white',
    });
  };

  return (
    <div className="col-lg-6 order-lg-1">
      <div  className="text-start text-capitalize">
        <h1 className="display-4 mb-5 mt-4 fade-in" style={{ fontFamily: 'Arial, sans-serif' }}>
        Journey into Web Development Excellence!
        </h1>
        <h4 className="mb-3 fade-in" style={{ fontFamily: 'Verdana, sans-serif' }}>
          Unleashing the Power of Technology as a {spec} {role}
        </h4>
        <p className="fs-6 mb-5 fade-in" style={{ fontFamily: 'Helvetica, sans-serif' }}>
          Embark on a thrilling journey through cutting-edge web applications, where innovation meets excellence, and your digital dreams become a reality.
        </p>
        <div className='d-flex justify-content-between'>
          <Link
            to="/resume"
            className="btn btn-primary btn-lg me-3 rounded-circle fade-in"
            style={{
              backgroundColor: resumeHoverStyle.backgroundColor,
              color: resumeHoverStyle.color,
              width: '10rem',
              border:'2px solid black',
              height: '10rem',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.9s',
            }}
            onMouseEnter={handleResumeMouseEnter}
            onMouseLeave={handleResumeMouseLeave}
          >
            Resume
          </Link>
          <Link
            to="/contact"
            className="btn btn-secondary btn-lg me-3 rounded-circle fade-in"
            style={{
              backgroundColor: contactHoverStyle.backgroundColor,
              color: contactHoverStyle.color,
              width: '10rem',
              height: '10rem',
              borderRadius: '50%',
              border:'2px solid black',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.9s, border-color 0.3s',
            }}
            onMouseEnter={handleContactMouseEnter}
            onMouseLeave={handleContactMouseLeave}
          >
            Contact
          </Link>
          <Link
            to="/project"
            className="btn btn-warning btn-lg rounded-circle fade-in"
            style={{
              backgroundColor: projectsHoverStyle.backgroundColor,
              color: projectsHoverStyle.color,
              width: '10rem',
              height: '10rem',
              borderRadius: '50%',
              border:'2px solid black',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.9s, border-color 0.3s',
            }}
            onMouseEnter={handleProjectsMouseEnter}
            onMouseLeave={handleProjectsMouseLeave}
          >
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutTextContent;
