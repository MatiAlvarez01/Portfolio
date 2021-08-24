import React from "react"
import styled from "styled-components";

const ContainDiv = styled.div`
    background-image: url('/code.jpg');
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,.50);
    height: 100vh;
    color: white;
    background-position-x: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 1920px) {
        background-size: cover;
    }
`
const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`
const Title = styled.h1`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 4rem;
    text-align: center;
    @media screen and (min-width: 768px) {
        font-size: 5rem;
    }
    @media screen and (min-width: 1440px) {
        font-size: 7rem;
    }
    @media screen and (min-width: 2560px) {
        font-size: 9rem;
    }
`
const SubTitle = styled.span`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 300;
    font-size: 2rem;
    text-align: center;
    @media screen and (min-width: 768px) {
        font-size: 3rem;
    }
    @media screen and (min-width: 1440px) {
        font-size: 4rem;
    }
    @media screen and (min-width: 2560px) {
        font-size: 5rem;
    }
`
const Stack = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 4%;
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,.25);
    border-radius: 25px;
`
const SubStackDiv = styled.div`
`
const Tech = styled.p`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 300;
    font-size: 20px;
    @media screen and (min-width: 2560px) {
        font-size: 30px;
    }
`

function Inicio() {
    return (
        <ContainDiv id="Inicio">
            <TextDiv>
                <Title>Matias Alvarez</Title>
                <SubTitle>FullStack Developer</SubTitle>
                <Stack>
                    <SubStackDiv>
                        <Tech>HTML</Tech>
                        <Tech>CSS</Tech>
                        <Tech style={{color:"#F7DF1E"}}>JavaScript</Tech>
                        <Tech style={{color: "#5ED7F2"}}>ReactJS</Tech>
                        <Tech style={{color: "#5ED7F2"}}>Redux</Tech>
                    </SubStackDiv>
                    <SubStackDiv>
                        <Tech style={{color: "#5ED7F2"}}>React Native</Tech>
                        <Tech style={{color: "#6EBF49"}}>NodeJS</Tech>
                        <Tech style={{color: "#6EBF49"}}>Express</Tech>
                        <Tech style={{color: "#8AABBF"}}>PostgreSQL</Tech>
                        <Tech style={{color: "#2A86BF"}}>Sequelize</Tech>
                        <Tech style={{color: "#3178C6"}}>TypeScript</Tech>
                    </SubStackDiv>
                </Stack>
            </TextDiv>
        </ContainDiv>
    )
}

export default Inicio;