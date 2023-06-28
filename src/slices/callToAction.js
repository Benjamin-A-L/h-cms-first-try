import React from "react";
import { CallToActionWrapper, StyledLink, StyledImage } from "./callToAction.styles";
import { PrismicRichText } from "@prismicio/react";
import { GatsbyImage } from "gatsby-plugin-image";

export const CallToAction = (props) => {
    console.log('CTA props ', props)
    
    return(
    <CallToActionWrapper>
        <div>
            <PrismicRichText field={props.slice.primary.title1.richText}/>
            <PrismicRichText field={props.slice.primary.content.richText}/>
            <StyledLink to={`/${props.slice.primary.destination_page.uid}`}>
                {props.slice.primary.destination_label_text}
            </StyledLink>
        </div>
        <div>
            <StyledImage image={props.slice.primary.image.gatsbyImageData} />
        </div>
    </CallToActionWrapper>
    )
}