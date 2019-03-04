const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Sayan Sivakumaran - Web Developer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/assets/favicon/favicon.png",
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'assets', 'img'),
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Sayan Sivakumaran - Web Developer',
        short_name: 'Sayan Sivakumaran',
        start_url: '/',
        display: 'minimal-ui',
        icon: './src/assets/favicon/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-svg-sprite',
    'gatsby-plugin-sass',
  ],
}
