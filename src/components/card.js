import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import parse from 'html-react-parser'

import vars from '../vars'

const StyledCard = styled.div`
  background-color: ${props => vars[props.bg]};
  color: ${props =>
    props.bg !== 'colorWhite' ? vars.colorWhite : vars.colorBlack};
  padding: 2em;
  border-radius: ${vars.borderRadiusSmall};
  display: flex;
  flex-direction: column;

  > h2 {
    margin-bottom: 0;
    font-weight: ${vars.fontWeightBolder};
    font-size: ${vars.fontSizeHeading1};
    color: ${props =>
      props.bg !== 'colorWhite' ? vars.colorWhite : vars.colorBlack};

    span {
      font-weight: ${vars.fontWeightBold};
    }
  }

  a {
    display: block;
    margin-top: auto;
    color: currentColor;
    text-decoration: none;
    font-weight: ${vars.fontWeightBolder};
    font-size: ${vars.fontSizeText};
  }
`

const Card = ({ title, body, link, backgroundColor }) => {
  return (
    <StyledCard bg={backgroundColor}>
      <h2>{parse(title)}</h2>
      <div>{parse(body)}</div>
      {link && <Link to={link}>Read More</Link>}
    </StyledCard>
  )
}

export default Card
