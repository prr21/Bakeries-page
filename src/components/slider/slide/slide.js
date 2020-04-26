import React from 'react';

import './slide.scss';

const Slide = ({ imgId, bakName }) => {
    const url = `http://api.dev.cakeiteasy.no/api/store/images/${imgId}/?size=small_url&compress_type=webp`;

    return (
        <div className="slide-img">
            <img src={url} alt={bakName}></img>
        </div>
    )
}

export default Slide;