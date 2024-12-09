import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    height: 90vh;
`

export const Container = styled.div`
    padding: 15px;
    display: flex;
    flex-flow: column nowrap;

    /* display: grid; 
    grid-template-columns: repeat(4, 20%);
    grid-template-rows: 20% 20% 10% 20% 10% 20%;
    justify-content: center; 
    align-content: center;
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
    } */

    .a {
        order: 6;
    }

    .b {
        order: 0;
    }

    .c {
        order: 3;
    }

    .d { 
        order: 1;
    }

    .e {
        order: 2;
    }

    .f {
        order: 7;
    }

    .g {
        order: 5;
    }

    .h {
        order: 4;
    }
`

export const BentoElement = styled.div`
    display: flex;
    flex-flow: column nowrap;
    border-radius: 8px;
    padding: 15px;
    background: ${({background, theme}) => `${theme.colors[background]}`};
    align-items: center; 
    margin-bottom: 10px;
    overflow: hidden;

    /* display: flex;
    flex-flow: column nowrap;
    border-radius: 8px;
    padding: 0 15px;
    background: ${({background, theme}) => `${theme.colors[background]}`};
    align-items: center;
    justify-content: space-evenly;
    overflow: hidden;

    Text {
        flex-grow: 2;
    }

    Image {
        flex-shrink: 4;
    } */
`

export const Footer = styled.div`
    margin: 0 auto;
    text-align: center;

    a {
        color: ${({theme}) => theme.colors.darkPurple}
    }
`

export const Text = styled.p`
    color: ${({theme, color}) => `${theme.colors[color]}`};
    font-weight: ${({fontWeight}) => `${fontWeight}`};
    font-size: ${({size}) => size && `${size}`};
    text-align: ${({text}) => text && `${text}`};
    margin: 10px;

    span {
        color: ${({theme, spanColor}) => `${theme.colors[spanColor]}`};
        font-style: italic;
    }
`

export const Image = styled.img`
    max-width: 100%;
    width: ${({width}) => width && `${width}%`};
    position: ${({position}) => position && `${position}`};
    height: auto; 
    align-self: ${({align}) => align && `${align}`};
`