import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Navigation = props => (

        <nav className="navbar">
            <div className="nav-links">
                <a href="https://www.facebook.com/markkgitau/" target="_blank" rel='noreferrer noopener'>
                <FontAwesomeIcon icon={faFacebookF} size="2x"/>
                </a>
                <a href="https://www.instagram.com/gitaugram/" target="_blank" rel='noreferrer noopener'>
                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                </a>
                <a href="https://twitter.com/markgitau5/" target="_blank" rel='noreferrer noopener'>
                <FontAwesomeIcon icon={faTwitter} size="2x"/>
                </a>
            </div>
        </nav>
);

export default Navigation;