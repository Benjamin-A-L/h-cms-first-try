import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export const StyledLink = styled(Link)`
    color: white;
    background-color: orange;
    border-radius: 4px;
    padding: 5px 10px;    
`

export const CallToActionWrapper = styled.div`
    max-width: 960px;
    margin: 2rem auto;
    border-radius: 10px;
    background-color: #eee;
    display: flex;
    padding: 2rem;
    align-items: center;
    > div {
        &:first-child {
            flex-grow: 1;
        }
        &:last-child {
            width: 200px;
            min-width: 200px;
        }
    }
`

export const StyledImage = styled(GatsbyImage)`
    border-radius: 0.8rem;
`