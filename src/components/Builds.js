import React from 'react'
import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

const Builds = () => {
    return (
        <Container>
            <h4>Recommended Builds</h4>
            {/* All the data in content should come from a DB - get rid of hard coded data */}
            <Content>
                <Wrap to='/details'> 
                    <img src="./images/thumb-test.jpg" alt='buildimg'/>
                </Wrap>  
                <Wrap> 
                    <img src="./images/thumb-test.jpg" alt='buildimg'/>
                </Wrap>  
                <Wrap> 
                    <img src="./images/thumb-test.jpg" alt='buildimg'/>
                </Wrap>  
                <Wrap> 
                    <img src="./images/thumb-test.jpg" alt='buildimg'/>
                </Wrap>  
                <Wrap> 
                    <img src="./images/thumb-test.jpg" alt='buildimg'/>
                </Wrap>  
                <Wrap> 
                    <img src="./images/thumb-test.jpg" alt='buildimg'/>
                </Wrap>  
                <Wrap> 
                    <img src="./images/thumb-test.jpg" alt='buildimg'/>
                </Wrap>  
                <Wrap> 
                    <img src="./images/thumb-test.jpg" alt='buildimg'/>
                </Wrap>  
                <Wrap> 
                    <img src="./images/thumb-test.jpg" alt='buildimg'/>
                </Wrap>  
                <Wrap> 
                    <img src="./images/thumb-test.jpg" alt='buildimg'/>
                </Wrap>  

            </Content>
        </Container>
    )
}

export default Builds


const Container = styled.div`

`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrap = styled(LinkR)`
    cursor: pointer;
    border-radius: 20px;
    overflow: hidden;
    border: 3px solid rgba(249,249, 249, 0.1);
    box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;



    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgba(0 0 0 / 72%) 0px 30px 58px -16px,
        rgb(0 0 0 / 73%) 0px 30px 22px -10px;
        
    }   
`