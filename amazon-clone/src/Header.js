import React from 'react'
import "./Header.css"
import HeaderLogo from "./assets/Logo.png"

function Header() {
  return (
    <div className='header'>
        <img className='header__logo' src={HeaderLogo} alt='Amazon.in Logo'/>
        
        <div className="header__search">
          <input type="text" className="search__input" />
          {/* Searchlogo  */}
        </div>

        <div className="header__nav">
          <div className="header__option">
            <span className="header__optionLineOne">
              Hello Guest
            </span>
            <span className="header__optionLineTwo">
              Sign in
            </span>
          </div>
          <div className="header__option">
          <span className="header__optionLineOne">
              Returns
            </span>
            <span className="header__optionLineTwo">
              & Orders 
            </span>
            
          </div>
          <div className="header__option">
          <span className="header__optionLineOne">
              Your 
            </span>
            <span className="header__optionLineTwo">
              Prime
            </span>
            
          </div>

        </div>
    </div>
  )
}

export default Header