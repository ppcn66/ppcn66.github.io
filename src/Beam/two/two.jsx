import React, { useState } from 'react';
import './two.css';
import { fileData } from '../data/last'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';


const FileList = () => {
  const [data, setData] = useState(fileData());
  const [sortOrder, setSortOrder] = useState({
    fileName: 'asc',
    lastUsed: 'desc',
    department: 'asc',
    team: 'asc',
    status: 'asc',
  });


  const handleMoreOptions = (fileId) => {
    console.log(`More options clicked for file with ID: ${fileId}`);
  };

  const handleDownload = (fileName) => {
    console.log(`Downloading file: ${fileName}`);
  };

  const handleShare = (fileName) => {
    console.log(`Sharing file: ${fileName}`);
  };


  const handleRename = (fileName) => {
    console.log(`Renaming file: ${fileName}`);
  };

  const handleDelete = (fileName) => {
    console.log(`Deleting file: ${fileName}`);
  };

  const sortData = (key) => {
    const order = sortOrder[key] === 'asc' ? 'desc' : 'asc';
    setSortOrder({ ...sortOrder, [key]: order });

    const sortedData = [...data].sort((a, b) => {
      if (key === 'lastUsed') {
        return order === 'asc'
          ? new Date(a[key]) - new Date(b[key])
          : new Date(b[key]) - new Date(a[key]);
      }
      if (key === 'status') {
        return order === 'asc' 
          ? a[key].localeCompare(b[key])
          : b[key].localeCompare(a[key]);
      }
      return order === 'asc'
        ? a[key].localeCompare(b[key])
        : b[key].localeCompare(a[key]);
    });
    setData(sortedData);
  };
  

  return (
    <div>
      <div>
      <nav aria-label="breadcrumb">
  <ol className="breadcrumb d-flex align-items-center">
    <li className="breadcrumb-item">
      <a href="/" style={{ color: "white" }}>Home</a>
    </li>
    <li>
      <i className="bi bi-chevron-right mx-2 breadcrumb-icon"></i>
    </li>
    <li className="breadcrumb-item">
      <a href="/one" style={{ color: "white" }}>IT Department</a>
    </li>
    <li>
      <i className="bi bi-chevron-right mx-2 breadcrumb-icon"></i> 
    </li>
    <li className="breadcrumb-item active" aria-current="page" style={{ color: "white" }}>
      โครงการ
    </li>
  </ol>
</nav>
      </div>
    <div className="cat">
      <div className="head">ทีมA</div>
      <div className="table-container">
        <table className="bose">
          <thead className='thai'>
            <tr >
              <th><button className='trot' onClick={() => sortData('fileName')}>File Name</button></th>
              <th><button className='trot' onClick={() => sortData('lastUsed')}>Last Used</button></th>
              <th><button className='trot' onClick={() => sortData('department')}>Department</button></th>
              <th><button className='trot' onClick={() => sortData('team')}>Team</button></th>
              <th><button className='trot' onClick={() => sortData('status')}>Status</button></th>
              <th colspan="2"></th>
            </tr>
</thead>
          <thead>
          </thead>
          <tbody>
            {data.map((file) => (
              <tr key={file.id} >
                <td>{file.fileName}</td>
                <td>{new Date(file.lastUsed).toLocaleString()}</td>
                <td>{file.department}</td>
                <td>{file.team}</td>
                <td className={file.status === "เสร็จสิ้น" ? "status-completed" : "status-in-progress"}>
                  {file.status === "เสร็จสิ้น" ? "เสร็จสิ้น" : "กำลังดำเนินการ"}
                </td>
                <td>
                  <Dropdown content='none'>
                    <Dropdown.Toggle variant="link" id="dropdown-custom-components" >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" content='none' class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                      </svg>
                    </Dropdown.Toggle >
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => handleShare(file.fileName)}>แชร์</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleDownload(file.fileName)}>ดาวน์โหลด</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleRename(file.fileName)}>เปลี่ยนชื่อ</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleDelete(file.fileName)}>ลบ</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    
  );
};

export default FileList;
