import React from 'react';
import { useNavigate } from 'react-router-dom';
import './one.css';
import image from '../pic/Folder.png'; // นำเข้ารูปภาพ
import 'bootstrap/dist/css/bootstrap.min.css'; // นำเข้า CSS ของ Bootstrap

const ITDepartment = () => {
  const navigate = useNavigate();

  const buttons = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    fileName: `โครงการ${index + 1}`,
    image: image,
  }));

  return (
    <div>
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb">
  <ol className="breadcrumb d-flex align-items-center">
    <li className="breadcrumb-item">
      <a href="/" style={{ color: "white" }}>Home</a>
    </li>
    <li>
      <i className="bi bi-chevron-right mx-2 breadcrumb-icon"></i> 
    </li>
    <li className="breadcrumb-item active" aria-current="page" style={{ color: "white" }}>
      IT Department
    </li>
  </ol>
</nav>

      <div className="cat">
        <div className="head">
          <p>โครงการ</p>
          <div className="boxx">
            {buttons.map((button) => (
              <button
                key={button.id}
                className="buttonTheme"
                onClick={() => navigate(`/two`)}
              >
                <img src={button.image} alt={`Icon ${button.id}`} />
                <div>
                  <small>{button.fileName}</small>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITDepartment;
