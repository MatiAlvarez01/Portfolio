import React from "react";
import styled from "styled-components";

const ContainDiv = styled.div`
    background-image: url('/work.jpg');
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,.45);
    height: 100vh;
    color: white;
    background-position: bottom;
    @media screen and (min-width:1920px) {
        background-size: cover;
    }
`

function Proyects() {
    return (
        <ContainDiv id="Proyects">
            Proyects
        </ContainDiv>
    )
}

export default Proyects;