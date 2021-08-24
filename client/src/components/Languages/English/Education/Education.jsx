import React from "react";
import styled from "styled-components";

const ContainDiv = styled.div`
    background-image: url('/study.jpg');
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,.45);
    height: 100vh;
    color: white;
    background-position: right;
    @media screen and (min-width:1920px) {
        background-size: cover;
    }
`

function Education() {
    return (
        <ContainDiv id="Education">
            Education
        </ContainDiv>
    )
}

export default Education;