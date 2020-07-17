import React from "react";
import {Link} from "react-router-dom";
import logo from './../../assets/lisc_szarosc.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
    <div className='Footer' id='contact'>
        <div className='socialMedia container'>
            <div className='header'>Social Media</div>
            <div className='iconContainer'>
                <a href='https://www.facebook.com/API-Drogeria-116676926763413/'><FontAwesomeIcon icon={faFacebookSquare} className='facebook' /></a>
                <a href='https://www.instagram.com/api_drogeria/?hl=pl'><FontAwesomeIcon icon={faInstagram} className='instagram' /></a>
                <a href='https://www.linkedin.com/in/bartlomiej-struzyk/'><FontAwesomeIcon icon={faLinkedin} className='linkedIn' /></a>
            </div>
        </div>
        <div className='newsletter'>
            <input />
            <button>Newsletter</button>
        </div>
        <div className='bottom'>
            <Link to='/regulamin' className='rules'>Regulamin</Link>
            <Link to='/polityka-prywatnosci' className='private-policy'>Polityka prywatności</Link>
        </div>
        <div className='copyright'>
            <img src={logo} alt='logo' />
            <div>&copy; 2020 API Group</div>
        </div>
    </div>
)

export default Footer;