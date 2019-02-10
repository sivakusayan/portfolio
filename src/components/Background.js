import React from 'react';
import { graphql, StaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

const Background = ({ children }) => (
  <StaticQuery query={graphql`
    query {
      desktop: file(relativePath: { eq: "background.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `}
   render={data => {
     // Set ImageData.
     const imageData = data.desktop.childImageSharp.fluid
     return (
        <BackgroundImage className="background" Tag="div" fluid={imageData}
        >
          {children}
        </BackgroundImage>
     )
   }
   }
  />
);

export default Background;