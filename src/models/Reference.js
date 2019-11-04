import { database } from '../../firebase'

const PATH = 'references'
const DB = database.collection(PATH)

/**
 * Title, author, storageUrl, citation, summary
 *
 * @param {object} data
 */

/**
  * {
    "references": {
      "reference": {
        "title": "",
        "author": "",
        "storageUrl": "",
        "citation": "",
        "summary": ""
      }
    }
  }
  */

export const getAllReferences = () => {
  return DB.get().then(querySnapshot => {
    return querySnapshot
  })
}

export const Reference = data => {
  DB.add(data)
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id)
    })
    .catch(function (error) {
      console.error('Error adding document: ', error)
    })
}
