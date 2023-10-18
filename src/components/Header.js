import React from 'react';
import './Header.css';

function Header(){
    return(
        <div className="header-container">
        <div className="header-text">Hello Pruthviraj 👋🏻, </div>
        <input type="text" className="search-input" placeholder="🔍Search" />
      </div>
        
    )
}

export default Header;