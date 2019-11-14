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

export const getAllReferences = async () => {
  try {
    const querySnapshot = await DB.get()
    return querySnapshot
  } catch (error) {
    return console.log(error)
  }
}

export const addReference = data => {
  DB.add(data)
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id)
    })
    .catch(function (error) {
      console.error('Error adding document: ', error)
    })
}
