import React from "react"
import styled from "styled-components";

const ContainDiv = styled.div`
    background-image: url('/code.jpg');
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,.35);
    height: 100vh;
    color: white;
    background-position-x: 30%;
    @media screen and (min-width:1920px) {
        background-size: cover;
    }
`

function Home() {
    return (
        <ContainDiv id="Home">
            Home
        </ContainDiv>
    )
}

export default Home;