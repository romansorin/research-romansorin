import { database } from '../../firebase'

const PATH = 'references'
const DB = database.collection(PATH)

export const Reference = data => {
  const reference = {
    title: data.title,
    author: data.author,
    citation: data.citation,
    summary: data.summary,
    storage_url: data.storageUrl
  }

  DB.add(reference)
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id)
    })
    .catch(function (error) {
      console.error('Error adding document: ', error)
    })
}
