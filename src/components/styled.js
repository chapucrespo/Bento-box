import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh
`
export const Container = styled.div`
    display: grid; 
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 0.5fr 1fr;
    gap: 10px; 
    width: 100%;
    height: 100%;
    box-sizing: border-box; 
    padding: 3.125rem 18.75rem;

    .a, .c {
		grid-row: span 2;
    }

    .b, .h {
        grid-column: span 2;
    }
`

export const BentoElement = styled.div`
    border: 1px solid red;
    border-radius: 8px;
`

export const Footer = styled.div`
    margin: 0 auto;

    a {
        color: ${({theme}) => theme.colors.darkPurple}
    }
`