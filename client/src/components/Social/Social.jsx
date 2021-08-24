import React from "react"
import styled from "styled-components";

const ContainDiv = styled.div`
    height: 100%;
    position: absolute;
    left: 94%;
    top: 45%;
    @media screen and (min-width: 1024px) {
        left: 96%;
    }
    @media screen and (min-width: 2560px) {
        font-size: 1.5rem;
    }
`
const LogosDiv = styled.div`
    position: sticky;
    top: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;

`

function Social() {
    return (
        <ContainDiv>
            <LogosDiv>
            <span>S</span>
            <span>O</span>
            <span>C</span>
            <span>I</span>
            <span>A</span>
            <span>L</span>
            </LogosDiv>
        </ContainDiv>
    )
}

export default Social;