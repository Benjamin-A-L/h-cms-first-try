import * as React from "react"
import { Link, graphql } from "gatsby"
import { SliceZone } from "@prismicio/react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { components } from '../slices'

const SecondPage = (props) =>{
  console.log(props);
  return(
    <Layout>
      <Seo title={props.data.prismicPage.data.title} description={props.data.prismicPage.data.description}/>
      <SliceZone components={components} slices={props.data.prismicPage.data.body}/>
      <Link to="/">Go back to the homepage</Link>
  </Layout>
  )
}

export const query = graphql`
  query PageQuery($id: String){
    prismicPage(id:{eq: $id}){
      data{
        title
        description
        body{
          ... on PrismicPageDataBodyRichText {
            id
            slice_type
            primary {
              rich_text_content {
                richText
              }
            }
          }
          ... on PrismicPageDataBodyForm {
                id
                slice_type
                primary {
                  form_endpoint
                }
                items {
                  imput_type
                  is_required
                  placeholder
                }
              }
            }
        page_title{
          text
          richText
        }
      }
    }
  }`

export default SecondPage