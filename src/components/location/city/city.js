import React from 'react';

import './city.scss';

const City = ({ name }) => {
    return (
        <li className="city">
            {name}
        </li>
    )
}

export default City;