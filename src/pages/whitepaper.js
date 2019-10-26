import React from 'react'

import { database } from '../../firebase'

const documents = database
  .collection('references')
  .get()
  .then(querySnapshot => {
    querySnapshot.forEach(doc => {
      console.log(`${doc.id} => ${doc.data()}`)
      return `<li>element</li>`
    })
  })

const WhitepaperPage = () => {
  return <div>{documents}</div>
}

export default WhitepaperPage
