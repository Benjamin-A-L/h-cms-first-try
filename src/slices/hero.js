import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { HeroWrapper } from "./hero.styles.js";

export const Hero = (props) => {
    console.log('hero props ',props);
    return<HeroWrapper image={props.slice.primary.background_img.gatsbyImageData}>
        <PrismicRichText field={props.slice.primary.title.richText}/>
        <PrismicRichText field={props.slice.primary.subtitle.richText}/>
    </HeroWrapper>
}