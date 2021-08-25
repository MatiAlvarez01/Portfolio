import React from "react";
import styled from "styled-components";

const ContainDiv = styled.div`
    background-image: url('/work.jpg');
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,.60);
    height: 100vh;
    color: white;
    background-position: bottom;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (min-width:1920px) {
        background-size: cover;
    }
`
const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    height: 80%;
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
const Info = styled.span`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    text-align: center;
    font-size: 20px;
    margin: 0 1% 0 1%;
    @media screen and (min-width: 768px) {
        font-size: 25px;
    }
    @media screen and (min-width: 1440px) {
        width: 70%;
        font-size: 30px;
    }
    @media screen and (min-width: 2560px) {
        font-size: 35px;
    }
`

function SobreMi() {
    return (
        <ContainDiv id="SobreMi">
            <TextDiv>
                <Title>Sobre Mi</Title>
                <Info>Apasionado por el mundo IT, crear e innovar. Soy una persona curiosa que me gusta entender todo lo que me rodea. Busco ser participe del cambio.</Info>
                <Info>Comencé mis estudios en la Universidad de Ciencias Económicas, en la carrera de Contador Público. 
                Cuando me faltaban 4 materias para recibirme, me di cuenta que no era lo que queria para mi futuro. Sin embargo, tengo propuesto finalizar la carrera.</Info>
                <Info>Actualmente me desempeño como Desarrollador web FullStack. Es una profesion donde encuentro todo lo que me gusta, y me da la posibilidad de tener
                el estilo de vida que deseo.</Info>
            </TextDiv>
        </ContainDiv>
    )
}

export default SobreMi;