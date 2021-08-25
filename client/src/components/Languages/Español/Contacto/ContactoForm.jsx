import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const FormDiv = styled.div`
    box-shadow: inset 0 0 0 1000px rgba(242, 38, 19, 0.50);
    border-radius: 10px;
    height: 50%;
    width: 80%;
    padding: 1%;
    @media screen and (min-width: 1024px) {
        width: 48%;
    }
    @media screen and (min-width: 1440px) {
        width: 40%;
    }
    @media screen and (min-width: 1920px) {
        width: 30%;
    }
    @media screen and (min-width: 2560px) {
        width: 25%;
    }
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
`
const Label = styled.label`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 20px;
    @media screen and (min-width: 1024px) {
        font-size: 25px;
    }
    @media screen and (min-width: 1440px) {
        font-size: 27px;
    }
    @media screen and (min-width: 1920px) {
        font-size: 30px;
    }
    @media screen and (min-width: 2560px) {
        font-size: 35px;
    }
`
const Input = styled.input`
    font-family: 'Josefin Sans', sans-serif;
    text-align: center;
    width: 90%;
    font-size: 17px;
    @media screen and (min-width: 1024px) {
        font-size: 21px;
    }
    @media screen and (min-width: 1440px) {
        font-size: 23px;
    }
    @media screen and (min-width: 1920px) {
        font-size: 25px;
    }
    @media screen and (min-width: 2560px) {
        font-size: 30px;
    }
`
const TextInput = styled.textarea`
    font-family: 'Josefin Sans', sans-serif;
    width: 90%;
    font-size: 17px;
    resize: none;
    @media screen and (min-width: 1024px) {
        font-size: 21px;
    }
    @media screen and (min-width: 1440px) {
        font-size: 23px;
    }
    @media screen and (min-width: 1920px) {
        font-size: 25px;
    }
    @media screen and (min-width: 2560px) {
        font-size: 30px;
    }
`
const ButtonSubmit = styled.button`
    width: 50%;
    align-items: center;
`

function ContactoForm({labels}) {

    const [formInfo, setFormInfo] = useState({
        name: "",
        mail: "",
        subject: "",
        message: ""
    });

    function handleFormChange(e) {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:3002/sendEmail", formInfo)
            .then(emailSended => {
                if (emailSended.status === 200) {
                    setFormInfo({
                        name: "",
                        mail: "",
                        subject: "",
                        message: ""
                    })
                    alert("Email enviado con éxito! Muchas gracias.")
                } else { 
                    alert(emailSended.statusText)
                }
            })
    }

    return  (
        <FormDiv>
            <Form onSubmit={handleFormSubmit}>
                <Label>{labels.name}:</Label>
                <Input 
                    type="text"
                    name="name"
                    value={formInfo.name}
                    onChange={handleFormChange}
                    autoComplete="none"
                    required
                />
                <Label>{labels.mail}:</Label>
                <Input 
                    type="text"
                    name="mail"
                    value={formInfo.mail}
                    onChange={handleFormChange}
                    required
                />
                <Label>{labels.subject}:</Label>
                <Input 
                    type="text"
                    name="subject"
                    value={formInfo.subject}
                    onChange={handleFormChange}
                    required
                />
                <Label>{labels.message}:</Label>
                <TextInput 
                    type="text"
                    name="message"
                    value={formInfo.message}
                    onChange={handleFormChange}
                    rows="5"
                    required
                />
                <ButtonSubmit>{labels.button}</ButtonSubmit>
            </Form>
        </FormDiv>
    )
}

export default ContactoForm;