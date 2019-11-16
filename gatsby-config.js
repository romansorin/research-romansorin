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
        name: 'rs Research',
        short_name: 'research',
        start_url: '/',
        background_color: '#3f2afe',
        theme_color: '#3f2afe',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png'
      }
    },
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-routes',
      options: {
        path: `${__dirname}/src/routes.js`
      }
    },
    {
      resolve: 'gatsby-plugin-create-client-paths',
      options: { prefixes: ['/references/*'] }
    }
  ]
}
