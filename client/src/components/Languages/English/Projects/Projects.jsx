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
const ProjectDiv = styled.div`
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
const ProjectImg = styled.img`
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
const ProjectInfo = styled.span`
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

function Projects() {
    return (
        <ContainDiv id="Projects">
            <Title>Projects</Title>
            <ProjectDiv>
                <a href="https://matia-countries.vercel.app" target="_blank" rel="noreferrer">
                    <ProjectImg src="countriesProyect.jpg"/> 
                </a>
                <ProjectInfo>A web that shows 250 countries. It allows you to search by name, filter by categories, and add new tourist activities to each country. <TextUnderline>Front</TextUnderline>: ReactJS and Redux. <TextUnderline>Back</TextUnderline>: NodeJS, Express, Sequelize.</ProjectInfo>
            </ProjectDiv>
            <ProjectDiv>
                <a href="https://pf-regionales.vercel.app" target="_blank" rel="noreferrer">
                    <ProjectImg src="eCommerceProject.jpg"/> 
                </a>
                <ProjectInfo>E-Commerce was developed in group with the Scrum agile methodology. It has all: Products filters, Log in, cart, checkout, Admin Panel to control products and show sales statistics.</ProjectInfo>
            </ProjectDiv>
            <ProjectDiv>
                <a href="https://matia-notes.vercel.app" target="_blank" rel="noreferrer">
                    <ProjectImg src="notesProject.jpg"/> 
                </a>
                <ProjectInfo>A web create and save notes. It allows you to put notes on favs. (one of my first projects) <TextUnderline>Front</TextUnderline>: ReactJS.</ProjectInfo>
            </ProjectDiv>
        </ContainDiv>
    )
}

export default Projects;