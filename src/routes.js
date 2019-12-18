const path = require('path')

const referencesRoute = 'src/pages/references/references.js'

module.exports = [
  {
    path: '/citations',
    component: path.resolve(referencesRoute)
  },
  {
    path: '/bibliography',
    component: path.resolve(referencesRoute)
  },
  {
    path: '/sources',
    component: path.resolve(referencesRoute)
  }
]
