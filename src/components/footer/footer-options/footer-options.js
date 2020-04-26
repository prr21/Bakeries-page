import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

import flagNorway from '../../../images/norway-flag.png';
import flagSweden from '../../../images/sweden-flag.png';

import './footer-options.scss';

const FooterOptions = () => {
    const iconInst = <FontAwesomeIcon icon={faInstagram} />
    const iconFB = <FontAwesomeIcon icon={faFacebookF} />

    const imgNorway = {
      backgroundImage: `url(${flagNorway})`
    }
    const imgSweden = {
      backgroundImage: `url(${flagSweden})`
    }
  
    return (
      <div className="footer-col">

        <div className="foot__section">
          <div className="foot__section-items">

            <div className="link-item">
              <a href="https://instagram.com"
                className="link-item__logo"> {iconInst}
              </a>
            </div>

            <div className="link-item">
              <a href="https://facebook.com"
                className="link-item__logo"> {iconFB}
              </a>
            </div>

          </div>          
        </div>

        <div className="foot__section">
          <h6 className="foot__section-title">Contries</h6>

          <div className="foot__section-items">
            <div className="flag-item" style={imgSweden}></div>
            <div className="flag-item" style={imgNorway}></div>
          </div>

        </div>

        <div className="foot__section">
          <h6 className="foot__section-title">Language</h6>

          <div className="foot__section-items">
            <a href="/#" className="lang-item">NO</a>
            <span style={{color:'#8e8e8e'}}>|</span>
            <a href="/#" className="lang-item active">EN</a>
          </div>

        </div>

      </div>
    )
}

export default FooterOptions