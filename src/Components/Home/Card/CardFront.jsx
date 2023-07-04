import React, { useContext } from 'react';
import profile from '../../../assets/profile1.png';
import { UserDataContext } from '../../../App';

function CardFront() {
  const value = useContext(UserDataContext);
  const { name, domain, role, socialMedia } = value;

  const socialLinks = Object.keys(socialMedia).map((key, index) => (
    <a key={index} href={socialMedia[key]}>
      <i className={`bi bi-${key} fs-5 text-dark`}></i>
    </a>
  ));

  return (
    <div className="card container-fluid shadow-box p-0 my-5" style={{ width: '23rem', fontFamily: 'Roboto, sans-serif' }}>
      <div className="container-fluid p-5 pb-2">
        <img src={profile} className="card-img-top shadow-box" alt="user image" id="card-img" />
      </div>
      <div className="card-body mt-5 bg-main">
        <h5 className="card-title py-3 pt-0 fs-1 text-center">{name}</h5>
        <hr className="hrule" />
        <div className="text-center fs-4 mt-3">{domain} {role}</div>
      </div>
      <div className="bg-light container px-5 py-3 d-flex justify-content-between">
        {socialLinks}
      </div>
    </div>
  );
}

export default CardFront;
