import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"

const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    margin: 4%;
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    };
`
const ContainDiv = styled.div`
    background-image: url('/landingImg.jpg');
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,.50);
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 1024px) {
        flex-direction: row;
    }
    @media screen and (max-width: 680px) {
        background-position-x: 20%;
    }
    @media screen and (min-width:1920px) {
        background-size: cover;
    }
`
const Button = styled.button`
    background-color: white;
    color: black;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 300;
    font-size: 3rem;
    border-radius: 10px;
    padding: 7%;
    border: 0px;
    &:hover {
        background: #CED3DB;
        background-image: -webkit-linear-gradient(top, #CED3DB, #828F9D);
        background-image: -moz-linear-gradient(top, #CED3DB, #828F9D);
        background-image: -ms-linear-gradient(top, #CED3DB, #828F9D);
        background-image: -o-linear-gradient(top, #CED3DB, #828F9D);
        background-image: -webkit-gradient(to bottom, #CED3DB, #828F9D);
    }
    @media screen and (min-width: 2560px) {
        font-size: 5rem;
    }
`

function LanguageSelect() {
    return (
        <ContainDiv>
                <StyledLink to="/english"><Button>English</Button></StyledLink>
                <StyledLink to="/español"><Button>Español</Button></StyledLink>
        </ContainDiv>
    )
}

export default LanguageSelect;