import React from 'react'
import styled from 'styled-components'
import Builds from './Builds'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'

const home = () => {
    return (
        <>
            <Container>
                <ImgSlider />
                <Viewers />
                <Builds />
            </Container>
        </>
    )
}

export default home


const Container = styled.div`
    overflow-x: hidden;
    min-height: calc(100vh - 70px);
    position: relative;
    background-color: #1a1c30;
    padding: 0 calc(3.5vw + 5px);
`