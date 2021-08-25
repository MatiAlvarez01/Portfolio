import React from "react";
import styled from "styled-components";
import ContactForm from "../../Español/Contacto/ContactoForm";

const ContainDiv = styled.div`
    background-image: url('/gmail.jpg'); /*o study.jpg*/
    box-shadow: inset 0 0 0 1000px rgba(0,0,0,.45);
    height: 100vh;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
    background-position-x: 48%;
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

const labels = {
    name: "Name",
    mail: "Email",
    subject: "Subject",
    message: "Message",
    button: "Send"
}

function Contact() {
    return (
        <ContainDiv id="Contact">
            <Title>Do not hesitate to contact me!</Title>
            <ContactForm labels={labels}/>
        </ContainDiv>
    )
}

export default Contact;