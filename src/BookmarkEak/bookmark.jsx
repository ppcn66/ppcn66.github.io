import './Bookmark.css'
function Bookmark() {
    return (
    <div>
<div>
    <table style={{width: "100%"}}>
    <thead>
      <tr className="thead-table">
        <th >ชื่อ<i className="bi bi-caret-down-fill"></i></th>
        <th>แผนก<i className="bi bi-caret-down-fill"></i></th>
        <th>สถานะ<i className="bi bi-caret-down-fill"></i></th>
      </tr>
    </thead>
    <tbody>
    <tr className='thead-table'>
      <td>New folder</td>
      <td>ไอที</td>
      <td style={{color: "red"}}>กำลังดำเนินการ</td>
      <td style={{color: "yellow"}}><i class="bi bi-bookmark-fill"></i></td>
      <td><i class="bi bi-three-dots-vertical"></i></td>
    </tr>
    </tbody>
    <tr className='thead-table' >
      <td>New folder</td>
      <td>วิจัยและพัฒนา</td>
      <td style={{color: "green"}}>เสร็จสิ้น</td>
      <td style={{color: "yellow"}}><i class="bi bi-bookmark-fill"></i></td>
      <td><i class="bi bi-three-dots-vertical"></i></td>
    </tr>
    <tr className='thead-table'>
      <td>Now folder</td>
      <td>ไอที</td>
      <td style={{color: "red"}}>ดำเนินการต่อ</td>
      <td style={{color: "yellow"}}><i class="bi bi-bookmark-fill"></i></td>
      <td><i class="bi bi-three-dots-vertical"></i></td>
    </tr>    
    <tr className='thead-table'>
      <td>Now folder</td>
      <td>วิจัยและพัฒนา</td>
      <td style={{color: "green"}}>เสร็จสิ้น</td>
      <td style={{color: "yellow"}}><i class="bi bi-bookmark-fill"></i></td>
      <td><i class="bi bi-three-dots-vertical"></i></td>
    </tr>
    <tr className='thead-table'>
      <td>New folder</td>
      <td>ไอที</td>
      <td style={{color: "red"}}>กำลังดำเนินการ</td>
      <td style={{color: "yellow"}}><i class="bi bi-bookmark-fill"></i></td>
      <td><i class="bi bi-three-dots-vertical"></i></td>
    </tr>
    <tr className='thead-table'>
      <td>Now folder</td>
      <td>วิจัยและพัฒนา</td>
      <td style={{color: "green"}}>เสร็จสิ้น</td>
      <td style={{color: "yellow"}}><i class="bi bi-bookmark-fill"></i></td>
      <td><i class="bi bi-three-dots-vertical"></i></td>
    </tr>
    <tr className='thead-table'>
      <td>New folder</td>
      <td>ไอที</td>
      <td style={{color: "red"}}>กำลังดำเนินการ</td>
      <td style={{color: "yellow"}}><i class="bi bi-bookmark-fill"></i></td>
      <td><i class="bi bi-three-dots-vertical"></i></td>
    </tr>
    <tr className='thead-table'>
      <td>Now folder</td>
      <td>วิจัยและพัฒนา</td>
      <td style={{color: "green"}}>เสร็จสิ้น</td>
      <td style={{color: "yellow"}}><i class="bi bi-bookmark-fill"></i></td>
      <td><i class="bi bi-three-dots-vertical"></i></td>
    </tr>
    </table>

  </div>
    </div>  );
}

export default Bookmark;