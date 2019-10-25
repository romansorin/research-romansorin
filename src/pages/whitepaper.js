import React from 'react'

import { database } from '../../firebase'

database
  .collection('references')
  .get()
  .then(querySnapshot => {
    querySnapshot.forEach(doc => {
      console.log(`${doc.id} => ${doc.data()}`)
      console.log(doc.data())
    })
  })

const WhitepaperPage = () => {
  return <div />
}

export default WhitepaperPage
