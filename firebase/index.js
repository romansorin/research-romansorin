export {
  database as Database,
  storage as Storage,
  analytics as Analytics,
  functions as Functions
} from './config'

const algolia = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_API_KEY
)

const index = algolia.initIndex(process.env.ALGOLIA_INDEX_NAME)
