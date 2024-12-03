import "./Card.css";

function Card() {
  return (
    <div className="card-container">
    
    
        <div className="card-before">
          <h5 className="card-title">กำลังดำเนินการ</h5>
          <span className="card-text">20</span>
          <br />
          <a href="#" className="buton">
            ดูเอกสาร
          </a>
        </div>
        <div className="card-after">
          <h5 className="card-title">เสร็จสิ้น</h5>
          <span className="card-text">20</span>
          <br />
          <a href="#" className="buton">
            ดูเอกสาร
          </a>
        </div>
    
    </div>
  );
}

export default Card;
