import { useNavigate } from "react-router-dom";
import "./Home.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { fileData } from "../data/last";
import image from "../pic/dataflow.png";

const Home = () => {
  const navigate = useNavigate();

  // ดึงข้อมูลจาก fileData และจัดเรียง
  const sortedData = fileData()
    .sort((a, b) => new Date(b.lastUsed) - new Date(a.lastUsed))
    .slice(0, 15); // จำกัดแค่ 15 รายการ

  return (
    <div>
      <div className="welcome-banner">
        <h1>Welcome to E-Document</h1>
      </div>

      {/* Container หลัก */}
      <div className="main-home">
        <div className="cat">
          <h2 className="p">แผนก</h2>
          <div className="box">
            <button className="button" onClick={() => navigate("/one")}>
              <img src={image} alt="IT" className="button-icon" />
              แผนกไอที
              <br />
              (Information Technology - IT)
            </button>
            <button className="button" onClick={() => navigate("/one")}>
              <img src={image} alt="Finance" className="button-icon" />
              แผนกการเงิน
              <br />
              (Finance Department)
            </button>
            <button className="button" onClick={() => navigate("/one")}>
              <img src={image} alt="HR" className="button-icon" />
              แผนกทรัพยากรบุคคล
              <br />
              (Human Resources - HR)
            </button>
            <button className="button" onClick={() => navigate("/one")}>
              <img src={image} alt="R&D" className="button-icon" />
              แผนกวิจัยและพัฒนา
              <br />
              (Research and Development - R&D)
            </button>
            <button className="button" onClick={() => navigate("/one")}>
              <img src={image} alt="Marketing" className="button-icon" />
              แผนกการตลาด
              <br />
              (Marketing Department)
            </button>
            <button className="button" onClick={() => navigate("/one")}>
              <img src={image} alt="Legal" className="button-icon" />
              แผนกกฎหมาย
              <br />
              (Legal Department)
            </button>
          </div>

          <p>เปิดล่าสุด</p>
          <table className="container2">
            <thead className="thead2">
              <tr className="tr2">
                <th>ชื่อ</th>
                <th>ใช้งานล่าสุด</th>
                <th>แผนก</th>
                <th>ทีม</th>
                <th>สถานะ</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((file) => (
                <tr key={file.id} className="tr">
                  <td>{file.fileName}</td>
                  <td>{new Date(file.lastUsed).toLocaleString()}</td>
                  <td>{file.department}</td>
                  <td>{file.team}</td>
                  <td
                    className={
                      file.status === "เสร็จสิ้น"
                        ? "status-completed"
                        : "status-in-progress"
                    }
                  >
                    {file.status === "เสร็จสิ้น"
                      ? "เสร็จสิ้น"
                      : "กำลังดำเนินการ"}
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

export default Home;
