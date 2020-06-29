import React from "react";
import Logo from "./../../assets/lisc_kolor.svg";
import Burger from "./Burger";

const Header = () => (
    <div className='Header'>
        <div className='logo'>
            <div className='api'>API</div>
            <div className='container'>
                <img src={Logo} alt='lisc'/>
                <div className='drogeria'>drogeria</div>
            </div>
        </div>
        <Burger />
    </div>
)

export default Header;