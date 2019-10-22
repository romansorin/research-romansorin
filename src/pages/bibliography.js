import React, { useEffect } from 'react'

import { database } from '../../firebase'

const BibliographyPage = () => {
  return (
    <div>
      <button
        onClick={() => {
          database
            .collection('users')
            .add({
              first: 'Ada',
              last: 'Lovelace',
              born: 1815
            })
            .then(function (docRef) {
              console.log('Document written with ID: ', docRef.id)
            })
            .catch(function (error) {
              console.error('Error adding document: ', error)
            })
        }}
      >
        Add user
      </button>
    </div>
  )
}

export default BibliographyPage
