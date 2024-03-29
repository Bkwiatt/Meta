import React from 'react'
import styled from 'styled-components';

const Viewers = () => {
    return (
        <Container>
            <Wrap>
                <video autoPlay muted loop>
                    <source src="./videos/cw-viewer-video.mp4" type="video/mp4" />
                </video>
                <img src="./images/coldwar.png" alt='viewerimg'/>                
            </Wrap>
            <Wrap>
                <video autoPlay muted loop>
                    <source src="./videos/mw-viewer-video.mp4" type="video/mp4" />
                </video>
                <img src="./images/modernwarfare.png" alt='viewerimg' />
            </Wrap>
            
        </Container>
    )
}

export default Viewers


const Container = styled.div`
    margin-top: 30px;
    justify-content: center;
    display: grid;
    grid-gap: 25px;
    padding: 30px 0 26px;
    grid-template-columns: repeat(2, 400px);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
`

const Wrap = styled.div`
    position: relative;
    cursor: pointer;
    border-radius: 10px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        color: white;
    }

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0;
        transition: opacity 0.3s;

       
    }
    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        
        video {
            opacity: 1;
        }

        
   }
`