import React from "react";
import styled from "styled-components";

export const PriceOptionsWrapper = styled.div`
    max-width: 960px;
    margin: 40px auto;
    display: flex;
    gap: 20px;
    `
export const PriceOption = styled.div`
    flex-grow: 1;
    flex-basis: 0;
    position: relative;
    padding: 20px;
    background-color: ${props => props.isMostPopular ? 'orange': '#eee'};
    color: ${props => props.isMostPopular ? 'white': 'black'}
`
export const MostPopularLabel = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    color: white;
    padding: 7px;
    font-size: 12px;
    background-color: limegreen;
    border-radius: 0 0 0 10px;
`