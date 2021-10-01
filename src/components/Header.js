import React from 'react'
import logo from "../logo.png";
import { Link } from 'react-router-dom';
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import checkout from './checkout.png';
import { useStateValue } from '../StateProvider';

function Header() {
   const [{ basket }] = useStateValue();
  return (
    <nav className="header">
       <Link to='/'> 
         <img className="header__logo" src={logo} alt='logo'/>
       </Link> 
       <div className="header__nav">
         <Link to="/" className="header__link">
            <div className="header__option">
               <span className="header__optionline1">Hello</span>
               <span className="header__optionline2">Select your address</span>
            </div> 
         </Link>
       </div>
       <div className="header__search">      
         <input type="text" className="header__searchInput" />
         <SearchIcon className="header__searchIcon" />
       </div> 
       <div className="header__nav">
         <Link to="/login" className="header__link">
            <div className="header__option">
               <span className="header__optionline1">Hello, Sign in</span>
               <span className="header__optionline2">Accounts & Lists</span>
            </div> 
         </Link>
         <Link to="/" className="header__link">
            <div className="header__option">
               <span className="header__optionline1">Returns</span>
               <span className="header__optionline2">& Orders</span>
            </div> 
         </Link>
         <Link to="/" className="header__link">
            <div className="header__option">
               <span className="header__optionline1">Your</span>
               <span className="header__optionline2">Prime</span>
            </div> 
         </Link>
         <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
               {/* <ShoppingCartOutlinedIcon /> */}
               <img className="checkout_basket" src={checkout} alt="checkout" />
               <span className="header__optionline2 header__basketCount">{basket.length}</span>
            </div> 
         </Link>
       
       </div>
    </nav>
  );
}

export default Header;
