import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
    <div className='Footer'>
        <div className='socialMedia container'>
            <div className='header'>Social Media</div>
            <div className='iconContainer'>
                <FontAwesomeIcon icon={faFacebookSquare} className='facebook' />
            </div>
        </div>
    </div>
)

export default Footer;