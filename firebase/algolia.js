import Database from 'Firebase/'

const PATH = 'references'
const DB = Database.ref(PATH)

const algoliasearch = require('algoliasearch')

const algolia = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_API_KEY
)

const index = algolia.initIndex(process.env.ALGOLIA_INDEX_NAME)

DB.on('child_added', addOrUpdateIndexRecord)
DB.on('child_changed', addOrUpdateIndexRecord)
DB.on('child_removed', deleteIndexRecord)

function addOrUpdateIndexRecord (reference) {
  // Get Firebase object
  const record = reference.val()
  // Specify Algolia's objectID using the Firebase object key
  record.objectID = reference.key
  // Add or update object
  index
    .saveObject(record)
    .then(() => {
      console.log('Firebase object indexed in Algolia', record.objectID)
    })
    .catch(error => {
      console.error('Error when indexing contact into Algolia', error)
      process.exit(1)
    })
}

function deleteIndexRecord ({ key }) {
  // Get Algolia's objectID from the Firebase object key
  const objectID = key
  // Remove the object from Algolia
  index
    .deleteObject(objectID)
    .then(() => {
      console.log('Firebase object deleted from Algolia', objectID)
    })
    .catch(error => {
      console.error('Error when deleting contact from Algolia', error)
      process.exit(1)
    })
}
