import React from 'react'
import "./Header.css"
import HeaderLogo from "./assets/Logo.png"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
        <img className='header__logo' src={HeaderLogo} alt='Amazon.in Logo'/>
        
        <div className="header__search">
          <input type="text" className="search__input" />
          <SearchIcon className='header__searchIcon'></SearchIcon>
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
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__cartItems">0</span>
          </div>

        </div>
    </div>
  )
}

export default Header