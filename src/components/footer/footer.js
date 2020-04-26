import React from 'react';
import FooterOptions from './footer-options/footer-options.js';

import './footer.scss';

const Footer = () => {

  return (
    <footer>
      <div className="footer">
        <div className="footer-content">

          <FooterOptions />

          <div className="footer-col">
            <div className="footer-nav">
              <h5 className="footer-nav__title">Customer service</h5>

              <ul className="footer-list">
                <a href="/#"> <li>FAQ</li>
                </a>
                <a href="/#"> <li>Terms of use</li>
                </a>
                <a href="/#"> <li>Privacy policy</li>
                </a>
                <a href="/#"> <li>Contact us</li>
                </a>
              </ul>
              
            </div>
          </div>
          
          <div className="footer-col">
            <div className="footer-nav">
              <h5 className="footer-nav__title">Information</h5>

              <ul className="footer-list">
                <a href="/#"> <li>How it works</li>
                </a>
                <a href="/#"> <li>About Cake it easy</li>
                </a>
                <a href="/#"> <li>For companies</li>
                </a>
                <a href="/#"> <li>Send cakes to multiple locations</li>
                </a>
                <a href="/#"> <li>Cake calendar</li>
                </a>
              </ul>
              
            </div>
          </div>
          
          <div className="footer-col">
            <div className="footer-nav">
              <h5 className="footer-nav__title">Customer service</h5>

              <ul className="footer-list">
                <a href="/#"> <li>Birthday cake</li> 
                </a>
                <a href="/#"> <li>Cake with image or logo</li> 
                </a>
                <a href="/#"> <li>Confirmation cake</li> 
                </a>
                <a href="/#"> <li>Baptisn cake</li> 
                </a>
                <a href="/#"> <li>Glutenfree cake</li> 
                </a>
              </ul>

            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer;