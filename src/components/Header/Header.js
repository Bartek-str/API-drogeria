import React, { useState } from "react";
import Logo from "./../../assets/lisc_kolor.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBag, faUserCircle } from "@fortawesome/free-solid-svg-icons";
// use react-scroll later
// do animations to moveIn and moveOut menu

const Header = () => {
    const [active, setActive] = useState(false);

    return (
        <div className='Header'>
            {active ? <div className='shadow' /> : ''}
            <div className={active ? 'nav-links x' : 'nav-links'}>
                <div>Sklep</div>
                <div>O nas</div>
                <div>Kontakt</div>
            </div>
            <div className='logo'>
                <div className='api'>API</div>
                <div className='container'>
                    <img src={Logo} alt='lisc'/>
                    <div className='drogeria'>drogeria</div>
                </div>
            </div>
            <div className={active ? 'nav-shop x' : 'nav-shop'}>
                <FontAwesomeIcon icon={faSearch} className='icon' />
                <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                <FontAwesomeIcon icon={faShoppingBag} className='icon' />
            </div>
            <div className={active ? 'burger x' : 'burger'} onClick={() => setActive(!active)}>
                <div className='line1'/>
                <div className='line2'/>
                <div className='line3'/>
            </div>
        </div>
    )
}

export default Header;