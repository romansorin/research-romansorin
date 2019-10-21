const path = require('path')

module.exports = [
  {
    path: '/citations',
    component: path.resolve(`src/pages/bibliography.js`)
  },
  {
    path: '/references',
    component: path.resolve(`src/pages/bibliography.js`)
  },
  {
    path: '/sources',
    component: path.resolve(`src/pages/bibliography.js`)
  }
]
