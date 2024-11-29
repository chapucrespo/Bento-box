import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    height: 90vh
`

export const Container = styled.div`
    display: grid; 
    grid-template-columns: repeat(4, 20%);
    grid-template-rows: 20% 20% 10% 20% 10% 20%;
    gap: 10px; 
    width: 100%;
    height: 100%;
    box-sizing: border-box; 
    padding: 3.125rem 18.75rem;

    .a, .f {
        grid-row: span 3;
    }
    
    .b, .h {
        grid-column: span 2;
    }

    .c {
        grid-row: span 4;
    }

    .b, .d, .e, .g, .h {
        grid-row: span 2;
    }
`

export const BentoElement = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    padding: 0 15px;
    background: ${({background, theme}) => `${theme.colors[background]}`};
    align-items: center;
    justify-content: space-evenly;
    overflow: hidden;
`

export const Footer = styled.div`
    margin: 0 auto;

    a {
        color: ${({theme}) => theme.colors.darkPurple}
    }
`

export const Text = styled.p`
    color: ${({theme, color}) => `${theme.colors[color]}`};
    font-weight: ${({big}) => big ? '500' : '300'};
    font-size: ${({size}) => size && `${size}`};
    text-align: ${({textAlign}) => textAlign ? `${textAlign}` : 'center'};

    span {
        color: ${({theme, color}) => `${theme.colors[color]}`};
        font-style: italic;
    }
`

export const Image = styled.img`
    max-width: 100%;
    width: ${({width}) => width && `${width}%`};
    position: ${({relativePosition}) => relativePosition && 'relative'};
    height: auto; 
`