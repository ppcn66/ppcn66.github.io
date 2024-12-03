import Header from "../../layouts/Header/Header";
import "./bookmark.css";
function Bookmark() {
  return (
    <div>
      <Header />
      <div className="table-share">
        <table style={{ width: "100%", height: "100%" }}>
          <thead>
            <tr className="thead-table">
              <th className="bottom folName">
                ชื่อ<i className="bi bi-caret-down-fill"></i>
              </th>
              <th className="pad-right bottom"></th>
              <th className="bottom">
                {" "}
                วันที่แชร์<i className="bi bi-caret-down-fill"></i>
              </th>
              <th className="bottom">
                ประเภท<i className="bi bi-caret-down-fill"></i>
              </th>
              <th className="bottom"></th>
              <th className="bottom">
                สถานะ<i className="bi bi-caret-down-fill"></i>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="folName">โครงการ A</td>
              <td></td>
              <td>17 กันยายน 2023 00.01</td>
              <td>folder</td>
              <td></td>
              <td style={{ color: "red" }}>ดำเนินการต่อ</td>
              <td className="yl">
                <i class="bi bi-bookmark-fill"></i>
              </td>
              <td>
                <i class="bi bi-three-dots-vertical"></i>
              </td>
            </tr>
          </tbody>
          <tr>
            <td className="folName">Now folder</td>
            <td></td>
            <td>17 กันยายน 2023 00.01</td>
            <td>folder</td>
            <td></td>
            <td style={{ color: "green" }}>เสร็จสิ้น</td>
            <td className="yl">
              <i class="bi bi-bookmark-fill"></i>
            </td>
            <td>
              <i class="bi bi-three-dots-vertical"></i>
            </td>
          </tr>
          <tr>
            <td className="folName">Now folder</td>
            <td></td>
            <td>17 กันยายน 2023 00.01</td>
            <td>folder</td>
            <td></td>
            <td style={{ color: "red" }}>ดำเนินการต่อ</td>
            <td className="yl">
              <i class="bi bi-bookmark-fill"></i>
            </td>
            <td>
              <i
                style={{ padding: "0px" }}
                class="bi bi-three-dots-vertical"
              ></i>
            </td>
          </tr>{" "}
          <tr>
            <td className="folName">Now folder</td>
            <td></td>
            <td>17 กันยายน 2023 00.01</td>
            <td>folder</td>
            <td></td>
            <td style={{ color: "green" }}>เสร็จสิ้น</td>
            <td className="yl">
              <i class="bi bi-bookmark-fill"></i>
            </td>
            <td>
              <i class="bi bi-three-dots-vertical"></i>
            </td>
          </tr>
          <tr>
            <td className="folName">Now folder</td>
            <td></td>
            <td>17 กันยายน 2023 00.01</td>
            <td>folder</td>
            <td></td>
            <td style={{ color: "green" }}>เสร็จสิ้น</td>
            <td className="yl">
              <i class="bi bi-bookmark-fill"></i>
            </td>
            <td>
              <i class="bi bi-three-dots-vertical"></i>
            </td>
          </tr>
          <tr>
            <td className="folName">Now folder</td>
            <td></td>
            <td>17 กันยายน 2023 00.01</td>
            <td>folder</td>
            <td></td>
            <td style={{ color: "green" }}>เสร็จสิ้น</td>
            <td className="yl">
              <i class="bi bi-bookmark-fill"></i>
            </td>
            <td>
              <i class="bi bi-three-dots-vertical"></i>
            </td>
          </tr>
          <tr>
            <td className="folName">Now folder</td>
            <td></td>
            <td>17 กันยายน 2023 00.01</td>
            <td>folder</td>
            <td></td>
            <td style={{ color: "green" }}>เสร็จสิ้น</td>
            <td className="yl">
              <i class="bi bi-bookmark-fill"></i>
            </td>
            <td>
              <i class="bi bi-three-dots-vertical"></i>
            </td>
          </tr>
          <tr>
            <td className="folName">Now folder</td>
            <td></td>
            <td>17 กันยายน 2023 00.01</td>
            <td>folder</td>
            <td></td>
            <td style={{ color: "green" }}>เสร็จสิ้น</td>
            <td className="yl">
              <i class="bi bi-bookmark-fill"></i>
            </td>
            <td>
              <i class="bi bi-three-dots-vertical"></i>
            </td>
          </tr>
          <tr>
            <td className="folName">Now folder</td>
            <td></td>
            <td>17 กันยายน 2023 00.01</td>
            <td>folder</td>
            <td></td>
            <td style={{ color: "green" }}>เสร็จสิ้น</td>
            <td className="yl">
              <i class="bi bi-bookmark-fill"></i>
            </td>
            <td>
              <i class="bi bi-three-dots-vertical"></i>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Bookmark;

// <i class="bi bi-bookmark-fill"></i>
