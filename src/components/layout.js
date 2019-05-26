import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import 'typeface-pt-sans-narrow';
import 'typeface-pt-sans';

import '../styles/main.scss';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sayan Sivakumaran is a developer who makes websites that are fast, responsive, and cross browser compatible. Using technologies like CSS, JavaScript, and React, they can make anything from a static page to a single page application (SPA). ' },
            { name: 'keywords', content: 'developer, fast, responsive, website' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div>
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
