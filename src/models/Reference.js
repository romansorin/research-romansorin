import { Database } from 'Firebase'

const PATH = 'references'
const DB = Database.collection(PATH)

/**
 * Title, author, storageUrl, citation, summary
 *
 * @param {object} data
 */

export class Reference {
  constructor (doc) {
    this.authors = doc.authors
    this.title = doc.title
    this.summary = doc.summary
    this.date_posted = doc.date_posted
    this.citation = doc.citation
    this.storage_url = doc.storage_url
    this.slug = doc.slug
  }

  get referenceObject () {
    return {
      title: this.title,
      authors: this.authors,
      summary: this.summary,
      date_posted: this.date_posted,
      citation: this.citation,
      storage_url: this.storage_url,
      slug: this.slug
    }
  }
}

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
