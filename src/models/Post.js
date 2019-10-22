import { database } from '../../firebase'

const PATH = 'posts'
const DB = database.collection(PATH)

/**
 * Title, subtitle, date, content
 *
 * @param {object} data
 */

export const Post = data => {
  DB.add(data)
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id)
    })
    .catch(function (error) {
      console.error('Error adding document: ', error)
    })
}
