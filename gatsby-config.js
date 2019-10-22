const env = process.env.NODE_ENV || 'development'

require('dotenv').config({ path: `./.env.${env}` })

module.exports = {
  siteMetadata: {
    title: 'rs Research',
    description: 'rs Research',
    author: '@romansorin'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-postcss',
    // {
    //   resolve: 'gatsby-source-firebase',
    //   options: {
    //     // point to the firebase private key downloaded
    //     credential: require('./firebase-key.json'),

    //     // your firebase database root url
    //     databaseURL: 'https://.../../..'
    //   }
    // },
    {
      resolve: 'gatsby-plugin-routes',
      options: {
        // this is the path to your routes configuration file
        path: `${__dirname}/src/routes.js`
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
