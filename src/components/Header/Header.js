import React from "react";
import Logo from "./../../assets/logo_1.png";
import Burger from "./Burger";

const Header = () => (
    <div className='Header'>
        <img src={Logo} alt='logo' />
        <Burger />
    </div>
)

export default Header;