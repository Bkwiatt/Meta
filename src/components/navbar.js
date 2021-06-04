import React from 'react'
import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

const navbar = () => {
    
    return (
        <>
            <Nav>
                <LogoWrapper to="/">
                    <Logo src='../images/mLogo.png' />
                </LogoWrapper>             
                

                <NavLinks>
                    <a href="/">
                        <img src='../images/home-icon.svg' alt='navimg'/>
                        <span>Home</span>
                    </a>
                    <a href="/">
                        <img src='../images/movie-icon.svg' alt='navimg'/>
                        <span>Influencers</span>
                    </a>
                    <a href="/">
                        <img src='../images/watchlist-icon.svg' alt='navimg'/>  
                        <span>Builds</span>
                    </a>
                    <a href="/">
                        <img src='../images/original-icon.svg' alt='navimg'/>
                        <span>Records</span>
                    </a>
                </NavLinks>
                <NavAuthentication>
                    <img src='../images/profilepic.jpg' alt='navimg'/>
                </NavAuthentication>
                
                
                
            </Nav>
            
        </>
    )
}

export default navbar


const Nav = styled.nav`
    z-index: 1;
    background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(26,28,48,1) 100%, rgba(26,28,48,1) 100%);
    position: sticky;
    top: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;

`

const NavLinks = styled.div`
    align-items: center;
    display: flex;
    flex: 1;
    margin-left: 30px;

    a {
        display: flex;
        text-decoration: none;
        align-items: center;
        text-transform: uppercase;
        padding: 0 12px;
        color: white;
        cursor: pointer;

        &:hover {
            color: red;
        }

        img {
            width: 20px;
        }
    }

    span {
        font-size: 15px;
        padding: 10px;
        letter-spacing: 1.4px;
    }

   
`

const NavAuthentication = styled.div`
    img {
        width: 50px;
        border-radius: 50%;
    }
`

const Logo = styled.img`
    width: 60px;
`

const LogoWrapper = styled(LinkR)`
    cursor: pointer;
`