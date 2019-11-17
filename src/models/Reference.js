import Database from 'Firebase'

const PATH = 'references'
const DB = Database.collection(PATH)

/**
 * Title, author, storageUrl, citation, summary
 *
 * @param {object} data
 */

export const getAllReferences = async () => {
  try {
    const querySnapshot = await DB.get()
    console.log(querySnapshot)
    return querySnapshot
  } catch (error) {
    return console.log(error)
  }
}

export const getReference = async slug => {
  try {
    return await DB.where('slug', '==', slug)
      .limit(1)
      .get()
      .then(querySnapshot => {
        return querySnapshot[0].data()
      })
      .catch(error => console.log(error))
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
