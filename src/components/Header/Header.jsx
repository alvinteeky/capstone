import React from "react";
import BlockRevealAnimation from 'react-block-reveal-animation';
import { AppWrap } from '../../wrapper';
import './Header.css';

import { useContext } from "react";
import DataContext from "../../DataContext";

import { pulse } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const Pulse = styled.div`animation: 6s ${keyframes`${pulse}`} infinite`;

const Header = () => {

    const { title, location, description, btnname, image} = useContext(DataContext);
    
    return ( 
    <header>
        
        <div className="header-data">
            <BlockRevealAnimation color="#F4CE14">
                <h1>
                    {title}
                </h1>
            </BlockRevealAnimation>
            <BlockRevealAnimation color='#EDEFEE'>
                <h3>
                    {location}
                </h3>
                <p>
                    {description}
                </p>
            </BlockRevealAnimation>
            <BlockRevealAnimation color="#F4CE14">
                <button>
                    {btnname}
                </button>
            </BlockRevealAnimation>
        </div>
        <BlockRevealAnimation color='#333333'>
            <Pulse>
                <div 
                    className="header-image"
                    style={{backgroundImage:`url(${image})`}}
                />
            </Pulse>
        </BlockRevealAnimation>
    </header> );
}

export default AppWrap(Header, 'Landing', 'header');