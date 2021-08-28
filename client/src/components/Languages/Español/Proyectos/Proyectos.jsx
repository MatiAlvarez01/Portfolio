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
    box-shadow: inset 0 0 0 1000px rgba(103, 128, 159, 0.8);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 80%;
    margin-bottom: 2%;
    border-radius: 10px;
    @media screen and (min-width: 1440px) {
        width: 60%
    }
`
const ProyectoImg = styled.img`
    height: 150px;
    margin: 2% 1% 2% 1%;
    border-radius: 5px;
    @media screen and (min-width: 1024px) {
        height: 160px;
    }
    @media screen and (min-width: 2560px) {
        height: 210px;
    }
`
const ProyectoInfo = styled.span`
    font-family: 'Josefin Sans', sans-serif;
    text-align: center;
    margin-bottom: 2%;
    @media screen and (min-width: 1920px) {
        font-size: 20px;
        margin: 0 1% 2% 1%;
    }
    @media screen and (min-width: 2560px) {
        font-size: 25px;
    }
`
const TextUnderline = styled.a`
    text-decoration: underline;
`

function Proyectos() {
    return (
        <ContainDiv id="Proyectos">
            <Title>Proyectos</Title>
            <ProyectoDiv>
                <a href="https://matia-countries.vercel.app" target="_blank" rel="noreferrer">
                    <ProyectoImg src="countriesProyect.jpg"/> 
                </a>
                <ProyectoInfo>Web que muestra 250 paises. Permite buscar por nombre, ordenar por filtros, y agregarle actividades turisticas a cada uno. <TextUnderline>Front</TextUnderline>: 
                ReactJS y Redux. <TextUnderline>Back</TextUnderline>: NodeJS, Express, Sequelize.</ProyectoInfo>
            </ProyectoDiv>
            <ProyectoDiv>
                <a href="https://matia-notes.vercel.app" target="_blank" rel="noreferrer">
                    <ProyectoImg src="notesProject.jpg"/> 
                </a>
                <ProyectoInfo>Web para crear y guardar notas. Permite guardarlas en favoritos. (Uno de mis primeros projectos)<TextUnderline>Front</TextUnderline>: ReactJS</ProyectoInfo>
            </ProyectoDiv>
        </ContainDiv>
    )
}

export default Proyectos;