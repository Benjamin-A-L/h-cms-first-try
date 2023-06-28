import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import {Menu, Header as HeaderStyled} from './header.styles.js'

const Header = ({ siteTitle }) => {
  
  const result = useStaticQuery(graphql`
  {
    prismicNav {
      data {
        menu {
          label
          destination_page {
            uid
          }
        }
      }
    }
  }`)
  
    console.log(result);
  return(
  <HeaderStyled>
    <Menu>
      {result.prismicNav.data.menu.map(menuItem => (
        <Link to={`/${menuItem.destination_page.uid}`} key={menuItem.destination_page.uid}>{menuItem.label}</Link>
      ))}
    </Menu>
  </HeaderStyled>
)}

export default Header
