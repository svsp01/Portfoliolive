import React, { useState, useEffect } from 'react';
import projectsData from '../Json/projectsData.json';
import '../CSS/Projects.css';
import screenshot1 from '../assets/Screenshot1.png';
import screenshot2 from '../assets/Screenshot2.png';
import screenshot3 from '../assets/Screenshot3.png';
import screenshot4 from '../assets/Screenshot4.png';
import screenshot5 from '../assets/Screenshot5.png';

function Project() {
  const [sortOrder, setSortOrder] = useState('asc');
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  const sortedProjects = [...projectsData].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleImageLoad = (projectId) => {
    setLoadedImages((prevLoadedImages) => [...prevLoadedImages, projectId]);
  };

  const getScreenshotByProjectId = (projectId) => {
    // Map project ID to the corresponding screenshot
    const screenshotMap = {
      1: screenshot1,
      2: screenshot2,
      3: screenshot3,
      4: screenshot4,
      5: screenshot5,
    };

    return screenshotMap[projectId];
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-end my-3">
        <button
          className={`btn btn-lg btn-${sortOrder === 'asc' ? 'primary' : 'secondary'}`}
          onClick={toggleSortOrder}
        >
          {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
        </button>
      </div>
      <div className="row">
        {isLoading ? (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          sortedProjects.map((project) => (
            <div className="col-md-6" key={project.id}>
              <div className="card mb-3 project-card">
                <div className="card-body">
                  <h3 className="card-title">{project.title}</h3>
                  {project.inProgress && <span className="in-progress-label">In Progress</span>}
                  <p className="card-text">{project.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <a
                      href={project.deployedSite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-info"
                    >
                      Preview
                    </a>
                    <div>
                      <a
                        href={project.gitRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary mx-2"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                  <div className="my-5 shadow-lg container" style={{ maxWidth: '80%' }}>
                    {!loadedImages.includes(project.id) && (
                      <div className="image-loader">
                        <div className="spinner-border text-primary" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    )}
                    <img
                      src={getScreenshotByProjectId(project.id)}
                      alt="Project Screenshot"
                      className={`img-fluid img-thumbnail ${
                        loadedImages.includes(project.id) ? 'visible' : 'hidden'
                      }`}
                      onLoad={() => handleImageLoad(project.id)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Project;
