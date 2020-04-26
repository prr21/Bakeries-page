import React from 'react';

import City from '../city/city';
import './cityColumn.scss';

const CityColumn = ({ col }) => {

    return (
        <ul className="city-column-list">
            {
                col.map(city => <City key={city.id} name={city.name}/>)
            }
        </ul>
    )
}

export default CityColumn;