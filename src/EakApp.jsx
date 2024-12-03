import { useState } from 'react'
import './EakApp.css'
import Tableshare from './TableShareEak/tableshare'
import Bookmark from './Bookmark/bookmark'


function App() {
  const [count, setCount] = useState(0)

  return (

  <div>
    
    {/* {<Tableshare />}   */} 
    {/*อาเราไม่รู้ว่าที่ทำถูกไหมเราทำหน้าแชร์กับบุกมาทได้ประมาณนี้ 
    จะเปิดหน้าแชร์ก็ปิดบุกมาท ถ้าจะเปิดบุหมาทก็ปิดแชร์ */}
    <Bookmark />
    
  </div>

  );

}
export default App
