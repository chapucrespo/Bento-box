import styled from "styled-components";

const Container = styled.div`
    display: grid; 
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 0.5fr 1fr;
    gap: 10px; 
    width: 100vw; 
    height: 100vh; 
    margin: 0 auto; 
    box-sizing: border-box; 
    padding: 3.125rem 18.75rem;

    .a, .c {
		grid-row: span 2;
    }

    .b, .h {
        grid-column: span 2;
    }
`

export default Container