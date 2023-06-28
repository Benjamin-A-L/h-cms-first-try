import styled from "styled-components";

export const Header = styled.div`
    background: black;
    display: flex;
`


export const Menu = styled.div`
    line-height: 60px;
    display: flex;
    a{  
        margin-inline: 2rem;       
        color: white;
        &:hover{
            color: orange
        }
    }    
`