import React, { useEffect } from 'react'

import { database } from '../../firebase'

const BibliographyPage = () => {
  useEffect(() => {
    database
      .collection('users')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(`${doc.id} => ${doc.data()}`)
        })
      })
  }, [])
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
