const path = require('path')

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        Components: path.resolve(__dirname, 'src/components'),
        Firebase: path.resolve(__dirname, 'firebase'),
        Models: path.resolve(__dirname, 'src/models'),
        Icons: path.resolve(__dirname, 'src/icons'),
        Images: path.resolve(__dirname, 'src/images'),
        Pages: path.resolve(__dirname, 'src/pages')
      }
    }
  })
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@firebase/,
            use: loaders.null()
          }
        ]
      }
    })
  }
}

exports.createPages = ({ actions }) => {
  const { createRedirect } = actions

  const redirects = [
    '/citations/:reference',
    '/sources/:reference',
    '/bibliography/:reference'
  ]

  const redirectTo = '/references/:reference'

  redirects.forEach(redirect => {
    createRedirect({
      fromPath: redirect,
      isPermanent: true,
      toPath: redirectTo
    })
  })
}
