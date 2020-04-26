import React, { useState, useEffect } from 'react';

import Slide from './slide/slide';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import './slider.scss';

const Slider = ({ bakeries }) => {
    const iconPrev = <FontAwesomeIcon icon={faChevronLeft} />
    const iconNext = <FontAwesomeIcon icon={faChevronRight} />

    const [ bakeriesImgs, setBakeriesImg ] = useState(null);    // Array of Bakeries Logos
    const [ slideIdx, setNewSlideIdx ]     = useState(6);       // Slider index

    useEffect(() => {
        showSlide(slideIdx)

    }, [slideIdx])

    const showSlide = (index) => {
        let slides = [];
        let toIdx = index+4;

        for (let fromIdx = index; fromIdx < toIdx; fromIdx++) {

            let curBak = bakeries[fromIdx];

            slides.push(
                <Slide key ={ curBak.id }
                      imgId={ curBak.picture }
                    bakName={ curBak.name }
                >
                </Slide>
            )
        }
        setBakeriesImg(slides);
    }

    const moveSlide = (kf) => {
        let newIndex = slideIdx + kf;

        if (newIndex <= -1){
            return;
            //костыль((
        } else if (newIndex >= bakeries.length-3) {
            return;
        }
        setNewSlideIdx(newIndex)
    }

    return (
        <div className="slider">

            <div className="slider-nav" onClick={() => moveSlide(-1) }>
                <span> {iconPrev} </span>
            </div>

            {bakeriesImgs}

            <div className="slider-nav" onClick={() => moveSlide(1) }>
                <span> {iconNext} </span>
            </div>
        </div>
    )
}

export default Slider;