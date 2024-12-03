// import './Header.css';

// function Header() {
//     return ( 
//     <div className='header-container'>
//         <div className='search-bar'>
            // <button className='btnHeader Hashtag'>#Hashtag</button>
//             <input className='input-search' type="text" placeholder='Search' />
//         </div>
//         <div className='header-button'>
//             <button className='btnHeader New'>New +</button>

//         </div>
//     </div>
//      );
// }

// export default Header;
import Search from "../../Components/Search/Search";
import Upload from "../../Components/Upload/Upload";
import "./Header.css";
import React from 'react';


const Header = () => {
  return (
    <header className="header">
      <span className="header-content">
        <Search />
        {/* <button className="item hashtag-button">Hashtag #</button> */}
        <Upload />
       
        
      </span>
      
      
      
    </header>
  );
};

export default Header;