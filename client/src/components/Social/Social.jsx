import React from "react"
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';

const ContainDiv = styled.div`
    height: 360%;
    position: absolute;
    left: 91%;
    top: 45%;
    @media screen and (min-width: 768px) {
        left: 92%;
    }
    @media screen and (min-width: 1024px) {
        left: 94%;
    }
    @media screen and (min-width: 1920px) {
        left: 95%
    }
`
const LogosDiv = styled.div`
    position: sticky;
    top: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;

`

function Social() {
    return (
        <ContainDiv>
            <LogosDiv>
                <IconButton 
                    color="inherit" 
                    href="https://www.linkedin.com/in/matialvarez/" 
                    target="_blank"
                    ><LinkedInIcon /></IconButton>
                <IconButton 
                    color="inherit" 
                    href="https://github.com/MatiAlvarez01" 
                    target="_blank"
                    ><GitHubIcon /></IconButton>
                <IconButton 
                    color="inherit" 
                    href="https://www.instagram.com/_matialvarez/" 
                    target="_blank"
                    ><InstagramIcon /></IconButton>
                <IconButton 
                    color="inherit" 
                    href="https://twitter.com/_MatiAlvarez" 
                    target="_blank"
                    ><TwitterIcon /></IconButton>
                <IconButton 
                    color="inherit"
                    href="mailto:matialvarez.arg@gmail.com"
                    ><EmailIcon /></IconButton>
            </LogosDiv>
        </ContainDiv>
    )
}

export default Social;