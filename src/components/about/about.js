import React from 'react';

import cookImg from  '../../images/bakery-cook.png';
import coinsImg from  '../../images/coins.png';
import deliveryImg from  '../../images/delivery.png';
import './about.scss';

const About = () => {
    return (
        <div className="about">

            <div className="about-item">
                <div className="item-top">
                    <div className="item-img">
                        <img alt="hand made bakires" src={cookImg}></img>
                    </div>
                </div>
                <div className="item-body">
                    <p>Hand made</p>
                    <p>by local bakires</p>
                </div>
            </div>

            <div className="about-item">
                <div className="item-top">
                    <div className="item-img">
                        <img alt="bakry price" src={coinsImg}></img>
                    </div>
                </div>
                <div className="item-body">
                    <p>Same price as from bakery</p>
                    <p>– but simpler</p>
                </div>
            </div>

            <div className="about-item">
                <div className="item-top">
                    <div className="item-img">
                        <img alt="send cakes" src={deliveryImg}></img>
                    </div>
                </div>
                <div className="item-body">
                    <p>Send cakes</p>
                    <p>anywhere</p>
                </div>
            </div>
            
        </div>
    )
}

export default About;