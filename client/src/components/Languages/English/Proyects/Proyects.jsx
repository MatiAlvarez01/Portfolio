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
const ProyectDiv = styled.div`
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
const ProyectImg = styled.img`
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
const ProyectInfo = styled.span`
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

function Proyects() {
    return (
        <ContainDiv id="Proyects">
            <Title>Proyects</Title>
            <ProyectDiv>
                <a href="https://github.com/MatiAlvarez01/PI-Countries" target="_blank" rel="noreferrer">
                    <ProyectImg src="countriesProyect.jpg"/> 
                </a>
                <ProyectInfo>Web that show 250 countries. It allow you to search by name, filter by categories, and add new turist activities to each country. <TextUnderline>Front</TextUnderline>: 
                ReactJS y Redux. <TextUnderline>Back</TextUnderline>: NodeJS, Express, Sequelize.</ProyectInfo>
            </ProyectDiv>
            <ProyectDiv>
                <a href="https://github.com/MatiAlvarez01/PI-Countries" target="_blank" rel="noreferrer">
                    <ProyectImg src="countriesProyect.jpg"/> 
                </a>
                <ProyectInfo>Web that show 250 countries. It allow you to search by name, filter by categories, and add new turist activities to each country. <TextUnderline>Front</TextUnderline>: 
                ReactJS y Redux. <TextUnderline>Back</TextUnderline>: NodeJS, Express, Sequelize.</ProyectInfo>
            </ProyectDiv>
            <ProyectDiv>
                <a href="https://github.com/MatiAlvarez01/PI-Countries" target="_blank" rel="noreferrer">
                    <ProyectImg src="countriesProyect.jpg"/> 
                </a>
                <ProyectInfo>Web that show 250 countries. It allow you to search by name, filter by categories, and add new turist activities to each country. <TextUnderline>Front</TextUnderline>: 
                ReactJS y Redux. <TextUnderline>Back</TextUnderline>: NodeJS, Express, Sequelize.</ProyectInfo>
            </ProyectDiv>
        </ContainDiv>
    )
}

export default Proyects;