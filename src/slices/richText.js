import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { RichTextWrapper } from './richText.styled'
import { Link } from "gatsby";

export const RichText = (props) => {
    console.log('rich text props ', props)
    return(
        <RichTextWrapper>
            <PrismicRichText linkResolver={(doc) =>{
                if(doc.type === 'page'){
                    return(`${doc.uid}`)
                }
                else{return(doc.uid)}
            }} internalLinkComponent={({href, ...props}) =>(<Link to={href} {...props}/> )} field={props.slice.primary.rich_text_content.richText}/> 
        </RichTextWrapper>
    )
}