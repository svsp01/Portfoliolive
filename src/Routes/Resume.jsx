import React from 'react';
import '../CSS/Resume.css';
import resumeData from '../Json/resumeData.json';

const Resume = () => {
  const {
    name,
    title,
    phone,
    email,
    website,
    experience,
    education,
    technicalSkills,
    additionalSkills,
    declaration,
  } = resumeData;

  return (
    <div id="resume-container" className="container">
      <div id="header" className="text-center">
        <h1 id="name" className="animate__animated animate__slideInDown">{name}</h1>
        <h3 id="title">{title}</h3>
        <p className="contact">Phone: {phone}</p>
        <p className="contact">Email: {email}</p>
        <p className="contact">
          Website: <a href={website}>{website}</a>
        </p>
      </div>
      
      {/* Experience Section */}
      <div id="experience-section" className="section">
        <h2>Experience</h2>
        {experience.map((exp, index) => (
          <div id={`experience-card-${index}`} className="card-r animate__animated animate__fadeIn" key={index}>
            <h3>{exp.company}</h3>
            <p>{exp.position}</p>
            <p>{exp.location}</p>
            <p>{exp.duration}</p>
            <ul>
              {exp.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <div id="education-section" className="section">
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div id={`education-card-${index}`} className="card-r animate__animated animate__fadeIn" key={index}>
            <h3>{edu.degree}</h3>
            <p>{edu.institution}</p>
            <p>{edu.duration}</p>
            <p>{edu.cgpa}</p>
            <ul>
              {edu.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Technical Skills Section */}
      <div id="technical-skills-section" className="section">
        <h2>Technical Skills</h2>
        <div id="technical-skills-card" className="card-r animate__animated animate__fadeIn">
          <ul>
            {technicalSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Additional Skills Section */}
      <div id="additional-skills-section" className="section">
        <h2>Additional Skills</h2>
        <div id="additional-skills-card" className="card-r animate__animated animate__fadeIn">
          <ul>
            {additionalSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Declaration Section */}
      <div id="declaration-section" className="section">
        <div className="declaration">
          <p>{declaration}</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
