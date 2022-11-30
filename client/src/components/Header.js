import React from 'react'
import "../css/header.css"
import { useNavigate } from "react-router-dom";

function Header() {
let navigate = useNavigate();
	
function menuClicked(){
let close = document.getElementById("closeIcon");
let menu = document.getElementById("menuIcon");
let menuItems = document.getElementById("menuItems");

if(close.classList.contains("hidden"))
{
  menu.classList.remove("show");
menu.classList.add("hidden");
close.classList.remove("hidden");
close.classList.add("show");
menuItems.style.left = "90%";

}
else
{
  close.classList.remove("show");
  close.classList.add("hidden");
menu.classList.remove("hidden");
menu.classList.add("show");
menuItems.style.left = "120vw";

}
}

  return (
      <div className='header_div'>
    <img className='header_div__img' src={process.env.PUBLIC_URL + "/images.png"} alt='Airbnb'/>
    <div className='header_div__div_menu' onClick={menuClicked}>
    <span id='menuIcon' className="material-symbols-outlined" >menu</span>
    <span id='closeIcon' className="material-symbols-outlined hidden">close</span>
    </div>
<div id='menuItems' className='header_div__div_menu__div_items'>
  <ul>
    <li onClick={(e) =>  navigate(`/register`) } >Signup</li>
    <li onClick={(e) =>  navigate(`/login`) } >Login</li>
    <li><a href="/">Home</a></li>
  </ul>
</div>
    
    
    </div>
  )
}

export default Header
