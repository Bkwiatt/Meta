import React from 'react'
import styled from 'styled-components'

const navbar = () => {
    
    return (
        <>
            <Nav>                
                <Logo src='../images/mLogo.png' />

                <NavLinks>
                    <a href="/">
                        <img src='../images/home-icon.svg' />
                        <span>Home</span>
                    </a>
                    <a href="/">
                        <img src='../images/movie-icon.svg' />
                        <span>Influencers</span>
                    </a>
                    <a href="/">
                        <img src='../images/watchlist-icon.svg' />  
                        <span>Games</span>
                    </a>
                    <a href="/">
                        <img src='../images/original-icon.svg' />
                        <span>Records</span>
                    </a>
                </NavLinks>
                <NavAuthentication>
                    <img src='../images/profilepic.jpg' />
                </NavAuthentication>
                
                
                
            </Nav>
            
        </>
    )
}

export default navbar


const Nav = styled.nav`
    background-color: #1a1c30;
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