import './tableshare.css';

function Tableshare() {
    return ( <div>
        <div>
    <table style={{width: "100%"}}>
    <thead>
      <tr className="thead-table">
        <th >ชื่อ<i className="bi bi-caret-down-fill"></i></th>
        <th>วันที่แชร์<i className="bi bi-caret-down-fill"></i></th>
        <th>ประเภท<i className="bi bi-caret-down-fill"></i></th>
        <th>สถนาะ<i className="bi bi-caret-down-fill"></i></th>
      </tr>
    </thead>
    <tbody>
    <tr>
      <td>โครงการ A</td>
      <td>17 กันยายน 2023 00.01</td>
      <td>folder</td>
      <td style={{color: "red"}}>ดำเนินการต่อ</td>
      <td><i class="bi bi-three-dots-vertical"></i></td>
    </tr>
    </tbody>
    <tr>
      <td>Now folder</td>
      <td>17 กันยายน 2023 00.01</td>
      <td>folder</td>
      <td style={{color: "green"}}>เสร็จสิ้น</td>
      <td><i class="bi bi-three-dots-vertical"></i></td>
    </tr>
    <tr>
      <td>Now folder</td>
      <td>17 กันยายน 2023 00.01</td>
      <td>folder</td>
      <td style={{color: "red"}}>ดำเนินการต่อ</td>
      <td><i class="bi bi-three-dots-vertical"></i></td>
    </tr>    <tr>
      <td>Now folder</td>
      <td>17 กันยายน 2023 00.01</td>
      <td>folder</td>
      <td style={{color: "green"}}>เสร็จสิ้น</td>
      <td><i class="bi bi-three-dots-vertical"></i></td>
    </tr>
    </table>

  </div>
    </div> );

}

export default Tableshare;