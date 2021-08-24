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
        font-size: 45px;
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
        <ContainDiv id="AboutMe">
            <TextDiv>
                <Title>About Me</Title>
                <Info>Passionate about the IT world, creating and innovating. I'm a curious person who likes to understand everything that surrounds me. I want to be part of the change.</Info>
                <Info>I began my studies at the Univesity of Economic Sciences to become an Accountant. On my four last subjects, I realized that it wasn't what I want for my future.
                However, I want to finish my degree.</Info>
                <Info>I'm currently working as a FullStack Web Developer. It is a profession where I find everything I like, and it gives me the possibility of having
                the lifestyle I ever wanted.</Info>
            </TextDiv>
        </ContainDiv>
    )
}

export default SobreMi;