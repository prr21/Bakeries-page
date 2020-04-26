import React, { useState, useEffect } from 'react';

import Header from '../header';
import Slider from '../slider';
import About from '../about';
import Location from '../location';
import Footer from '../footer';

import Spinner from '../UI/spinner';
import Error from '../UI/error';
import BakeriesData from '../../services/data-services';

import './app.scss';

const bakeriesApi = new BakeriesData();

const App = () => {
  const [ bakeriesList, setBakeriesList ] = useState(null);
  const [ sliderStatus, sliderSetStatus ] = useState( {loading: true, error: false} );

  useEffect(() => {
    getData();

  }, [])

  const getData = () => {
    bakeriesApi.getBakaries()
      .then(data => {
        let dataArr = data.filter(b => b.picture)
        setBakeriesList(dataArr)

        sliderSetStatus( {loading: false, error: false} )

      }).catch(() => {
        sliderSetStatus( {loading: false, error: true} )
      })
  };

  let sliderSection;

  if (sliderStatus.loading){
    sliderSection = <Spinner />

  } else if (sliderStatus.error){
    sliderSection = <Error />

  } else {
    sliderSection = <Slider bakeries={bakeriesList}/>
  }

  return (
  <React.Fragment>
    <div className="container">
      <Header />

      <div className="section">
        {sliderSection}
      </div>

      <div className="section">
        <About />
      </div>

      <div className="section">
        <Location />
      </div>

    </div>
    <Footer />

  </React.Fragment>
  );
}

export default App;
