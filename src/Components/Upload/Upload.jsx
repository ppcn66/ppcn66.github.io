// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Upload.css";

// const Upload = () => {
//   const [showPopup, setShowPopup] = useState(false);
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!selectedFile) {
//       alert("กรุณาเลือกไฟล์ก่อน!");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", selectedFile);

//     try {
//       const response = await fetch("http://localhost:5000/upload", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         alert("อัปโหลดสำเร็จ!");
//         setShowPopup(false); // ปิด Popup หลังอัปโหลดเสร็จ
//       } else {
//         alert("เกิดข้อผิดพลาดระหว่างการอัปโหลด");
//       }
//     } catch (error) {
//       console.error("Error uploading file:", error);
//       alert("การอัปโหลดล้มเหลว");
//     }
//   };

//   return (
//     <div>
//       <div className="btn-new">
//         <button className="item new-button" onClick={() => setShowPopup(true)}>
//           New +
//         </button>
//       </div>

//       {/* Popup */}
//       {showPopup && (
//         <div
//           className="modal show"
//           style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
//         >
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">อัปโหลดไฟล์</h5>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   onClick={() => setShowPopup(false)}
//                 ></button>
//               </div>
//               <div className="modal-body">
//                 <input type="file" onChange={handleFileChange} />
//                 {selectedFile && (
//                   <p className="mt-3">
//                     <strong>Filename:</strong> {selectedFile.name}
//                   </p>
//                 )}
//               </div>

//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   onClick={() => setShowPopup(false)}
//                 >
//                   ยกเลิก
//                 </button>
//                 <button
//                   type="button"
//                   className="btn-upload"
//                   onClick={handleUpload}
//                 >
//                   อัปโหลด
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Upload;
import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import "./Upload.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Popup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("กรุณาเลือกไฟล์ก่อนอัปโหลด");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setUploading(true);  // เริ่มการอัปโหลด
    setUploadSuccess(null);  // รีเซ็ตสถานะการอัปโหลด

    try {
      // ส่งข้อมูลไฟล์ไปยังเซิร์ฟเวอร์ (เปลี่ยน URL ตามที่เซิร์ฟเวอร์ของคุณกำหนด)
      const response = await axios.post("https://your-server-api.com/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",  // กำหนดให้ส่งข้อมูลแบบ FormData
        },
      });

      // เมื่ออัปโหลดสำเร็จ
      setUploadSuccess(true);
      console.log("ไฟล์อัปโหลดสำเร็จ:", response.data);
    } catch (error) {
      // หากเกิดข้อผิดพลาด
      setUploadSuccess(false);
      console.error("เกิดข้อผิดพลาดในการอัปโหลด:", error);
    } finally {
      setUploading(false);  // สิ้นสุดการอัปโหลด
    }
  };

  return (
    <div className="lo">
      <button onClick={() => setIsModalOpen(true)} className="item btn-new">
        เพิ่ม +
      </button>

      {/* ป็อปอัพ (Modal) */}
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} contentLabel="File Upload">
        <div className="modal-dialog">
          <h5 className="modal-title">อัปโหลดไฟล์ใหม่</h5>
          <button type="button" className="close" onClick={() => setIsModalOpen(false)}>
            <span>&times;</span>
          </button>
        </div>
        <div className="modal-body ">
          <input
            type="file"
            onChange={handleFileChange}
            className="form-control "
          />
          <div className="mt-3 " >
            {fileName && <p><strong>ชื่อไฟล์:</strong> {fileName}</p>}
          </div>
          {uploading && <p>กำลังอัปโหลด...</p>}
          {uploadSuccess === true && <p className="text-success">อัปโหลดไฟล์สำเร็จ!</p>}
          {uploadSuccess === false && <p className="text-danger">เกิดข้อผิดพลาดในการอัปโหลดไฟล์</p>}
        </div>
        <div className="modal-footer">
          <button className="btn b" onClick={() => setIsModalOpen(false)}>
            ปิด
          </button>
          <button
            className="btn-up"
            onClick={handleUpload}
            disabled={uploading}
          >
            อัปโหลด
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Popup;

