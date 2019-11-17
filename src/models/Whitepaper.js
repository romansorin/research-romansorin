import Database from 'Firebase'

const PATH = 'whitepaper'
const DB = Database.collection(PATH)

/**
 * Title, author, storageUrl, citation, summary
 *
 * @param {object} data
 */

/**
  * {
  "sections": {
    "section": {
    	"sectionId": 0,
  		"title": "",
  	}
  },
  "content": {
  	"sectionOne": {
  		"sectionId": 0,
  		"title": "",
  		"subtitle": "",
  		"content": "",
  		"references": ""
  	}
  }
}
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
