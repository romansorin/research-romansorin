import React, { useEffect, useState } from 'react'

import { Reference } from '../models/Reference'

const BibliographyPage = () => {
  return (
    <div>
      <button
        onClick={() =>
          Reference({
            title: 'A title',
            author: 'Roman sorin',
            summary: 'SDASDAS',
            storageUrl: 'NMUDASDAS',
            citation: 'no'
          })
        }
      >
        Add user
      </button>
    </div>
  )
}

export default BibliographyPage
