import React from "react";
import styled from "styled-components";

const ContainDiv = styled.div`
    background-image: url('/me.jpg');
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,.45);
    height: 100vh;
    color: white;
    background-position: top;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media screen and (min-width:1920px) {
        background-size: cover;
    }
`
const Title = styled.h1`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-style: italic;
    @media screen and (min-width: 768px) {
        font-size: 35px;
    }
    @media screen and (min-width: 1440px) {
        font-size: 40px;
    }
    @media screen and (min-width: 2560px) {
        font-size: 55px;
    }
`
const ProyectoDiv = styled.div`
`
const ProyectoImg = styled.img`
`
const ProyectoInfo = styled.span`
`

function Proyects() {
    return (
        <ContainDiv id="Proyects">
            <Title>Proyects</Title>
            <ProyectoDiv>
                <ProyectoImg></ProyectoImg>
                <ProyectoInfo></ProyectoInfo>
            </ProyectoDiv>
            <ProyectoDiv>
                <ProyectoImg></ProyectoImg>
                <ProyectoInfo></ProyectoInfo>
            </ProyectoDiv>
            <ProyectoDiv>
                <ProyectoImg></ProyectoImg>
                <ProyectoInfo></ProyectoInfo>
            </ProyectoDiv>
        </ContainDiv>
    )
}

export default Proyects;