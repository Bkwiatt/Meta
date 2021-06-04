import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };

    return (
        <Corousel {...settings}>
            <Wrap>
                <img src='/images/mw-slider.png' alt="play"/>
            </Wrap>
            <Wrap>
                <img src='/images/kalei-slider.jpeg' alt="play"/>
            </Wrap>
            <Wrap>
                <img src='/images/coldwar-slider.jpeg' alt="play" />
            </Wrap>
            <Wrap>
                <img src='/images/aydan-slider.jpeg' alt="play" />
            </Wrap>
            <Wrap>
                <img src='/images/teepee-slider.jpeg' alt="play" />
            </Wrap>
            
        </Corousel>
        
    )}

export default ImgSlider


const Corousel = styled(Slider)`
    z-index: 0; 
    margin-top: 20px;
    ul li button {
        &:before { 
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }
    li.slick-active button::before {
        color: white;
    }
    .slick-list {
        overflow: visible;
    }
    button {
        z-index: 1;
    }
`

const Wrap = styled.div`
cursor: pointer;
    img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        border: 4px solid transparent;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 200ms;
        &:hover {
            border: 4px solid rgba(249, 249, 249, 0.8)
        }
    }
`