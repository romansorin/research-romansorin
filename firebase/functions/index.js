const algoliasearch = require('algoliasearch')
const functions = require('firebase-functions')
const ALGOLIA_ID = functions.config().algolia.app_id
const ALGOLIA_ADMIN_KEY = functions.config().algolia.api_key
const ALGOLIA_SEARCH_KEY = functions.config().algolia.search_key

const ALGOLIA_INDEX_NAME = 'references'
const client = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY)

exports.onReferenceCreated = functions.firestore
  .document('references/{referenceId}')
  .onCreate((snap, context) => {
    // Get the note document
    const reference = snap.data()

    // Add an 'objectID' field which Algolia requires
    reference.objectID = context.params.referenceId

    // Write to the algolia index
    const index = client.initIndex(ALGOLIA_INDEX_NAME)
    return index
      .saveObject(reference)
      .then(() => {
        console.log('Reference imported into Algolia')
      })
      .catch(error => {
        console.log('Error when importing Reference into Algolia: ', error)
      })
  })
