import React, { useState, useEffect } from 'react';

import Spinner from '../UI/spinner';
import Error from '../UI/error';
import CityColumn from './cityColumn/cityColumn';

import BakeriesData from '../../services/data-services';
import './location.scss';

const bakeriesApi = new BakeriesData();

const Location = () => {
    const [ cityColumns, setCityColumns ] = useState(null);
    const [ status, setStatus ]           = useState( {loading: true, error: false} );

    useEffect(() => {
        getData()
        
    }, [])

    const getData = () => {
        bakeriesApi.getCities()
        .then(data => {
            setStatus( {loading: false, error: false} )
            renderColumns(data)
        
        }).catch(() => {
            setStatus( {loading: false, error: true} )
        })
    };

    const renderColumns = (list) => {
        let columns = [];
        let citiesInCol = [];
        let columnsCount = 5;
        let inOneCol = Math.floor(list.length / columnsCount);

        for (let i = 0; i < list.length; i++){
            if (columns.length >= columnsCount) break;
            
            let newCity = list[i];
            citiesInCol.push(newCity);

            if (citiesInCol.length === inOneCol){
                columns.push(
                    <CityColumn key={newCity.id}
                        col={citiesInCol}
                    />
                );
                citiesInCol = [];
            }
        }
        setCityColumns(columns);
    }


    if (status.loading){
        return <Spinner />
        
    } else if (status.error) {
        return <Error />
        
    } else {
        return (
            <div className="locations">
                <div className="locations-title">
                    <h3>Our most popular locations</h3>
                </div>
                <div className="locations-list">
                    {cityColumns}
                </div>
            </div>
        )
    }
}

export default Location;