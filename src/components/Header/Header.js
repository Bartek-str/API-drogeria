import React, { useState } from "react";
import Logo from "./../../assets/lisc_kolor.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBag, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
    const [active, setActive] = useState(false);

    return (
        <div className='Header'>
            {active ? <div className='shadow' onClick={() => setActive(false)} /> : ''}
            <div className={active ? 'nav-links x' : 'nav-links'}>
                <div><Link to='/sklep'>Sklep</Link></div>
                <div><Link to='/o-nas'>O nas</Link></div>
                <div><Link to='/kontakt'>Kontakt</Link></div>
            </div>
            <Link to='/' className='logo'>
                <div className='api'>API</div>
                <div className='container'>
                    <img src={Logo} alt='lisc'/>
                    <div className='drogeria'>drogeria</div>
                </div>
            </Link>
            <div className={active ? 'nav-shop x' : 'nav-shop'}>
                <FontAwesomeIcon icon={faSearch} className='icon' />
                <Link to='/konto'><FontAwesomeIcon icon={faUserCircle} className='icon'/></Link>
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