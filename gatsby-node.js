exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
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
