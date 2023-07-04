import React from 'react';
import QRCode from 'qrcode.react';

function CardBack() {
  const whatsappNumber = '9003817379';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="card container-fluid bg-gradient p-0 my-5" style={{ maxWidth: '400px', borderRadius: '10px' }}>
      <div className="container p-5 bg-main">
        <QRCode className="card-img-top shadow-box" value={whatsappLink} size={200} />
      </div>
      <div className="container p-4 bg-gradient-secondary bg-main text-white">
        <h5 className="card-title text-center mb-4">Connect on WhatsApp</h5>
        <p className="text-center">Scan the QR code or click the button below to start a chat:</p>
        <div className="text-center mt-4">
          <a href={whatsappLink} className="btn btn-success">
            Start WhatsApp Chat
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardBack;
