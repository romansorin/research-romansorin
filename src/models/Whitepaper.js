import { database } from '../../firebase'

const PATH = 'whitepaper'
const DB = database.collection(PATH)

/**
 * Title, author, storageUrl, citation, summary
 *
 * @param {object} data
 */

export const Whitepaper = data => {
  DB.add(data)
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id)
    })
    .catch(function (error) {
      console.error('Error adding document: ', error)
    })
}
