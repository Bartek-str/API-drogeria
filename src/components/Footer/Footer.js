import React from "react";
import logo from './../../assets/lisc_szarosc.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
    <div className='Footer'>
        <div className='socialMedia container'>
            <div className='header'>Social Media</div>
            <div className='iconContainer'>
                <FontAwesomeIcon icon={faFacebookSquare} className='facebook' />
                <FontAwesomeIcon icon={faInstagram} className='instagram' />
                <FontAwesomeIcon icon={faLinkedin} className='linkedIn' />
            </div>
        </div>
        <div className='newsletter'>
            <input value='adres e-mail' />
            <button>Newsletter</button>
        </div>
        <div className='bottom'>
            <div className='rules'>Regulamin</div>
            <div className='private-policy'>Polityka prywatności</div>
        </div>
        <div className='copyright'>
            <img src={logo} alt='logo' />
            <div>&copy; 2020 API Group</div>
        </div>
    </div>
)

export default Footer;