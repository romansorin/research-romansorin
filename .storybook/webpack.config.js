const path = require(`path`)
const fs = require('fs')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.css$/,
    use: [
      {
        loader: `postcss-loader`,
        options: {
          sourceMap: true,
          config: {
            path: `./.storybook/`
          }
        }
      }
    ],

    include: path.resolve(__dirname, `../`)
  })

  config.resolve.alias = {
    Components: path.resolve(__dirname, `../src/components`),
    Firebase: path.resolve(__dirname, `../firebase`),
    Models: path.resolve(__dirname, `../src/models`),
    Icons: path.resolve(__dirname, `../src/icons`),
    Images: path.resolve(__dirname, `../src/images`),
    Pages: path.resolve(__dirname, `../src/pages`),
    Stories: path.resolve(__dirname, `../src/stories`)
  }

  config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]

  config.module.rules[0].use[0].loader = require.resolve(`babel-loader`)

  config.module.rules[0].use[0].options.presets = [
    require.resolve(`@babel/preset-react`),
    require.resolve(`@babel/preset-env`)
  ]

  config.module.rules[0].use[0].options.plugins = [
    require.resolve(`@babel/plugin-proposal-class-properties`),
    require.resolve(`babel-plugin-remove-graphql-queries`)
  ]

  config.resolve.mainFields = [`browser`, `module`, `main`]

  return config
}
